/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, StackActions} from '@react-navigation/native';
import moment from 'moment';
import Toast from 'react-native-tiny-toast';

import {saleOrderStyles as styles} from '@styles/saleorder.style';
import PickerOrder from '@components/Forms/PickerOrder';
import HeaderBackStatusBar from '@components/headers/HeaderBackStatusBar';
import PickerDatetimeSale from '@components/Forms/PickerDatetimeSale';
import {
  onGetListPartner,
  onGetListTypePayment,
  onGetListBrand,
  onGetListStockWarehouse,
  onGetListEmployee,
  handleCreateOrder,
  onGetListAddress,
  handleEditOrder,
} from '@repository/Application/timesheet/CreateNewOrder';
import {LocalizationContext} from '@context/index';
import Search from '@components/Forms/Search';
import PlaceholderScreen from '@components/loadings/PlaceholderScreen';
import {showMessage} from '@utils/index';
import ItemProduct from '@components/Application/Sales/ItemProduct';
import ItemSeparator from '@components/Application/Sales/ItemSeparator';
import {setOrderLine} from '@redux/actions/dataAction';
import ModalListProduct from '@components/modal/ModalListProduct';
import ListProductSelected from '@components/Application/Sales/ListProductSelected';
import ItemLineCreate from '@components/Application/Sales/ItemLineCreate';
import {onGetListProduct} from '@repository/Product/index';
import themeStyle from '@styles/theme.style';
// import themeStyle from '@styles/theme.style';

// const WIDTH = Dimensions.get('screen').width;
const DATA_MONTH = [
  {
    id: '1',
    name: 'Tháng 1',
  },
  {
    id: '2',
    name: 'Tháng 2',
  },
  {
    id: '3',
    name: 'Tháng 3',
  },
  {
    id: '4',
    name: 'Tháng 4',
  },
  {
    id: '5',
    name: 'Tháng 5',
  },
  {
    id: '6',
    name: 'Tháng 6',
  },
  {
    id: '7',
    name: 'Tháng 7',
  },
  {
    id: '8',
    name: 'Tháng 8',
  },
  {
    id: '9',
    name: 'Tháng 9',
  },
  {
    id: '10',
    name: 'Tháng 10',
  },
  {
    id: '11',
    name: 'Tháng 11',
  },
  {
    id: '12',
    name: 'Tháng 12',
  },
];

