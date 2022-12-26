/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';
import normalize from 'react-native-normalize';
import HeaderBackStatusBar from '@components/headers/HeaderBackStatusBar';
import {
  onGetDetailOrder,
  handleActionSaleOrder,
  handleConfirmPromotion,
} from '@repository/Sales/Sales';
import {saleOrderStyles as styles} from '@styles/saleorder.style';
import {LocalizationContext} from '@context/index';
import {num2numDong, showMessage} from '@utils/index';
import PlaceholderScreen from '@components/loadings/PlaceholderScreen';
import RefuseReason from '@components/modal/RefuseReason';
import ModalPromotions from '@components/modal/ModalPromotions';
import ModalApprove from '@components/modal/ModalApprove';
import ItemProduct from '@components/Application/Sales/ItemProduct';
import ItemSeparator from '@components/Application/Sales/ItemSeparator';
import {setOrderLine} from '@redux/actions/dataAction';
import LineItem from '@components/Application/Sales/LineItem';
import moment from 'moment';
import {VN_FORMAT_DATETIME} from '@configs/Configs';
const WIDTH = Dimensions.get('screen').width;

export default function DetailOrderScreen({route}) {
  const {id} = route.params;
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const {t} = useContext(LocalizationContext);
  const accessToken = useSelector(states => states.auth.accessToken);
  const navigation = useNavigation();
  const [detail, setDetail] = useState({name: ''});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [textCancel, setTextCancel] = useState('');
  const [tab, setTab] = useState([
    {key: 'detail', active: true},
    {key: 'other', active: false},
  ]);
  const [isOpenCancel, setIsOpenCancel] = useState(false);
  const [isOpenPromotion, setIsOpenPromotion] = useState(false);
  const [listPromotion, setListPromotion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenApprove, setIsOpenApprove] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      setTab([
        {key: 'detail', active: true},
        {key: 'other', active: false},
      ]);
      getOrder();
    }, []),
  );

  // Chuyển tab thông tin
  const onChangeTab = activeTab => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({
        x: activeTab * WIDTH,
        y: 0,
        animate: true,
      });
      const tabFormat = [...tab];
      tabFormat.forEach((it, idx) => {
        if (idx === activeTab) {
          it.active = true;
        } else {
          it.active = false;
        }
      });
      setTab(tabFormat);
    }
  };
  const getOrder = () => {
    onGetDetailOrder({
      accessToken: accessToken,
      id: id,
    })
      .then(res => {
        setDetail(res);
        // console.log(JSON.stringify(res, null, 2));
        const list_product_uom_qty = res.order_line.map(
          item => item.product_uom_qty,
        );
        // const list_qty_invoiced = res.order_line.map(
        //     (item) => item.qty_invoiced,
        // );
        // const list_qty_delivered = res.order_line.map(
        //     (item) => item.qty_delivered,
        // );
        // const list_price_subtotal = res.order_line.map(
        //     (item) => item.price_subtotal,
        // );
        // const total_price = list_price_subtotal.reduce(
        //     (total, number) => {
        //         return total + number;
        //     },
        //     0,
        // );
        const total_count_product = list_product_uom_qty.reduce(
          (total, number) => {
            return total + number;
          },
          0,
        );
        setTotalQuantity(total_count_product);
        // const total_count_delivered = list_qty_delivered.reduce(
        //     (total, number) => {
        //         return total + number;
        //     },
        //     0,
        // );
        // const total_count_invoiced = list_qty_invoiced.reduce(
        //     (total, number) => {
        //         return total + number;
        //     },
        //     0,
        // );
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('err getOrder', err);
      });
  };

  // Action
  const handleAction = key => {
    // Nếu action hủy hiện modal để nhập lý do hủy
    if (key === 'action_cancel_custom') {
      setIsOpenCancel(true);
      // Xử lí nếu là action áp dụng CTKM
    } else if (key === 'button_promotion') {
      const loadingAction = Toast.showLoading();
      handleActionSaleOrder({
        id,
        accessToken,
        action: key,
      })
        .then(res => {
          console.log('🚀 ~ file: view.js ~ line 153 ~ .then ~ res', res);
          Toast.hide(loadingAction);
          if (res.list_promotion) {
            setListPromotion(res.list_promotion);
            setIsOpenPromotion(true);
          } else {
            Toast.showSuccess(t('edit_success'));
            setLoading(true);
            getOrder();
          }
        })
        .catch(err => {
          console.log('TCL: handleAction -> err', err);
          Toast.hide(loadingAction);
        });
      // Nếu là action phê duyệt thì mở modal chọn option phê duyệt
    } else if (key === 'action_approve') {
      setIsOpenApprove(true);
    } else {
      const loadingAction = Toast.showLoading();
      handleActionSaleOrder({
        id,
        accessToken,
        action: key,
      })
        .then(res => {
          setLoading(true);
          Toast.hide(loadingAction);
          Toast.showSuccess(t('edit_success'));
          getOrder();
        })
        .catch(err => {
          Toast.hide(loadingAction);
          console.log(err);
        });
    }
  };
  // Hủy đơn hàng
  const onActionCancel = () => {
    const loadingAction = Toast.showLoading();
    handleActionSaleOrder({
      id,
      accessToken,
      action: 'action_cancel_custom',
      textCancel,
    })
      .then(res => {
        Toast.hide(loadingAction);
        setLoading(true);
        getOrder();
      })
      .catch(err => {
        Toast.hide(loadingAction);
        showMessage(err);
        console.log(err);
      });
  };
  // const num2numDong = (num) => {
  //     return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  // };
  const closeModalPromotion = () => {
    setIsOpenPromotion(false);
  };
  // Áp dụng chương trình khuyến mãi
  const applyPromotion = list => {
    const loadingAction = Toast.showLoading();
    handleConfirmPromotion({id, accessToken, listPromotion: list})
      .then(res => {
        Toast.hide(loadingAction);
        Toast.showSuccess(t('edit_success'));
        setLoading(true);
        getOrder();
        setIsOpenPromotion(false);
      })
      .catch(err => {
        Toast.hide(loadingAction);

        console.log(err);
      });
  };
  // Action phê duyệt
  const handleApprove = key => {
    const loadingAction = Toast.showLoading();
    setIsOpenApprove(false);
    handleActionSaleOrder({
      id,
      accessToken,
      action: 'action_approve',
      approveType: key,
    })
      .then(res => {
        Toast.hide(loadingAction);
        Toast.showSuccess(t('edit_success'));
        setLoading(true);
        getOrder();
      })
      .catch(err => {
        Toast.hide(loadingAction);
        console.log('TCL: handleApprove -> err', err);
      });
  };
  // Hiện modal xem sản phẩm
  // const showProduct = (item) => {
  //     setProduct({ ...item, quantity: item.product_uom_qty });
  //     setIsShowProduct(true);
  // };
  const onEdit = () => {
    dispatch(setOrderLine(detail?.order_line, true));
    navigation.navigate('CreateNewOrder', {detail: detail, isEdit: true});
  };
  const renderProduct = ({item, index}) => (
    <ItemProduct index={index} item={item} disabled={true} />
  );
  const renderSeparator = () => <ItemSeparator />;
  const renderItemButton = ({item}) => (
    <TouchableOpacity
      onPress={() => handleAction(item.key)}
      style={styles.buttonDetail(item)}>
      <Text style={styles.txtButton}>{item?.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.contain}>
      <HeaderBackStatusBar
        title={detail?.name}
        hasBackgroundColor={false}
        hasIcon={detail.state === 'draft'}
        clickIcon={onEdit}
        nameIcon={'edit'}
      />
      {loading ? (
        <PlaceholderScreen />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: normalize(10),
            }}>
            <LineItem title={t('customer')} value={detail?.partner?.name} />
            <LineItem title={t('work_mobile')} value={detail?.phone} />
            <LineItem
              title={t('address_delivery')}
              value={detail?.x_address_delivery_id?.street}
            />
            <LineItem
              title={t('date_order')}
              value={moment(detail?.date_order).format(VN_FORMAT_DATETIME)}
            />
            <LineItem
              title={t('type_payment')}
              value={detail?.x_type_payment_id?.name}
            />
            <LineItem
              title={t('commodity_industry')}
              value={detail?.x_brand_id?.name}
            />
            <LineItem
              title={t('warehouse')}
              value={detail?.warehouse_id?.name}
            />
            <View style={styles.tabContain}>
              {tab.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => onChangeTab(index)}
                    style={styles.btnTab(item.active)}>
                    <Text style={styles.txtTab(item.active)}>
                      {t(item.key)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ScrollView
              scrollEnabled={false}
              horizontal
              pagingEnabled
              ref={scrollRef}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.detail}>
                <FlatList
                  data={detail?.order_line}
                  keyExtractor={item => item.id}
                  renderItem={renderProduct}
                  ItemSeparatorComponent={renderSeparator}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.detail}>
                <LineItem
                  title={t('table_price')}
                  value={detail?.pricelist_id}
                />
                <LineItem
                  title={t('sales_staff')}
                  value={detail?.user_id?.name}
                />
                <LineItem
                  title={t('team_sales')}
                  value={detail?.team_id?.name}
                />
                <LineItem
                  title={t('estimated_agent_level')}
                  value={detail?.x_compute_hierarchy_id?.name}
                />
                <LineItem
                  title={t('month_transaction')}
                  value={detail?.x_month_transaction}
                />
                <LineItem
                  title={t('note')}
                  value={detail?.note}
                  multiline={true}
                />
              </View>
            </ScrollView>

            <View style={styles.totalContain}>
              <Text style={styles.amountTotal}>
                {t('total')}:{' '}
                <Text style={styles.valueTotal}>
                  {num2numDong(detail.amount_total)}
                </Text>
              </Text>
            </View>
            <LineItem
              title={t('billed')}
              value={
                detail?.invoiced_amount
                  ? num2numDong(detail?.invoiced_amount)
                  : detail?.invoiced_amount
              }
            />
            <LineItem
              title={t('paid')}
              value={
                detail?.paid_amount
                  ? num2numDong(detail?.paid_amount)
                  : detail?.paid_amount
              }
            />
            <LineItem
              title={t('unpaid')}
              value={
                detail?.amount_due
                  ? num2numDong(detail?.amount_due)
                  : detail?.amount_due
              }
            />
            <LineItem
              title={t('total_product_quantity')}
              value={totalQuantity}
            />
          </ScrollView>
          <View style={styles.viewButton}>
            <FlatList
              data={detail.buttons}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={renderItemButton}
            />
          </View>
        </>
      )}

      <RefuseReason
        visible={isOpenCancel}
        refuseReason={textCancel}
        setRefuseReason={setTextCancel}
        setVisible={setIsOpenCancel}
        onAction={onActionCancel}
        title={t('reason')}
      />
      <ModalPromotions
        isOpen={isOpenPromotion}
        data={listPromotion}
        onClose={closeModalPromotion}
        nameSaleOrder={detail?.name}
        namePartner={detail?.partner?.name}
        applyPromotion={applyPromotion}
      />
      <ModalApprove
        isOpen={isOpenApprove}
        onClose={() => setIsOpenApprove(false)}
        approve={handleApprove}
        name={detail?.name}
      />
    </View>
  );
}
