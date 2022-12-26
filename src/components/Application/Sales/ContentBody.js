import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  FlatList,
  RefreshControl,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';

import {LocalizationContext} from '@context/index';
import theme from '@styles/theme.style';
import Colors from '@styles/color';
import SvgDashLine from '@assets/svg/SvgDashLine';
import IconSell from '@assets/svg/icons/SvgIconSell';
// import HeaderPartner from '@components/Application/Partner/HeaderPartner';
// import {onGetListOrder} from '@repository/Sales/Sales';
// import EmptyData from '@components/EmptyData';
// import PlaceholderScreen from '@components/loadings/PlaceholderScreen';
import {VN_FORMAT_DATETIME} from '@configs/Configs';
import {num2numDong} from '@utils/';
const DATA = [
  {name: 'Tìm theo tên đơn hàng', code: 'name'},
  {name: 'Tìm theo tên khách hàng', code: 'partner'},
  {name: 'Tìm theo tên NVKD', code: 'user_id'},
];
const ContentBody = ({type}) => {
  const {t} = useContext(LocalizationContext);
  const accessToken = useSelector(state => state.auth.accessToken);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [meta, setMeta] = useState({current_page: 1, next_page: 2});
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  //   useEffect(() => {
  //     getOrder({page: 1, loadMore: false});
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const getOrder = ({
  //     page = 1,
  //     codeSearch = '',
  //     valueSearch = '',
  //     loadMore = false,
  //   }) => {
  //     onGetListOrder({
  //       accessToken: accessToken,
  //       state: type,
  //       page: page,
  //       code: codeSearch,
  //       value: valueSearch,
  //     })
  //       .then(res => {
  //         if (loadMore) {
  //           setList(list.concat(res.data));
  //         } else {
  //           setList(res.data);
  //         }
  //         setMeta(res.meta);
  //         if (res.meta.next_page > res.meta.current_page) {
  //           setIsLoadMore(true);
  //           setNextPage(res.meta.next_page);
  //         } else {
  //           setIsLoadMore(false);
  //         }
  //         setIsLoadData(false);
  //         setRefreshing(false);
  //       })
  //       .catch(err => {
  //         setIsLoadData(false);
  //         setRefreshing(false);
  //         setIsLoadMore(false);
  //         console.log('err getOrder', err);
  //       });
  //   };

  const onPress = item => {
    navigation.navigate('NoFooter', {
      screen: 'DetailOrderScreen',
      params: {
        id: item.id,
        accessToken: accessToken,
      },
    });
  };

  const currencyFormat = num => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  //   const loadMore = () => {
  //     if (isLoadMore) {
  //       getOrder({
  //         page: nextPage,
  //         codeSearch: code,
  //         valueSearch: value,
  //         loadMore: true,
  //       });
  //     }
  //   };

  //   const footerOrder = () => {
  //     return isLoadMore ? <PlaceholderScreen /> : null;
  //   };

  //   const RefreshOrder = () => {
  //     setRefreshing(true);
  //     setIsLoadData(true);
  //     getOrder({page: 1, loadMore: false});
  //     setValue('');
  //     setCode('');
  //   };
  //   const onSearch = (item, textSearch) => {
  //     // console.log('search');
  //     setCode(item.code);
  //     setValue(textSearch);
  //     setIsLoadData(true);
  //     getOrder({
  //       codeSearch: item.code,
  //       valueSearch: textSearch,
  //       loadMore: false,
  //       page: 1,
  //     });
  //   };
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.touchOpacity}>
          <View style={styles.viewIcon}>
            <View style={styles.viewBoder}>
              <IconSell
                color={
                  (item.state.key === 'done' || item.state.key === 'sale') &&
                  item.x_status_transfer.key === 'transfered'
                    ? Colors.MANTIS
                    : Colors.MONZA
                }
              />
            </View>
          </View>
          <View style={styles.viewText}>
            <View style={styles.stateContain}>
              <View style={styles.viewState(item?.state?.key)}>
                <Text numberOfLines={1} style={styles.textTT}>
                  {item?.state?.name}
                </Text>
              </View>
              <View
                style={styles.viewStateRTransfer(item.x_status_transfer.key)}>
                <Text numberOfLines={1} style={styles.textTT}>
                  {item.x_status_transfer.name}
                </Text>
              </View>
            </View>
            <Text style={styles.title} numberOfLines={1}>
              {item.name} - {item.partner}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
              {t('date')}: {moment(item.date_order).format(VN_FORMAT_DATETIME)}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
              {t('total')}: {num2numDong(item.amount_total, false)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //   const _renderHeader = () => {
  //     return (
  //       <HeaderPartner
  //         currentRecord={list.length}
  //         totalRecord={meta?.total_record}
  //         data={DATA}
  //         onPress={onSearch}
  //       />
  //     );
  //   };
  const renderSeparator = () => (
    <View style={styles.line}>
      <SvgDashLine
        color={Colors.GRAYCHATEAU}
        width={'100%'}
        style={{
          marginLeft: normalize(Platform.OS === 'android' ? 20 : 16, 'width'),
        }}
      />
      <SvgDashLine color={Colors.GRAYCHATEAU} width={'100%'} />
    </View>
  );
  return (
    <View>
      {/* {_renderHeader()}
      {isLoadData ? (
        <PlaceholderScreen />
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item, index) => item.id}
          renderItem={_renderItem}
          ListFooterComponent={footerOrder}
          ListEmptyComponent={() => <EmptyData title="no_data" />}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={RefreshOrder} />
          }
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          contentContainerStyle={styles.list}
        />
      )} */}
    </View>
  );
};

export default ContentBody;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#626A72',
    marginVertical: normalize(3),
  },
  list: {paddingBottom: normalize(70)},
  text: {
    fontFamily: theme.FONT_FAMILY,
    color: '#626A72',
    fontSize: 13,
    marginVertical: normalize(3),
  },
  textTT: {
    fontFamily: theme.FONT_FAMILY,
    color: Colors.WHITE,
    fontSize: normalize(13),
    // paddingVertical: normalize(5),
    paddingVertical: normalize(5),
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: normalize(3),
  },
  viewState: key => ({
    marginRight: normalize(10),
    borderRadius: normalize(5),
    backgroundColor:
      key === 'done' || key === 'sale' ? Colors.MANTIS : Colors.MONZA,

    flex: 1,
  }),
  viewStateRTransfer: key => ({
    backgroundColor: key === 'transfered' ? Colors.MANTIS : Colors.MONZA,
    flex: 1,
    borderRadius: 5,
  }),
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoder: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ALABASTER,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: normalize(10),
  },
  touchOpacity: {
    flexDirection: 'row',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginHorizontal: normalize(70),
    marginVertical: normalize(10),
  },
  stateContain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
});

export const scrollTabStyles = {
  underlineStyle: {
    backgroundColor: Colors.HOKI,
  },
  style: {
    borderBottomColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
  },
};
export const tabStyles = {
  tabStyle: {
    backgroundColor: Colors.WHITE,
  },
  textStyle: {
    fontFamily: theme.FONT_BOLD,
    color: Colors.DUSTY_GRAY,
  },
  activeTabStyle: {
    backgroundColor: Colors.WHITE,
  },
  activeTextStyle: {
    color: Colors.EBONY_CLAY,
    fontFamily: theme.FONT_BOLD,
  },
};