export default function CreateNewOrder({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const orderLine = useSelector(st => st.datareduce.orderLine);
  // const scrollRef = useRef(null);
  const detail = route?.params?.detail;
  const partner = route?.params?.partner;
  const isCreate = route?.params?.isCreate;
  const x_brand_id = route?.params?.x_brand_id;
  const {t} = useContext(LocalizationContext);
  // const [tab, setTab] = useState([
  //     { key: 'detail', active: true },
  //     { key: 'other', active: false },
  // ]);
  const [customer, setCustomer] = useState({id: null, name: ''});
  const accessToken = useSelector(states => states.auth.accessToken);
  const user = useSelector(states => states.auth.user);
  const [orderDate, setOrderDate] = useState(new Date());
  const [listPartner, setListPartner] = useState([]);
  const [listTypePayment, setListTypePayment] = useState([]);
  // const [listEmployee, setListEmployee] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  const [listWarehouse, setListWarehouse] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [typePayment, setTypePayment] = useState({id: null, name: ''});
  const [employee, setEmployee] = useState({
    id: user.user_id.id,
    name: user.user_id.name,
  });
  const [brand, setBrand] = useState({id: null, name: ''});
  const [stockWarehouse, setStockWarehouse] = useState({
    id: null,
    name: '',
  });
  const [listAddress, setListAddress] = useState([]);
  const [address, setAddress] = useState({id: null, name: ''});
  const [visible, setVisible] = useState(false);
  const [isEditSO, setIsEditSO] = useState(route?.params?.isEdit || false);
  const [loading, setLoading] = useState(true);
  const [nameSearch, setNameSearch] = useState('');
  const [productName, setProductName] = useState('');
  const [nextPage, setNexPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [valueMonth, setValueMonth] = useState({id: null, name: ''});
  const [valueInput, setValueInput] = useState('');
  const [init, setInit] = useState(true);
  useEffect(() => {
    if (!init) {
      const delayGetProduct = setTimeout(() => {
        getListProduct(1, false);
      }, 500);
      return () => clearTimeout(delayGetProduct);
    }
  }, [productName]);
  useEffect(() => {
    Promise.all([
      onGetListPartner({
        accessToken: accessToken,
      }),
      onGetListBrand({
        accessToken: accessToken,
      }),
      onGetListTypePayment({
        accessToken: accessToken,
      }),
      onGetListStockWarehouse({
        accessToken: accessToken,
      }),
    ])
      .then(arrRes => {
        setLoading(false);
        setListPartner(arrRes[0].data);
        setListBrand(arrRes[1]);
        setListTypePayment(arrRes[2]);
        setListWarehouse(arrRes[3]);
        if (!detail) {
          const warehouse = arrRes[3].find(element =>
            element.name.toLowerCase().match('miền bắc'),
          );
          if (warehouse) {
            setStockWarehouse(warehouse);
          }
        }
        setInit(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('err init data', err);
      });
  }, []);
  useEffect(() => {
    // Check nếu là edit đơn hàng
    if (isEditSO && detail) {
      setCustomer({
        id: detail?.partner?.id,
        name: detail?.partner?.name,
        phone: detail?.phone,
      });
      if (detail?.x_address_delivery_id?.id) {
        setAddress({
          id: detail?.x_address_delivery_id?.id,
          name: detail?.x_address_delivery_id?.street,
        });
      }
      if (detail?.user_id?.id) {
        setEmployee({
          id: detail?.user_id?.id,
          name: detail?.user_id?.name,
        });
      }
      if (detail?.x_brand_id?.id) {
        setBrand({
          id: detail?.x_brand_id?.id,
          name: detail?.x_brand_id?.name,
        });
      }
      if (detail?.warehouse_id?.id) {
        setStockWarehouse({
          id: detail?.warehouse_id?.id,
          name: detail?.warehouse_id?.name,
        });
      }
      if (detail?.x_type_payment_id?.id) {
        setTypePayment({
          id: detail?.x_type_payment_id?.id,
          name: detail?.x_type_payment_id?.name,
        });
      }
      if (detail?.note) {
        setValueInput(detail?.note);
      }
      setOrderDate(detail?.date_order);
      // Nếu chuyển màn từ màn data
    } else if (isCreate && partner) {
      setCustomer({
        id: partner.id,
        name: partner.name,
        phone: partner.phone,
      });
      setBrand(x_brand_id);
    }
    return () => {
      dispatch(setOrderLine([], true));
    };
  }, []);
  useEffect(() => {
    if (customer.id) {
      getListAddress();
    }
  }, [getListAddress, customer.id]);
  useEffect(() => {
    console.log('get sp');
    getListProduct(1, false);
  }, [brand.id]);
  useEffect(() => {
    if (valueMonth?.id === null) {
      const mon = new Date();
      const findMonth = DATA_MONTH.find(ele => {
        return ele.name.toLowerCase() === `tháng ${mon.getMonth() + 1}`;
      });
      setValueMonth(findMonth);
    }
  }, [valueMonth?.id]);

  const getListProduct = (currentPage = 1, isLoadMore = false) => {
    onGetListProduct({
      access_token: accessToken,
      items_per_page: 10,
      x_brand_id: brand?.id || x_brand_id?.id,
      page: currentPage,
      name: productName,
    })
      .then(res => {
        setNexPage(res.meta.next_page);
        if (isLoadMore) {
          setListProduct(listProduct.concat(res.data));
        } else {
          setListProduct(res.data);
        }
        if (res.meta.current_page === res.meta.next_page) {
          setLoadMore(false);
        } else {
          setLoadMore(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  // Tìm kiếm khách hàng
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getListPartner('name', nameSearch);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [getListPartner, nameSearch]);
  // Tìm kiếm sản phẩm

  const getListPartner = useCallback(
    (code, value) => {
      onGetListPartner({
        accessToken: accessToken,
        code: code,
        value: value,
      })
        .then(res => {
          setListPartner(res.data);
        })
        .catch(err => {
          console.log('err getListPartner', err);
        });
    },
    [accessToken],
  );
  const getListAddress = useCallback(() => {
    onGetListAddress({
      accessToken: accessToken,
      partnerId: customer.id,
    })
      .then(res => {
        const arrAddress = res.data.map(item => ({
          id: item.id,
          name: item.street,
        }));
        setListAddress(arrAddress);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [accessToken, customer.id]);

  const createNewOrder = () => {
    if (!detail?.id) {
      const loadingAction = Toast.showLoading();
      handleCreateOrder({
        accessToken: accessToken,
        partner_id: customer.id,
        date_order: moment(orderDate).format('YYYY-MM-DD HH:mm:ss'),
        warehouse_id: stockWarehouse.id,
        x_type_payment_id: typePayment.id,
        x_brand_id: brand.id,
        user_id: employee.id,
        order_line: orderLine,
        x_address_delivery_id: address.id,
        x_month_transaction: valueMonth.id,
        note: valueInput,
      })
        .then(res => {
          Toast.hide(loadingAction);
          Toast.showSuccess(t('order_create_success'));
          dispatch(setOrderLine([], true));
          navigation.dispatch(
            StackActions.replace('DetailOrderScreen', {
              id: res.id,
            }),
          );
        })
        .catch(err => {
          Toast.hide(loadingAction);
          console.log('err: ', err);
          Toast.show(err);
        });
    } else {
      edit();
    }
  };
  const edit = () => {
    const loadingAction = Toast.showLoading();
    handleEditOrder({
      accessToken: accessToken,
      id: detail?.id,
      partner_id: customer.id,
      date_order: orderDate,
      x_type_payment_id: typePayment.id,
      user_id: employee.id,
      x_brand_id: brand.id,
      warehouse_id: stockWarehouse.id,
      order_line: orderLine,
      x_address_delivery_id: address.id,
      x_month_transaction: valueMonth.id,
      note: valueInput,
    })
      .then(res => {
        Toast.hide(loadingAction);
        Toast.showSuccess(t('saved_successfully'));
        if (navigation.canGoBack) {
          navigation.goBack();
        }
      })
      .catch(err => {
        Toast.hide(loadingAction);
        Toast.show(err);
        console.log('err: ', err);
      });
  };
  const openModal = () => {
    setVisible(true);
  };
  const addToOrderLine = item => {
    if (!isCreate) {
      dispatch(setOrderLine({...item, product_id: item.id, isEdit: true}));
    } else {
      dispatch(setOrderLine(item));
    }
    // showMessage(t('add_product_success'));
  };
  const onChangePartner = item => {
    setCustomer(item);
    setBrand(item.x_brand_id);
  };
  // const onChangeText = (text) => {
  //     if (text) {
  //         const newList = listProduct.filter((item) => {
  //             return item.name.toLowerCase().match(text.toLowerCase().trim());
  //         });
  //         setIsEditSO(false);
  //     } else {
  //         setIsEditSO(true);
  //     }
  // };
  const onEndReached = () => {
    if (loadMore) {
      getListProduct(nextPage, true);
    }
  };
  const renderProduct = ({item, index}) => (
    <ItemProduct item={item} index={index} setValue={addToOrderLine} />
  );
  const renderSeparator = () => <ItemSeparator />;
  const renderEmpty = () => (
    <View style={styles.viewEmpty}>
      <Text style={styles.txtEmpty}>{t('no_data')}</Text>
    </View>
  );
  const listFooter = () => {
    return loadMore && <PlaceholderScreen />;
  };
  const renderHeader = () => (
    <View
      style={{
        paddingHorizontal: normalize(10),
        marginTop: normalize(20),
      }}>
      <ItemLineCreate
        label={t('customer')}
        renderValue={() => (
          <View style={styles.customerContain}>
            <View style={styles.namePicker}>
              <Search
                data={listPartner}
                value={customer}
                setValue={onChangePartner}
                holder={t('select_customer')}
                setNameSearch={setNameSearch}
              />
            </View>
            <Text style={styles.phone}>{customer.phone}</Text>
          </View>
        )}
      />
      <ItemLineCreate
        label={t('address_delivery')}
        renderValue={() => (
          <PickerOrder
            data={listAddress}
            name={address?.name || t('address_delivery')}
            setValue={setAddress}
          />
        )}
      />
      <ItemLineCreate
        label={t('date_order')}
        renderValue={() => (
          <PickerDatetimeSale value={orderDate} setValue={setOrderDate} />
        )}
      />
      <ItemLineCreate
        label={t('type_payment')}
        renderValue={() => (
          <PickerOrder
            data={listTypePayment}
            name={typePayment?.name || t('select_type_payment')}
            setValue={setTypePayment}
          />
        )}
      />

      <ItemLineCreate
        label={t('commodity_industry')}
        renderValue={() => (
          <PickerOrder
            data={listBrand}
            name={brand?.name || t('select_brands')}
            setValue={setBrand}
          />
        )}
      />
      <ItemLineCreate
        label={t('warehouse')}
        renderValue={() => (
          <PickerOrder
            data={listWarehouse}
            name={stockWarehouse?.name || t('select_warehouse')}
            setValue={setStockWarehouse}
          />
        )}
      />
      <ItemLineCreate
        label={t('month_transaction')}
        renderValue={() => (
          <PickerOrder
            data={DATA_MONTH}
            name={valueMonth?.name || t('change_month')}
            setValue={setValueMonth}
          />
        )}
      />
      <View style={styles.viewNote}>
        <Text style={styles.titleNote}>{t('note')} :</Text>
        <TextInput
          textAlignVertical={'top'}
          style={styles.viewInput}
          value={valueInput}
          onChangeText={setValueInput}
          multiline
        />
      </View>
      <View style={styles.detail}>
        <View style={styles.searchContain}>
          <TextInput
            style={styles.searchInput}
            placeholder={t('search_product')}
            onChange={e => setProductName(e.nativeEvent.text)}
          />
          <TouchableOpacity onPress={openModal} style={styles.btnSelected}>
            {orderLine.length > 0 && (
              <View style={styles.total}>
                <Text style={styles.txtTotal}>{orderLine.length}</Text>
              </View>
            )}
            <Text style={styles.txtSelected}>{t('selected')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.contain}>
      <HeaderBackStatusBar
        title={detail?.name ? detail?.name : t('create_new_order')}
      />
      {loading ? (
        <PlaceholderScreen />
      ) : (
        <>
          <FlatList
            data={listProduct}
            renderItem={renderProduct}
            ListHeaderComponent={renderHeader()}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={listFooter}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.viewSave}>
            <TouchableOpacity style={styles.btnSave} onPress={createNewOrder}>
              <Text style={styles.txtSave}>{t('save_form')}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <ModalListProduct isOpen={visible} onClose={() => setVisible(false)} />
    </View>
  );
}
