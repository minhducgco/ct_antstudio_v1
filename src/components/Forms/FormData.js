import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  RefreshControl,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import {Tab, ScrollableTab} from 'native-base';
import {Tabs} from 'native-base';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {LocalizationContext} from '@context/index';
import theme from '@styles/theme.style';
import Colors from '@styles/color';
import {IconItemPartner} from '@assets/svg/icons';
import SvgDashLine from '@assets/svg/SvgDashLine';
import IconSell from '@assets/svg/icons/SvgIconSell';
import color from '@styles/color';
import HeaderPartner from '@components/Application/Partner/HeaderPartner';
import themeStyle from '@styles/theme.style';
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

const ContentBody = ({
  Data,
  viewScreenNav,
  typeScreen,
  refreshing = false,
  onLoadMore,
  onRefresh,
  ListFooterComponent,
  meta,
}) => {
  const {t} = useContext(LocalizationContext);
  const accessToken = useSelector(state => state.auth.accessToken);
  const navigation = useNavigation();

  const onPress = item => {
    navigation.navigate('NoFooter', {
      screen: viewScreenNav,
      params: {
        id: item.id,
        accessToken: accessToken,
      },
    });
  };

  const currencyFormat = num => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  const _renderItem = ({item, index}) => {
    switch (typeScreen) {
      case 'Sales':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconSell
                    color={
                      item.payment_status.key === 'no_confirm'
                        ? Colors.MONZA
                        : item.x_status_transfer.key === 'no_transfer'
                        ? Colors.MONZA
                        : item.payment_status.key === 'no_payment'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(
                      Platform.OS === 'android' ? 32 : 28,
                      'height',
                    )}
                    width={normalize(
                      Platform.OS === 'android' ? 32 : 28,
                      'height',
                    )}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.viewState,
                      {
                        backgroundColor:
                          item.payment_status.key === 'no_confirm'
                            ? Colors.MONZA
                            : item.payment_status.key === 'no_payment'
                            ? Colors.MONZA
                            : Colors.MANTIS,
                      },
                    ]}>
                    <Text numberOfLines={1} style={styles.textTT}>
                      {item.payment_status.name}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.viewState,
                      {
                        backgroundColor:
                          item.x_status_transfer.key === 'no_transfer'
                            ? Colors.MONZA
                            : item.x_status_transfer.key === 'cancel'
                            ? Colors.MONZA
                            : Colors.MANTIS,
                      },
                    ]}>
                    <Text numberOfLines={1} style={styles.textTT}>
                      {item.x_status_transfer.name}
                    </Text>
                  </View>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.name} - {item.partner}
                </Text>
                <Text style={styles.text}>
                  {t('date')}: {item.date_order}
                </Text>
                <Text style={styles.text}>
                  {t('total')}: {currencyFormat(item.amount_total)}
                </Text>
              </View>
            </View>
            <SvgDashLine
              color={Colors.GRAYCHATEAU}
              width={'100%'}
              style={{
                marginLeft: normalize(
                  Platform.OS === 'android' ? 20 : 16,
                  'width',
                ),
              }}
            />
          </TouchableOpacity>
        );
      case 'Data':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                {/* <View style={styles.viewBoder}> */}
                {/* <IconItemPartner
                                        color={
                                            item.payment_status.key ===
                                            'no_confirm'
                                                ? Colors.MONZA
                                                : item.x_status_transfer.key ===
                                                  'no_transfer'
                                                ? Colors.MONZA
                                                : item.payment_status.key ===
                                                  'no_payment'
                                                ? Colors.MONZA
                                                : Colors.MANTIS
                                        }
                                        height={normalize(
                                            Platform.OS === 'android' ? 32 : 26,
                                            'height',
                                        )}
                                        width={normalize(
                                            Platform.OS === 'android' ? 32 : 20,
                                            'height',
                                        )}
                                    /> */}
                <View style={styles.viewBoder}>
                  <IconItemPartner color={Colors.MONZA} />
                </View>
                {/* </View> */}
              </View>
              <View style={styles.viewContent}>
                <View style={styles.viewName}>
                  <Text style={styles.txtName}>Hoàng kiều dung</Text>

                  <View style={styles.toSellWholesale(0)}>
                    <Text style={styles.state}>Đang chăm sóc</Text>
                  </View>
                </View>
                <Text style={styles.txtAddress}>SĐT: 098.888.8888</Text>
                <Text style={styles.txtAddress}>Số lần chăm sóc : 5</Text>
                <Text style={styles.txtAddress}>
                  Nhân viên phụ trách : Nguyễn Thị Hạnh
                </Text>
              </View>
            </View>
            <SvgDashLine
              color={Colors.GRAYCHATEAU}
              width={'100%'}
              style={{
                marginLeft: normalize(
                  Platform.OS === 'android' ? 20 : 30,
                  'width',
                ),
              }}
            />
          </TouchableOpacity>
        );
    }
  };

  const _renderHeader = () => {
    return (
      <HeaderPartner
        currentRecord={Data?.length}
        totalRecord={meta?.total_record}
      />
    );
  };

  return (
    <FlatList
      indicatorStyle="white"
      data={Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
      stickySectionHeadersEnabled={true}
      ListHeaderComponent={_renderHeader}
      ListFooterComponent={ListFooterComponent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReachedThreshold={0.1}
      onEndReached={onLoadMore}
    />
  );
};

const FormData = ({
  States,
  Data,
  setState,
  typeScreen,
  viewScreenNav,
  refreshing = false,
  onLoadMore,
  onRefresh,
  ListFooterComponent,
  meta,
}) => {
  const _onChangeTab = tab => {
    setState(States[tab.i].key);
  };
  return (
    <Tabs
      renderTabBar={() => <ScrollableTab {...scrollTabStyles} />}
      onChangeTab={_onChangeTab}
      locked={true}>
      {States.map(tab => {
        return (
          <Tab heading={tab.name} key={tab.key} {...tabStyles}>
            <ContentBody
              Data={Data}
              typeScreen={typeScreen}
              refreshing={refreshing}
              viewScreenNav={viewScreenNav}
              onLoadMore={onLoadMore}
              onRefresh={onRefresh}
              ListFooterComponent={ListFooterComponent}
              meta={meta}
            />
          </Tab>
        );
      })}
    </Tabs>
  );
};
FormData.propTypes = {
  States: PropTypes.arrayOf(PropTypes.object).isRequired,
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeIcon: PropTypes.string.isRequired,
  nameIcon: PropTypes.string.isRequired,
  typeScreen: PropTypes.string.isRequired,
  viewScreenNav: PropTypes.string.isRequired,
};

export default FormData;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#626A72',
  },
  text: {
    fontFamily: theme.FONT_FAMILY,
    color: '#626A72',
    fontSize: 13,
  },
  textTT: {
    fontFamily: theme.FONT_FAMILY,
    color: Colors.WHITE,
    fontSize: 13,
    paddingVertical: normalize(5),
  },
  cardItem: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginLeft: 10,
  },
  headerContainer: {
    backgroundColor: color.WHITE,
  },
  headerText: {
    fontFamily: theme.FONT_BOLD,
    color: Colors.BLACK,
  },
  iconBox: {
    height: normalize(50),
    width: normalize(50),
    backgroundColor: Colors.CRIMSON,
    justifyContent: 'center',
    margin: normalize(15),
    borderRadius: 15,
  },
  icon: {
    fontSize: 26,
    alignSelf: 'center',
    color: Colors.WHITE,
  },
  viewTT: {
    width: normalize(200, 'width'),
    height: normalize(20, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(5),
    marginBottom: normalize(Platform.OS === 'android' ? 0 : 5, 'height'),
  },
  viewState: {
    // width: normalize(125, 'width'),
    height: normalize(20, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(5),
    marginBottom: normalize(Platform.OS === 'android' ? 0 : 5, 'height'),
    paddingHorizontal: normalize(5),
    marginRight: normalize(10),
  },
  viewIcon: {
    flex: Platform.OS === 'android' ? 1 : 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoder: {
    height: normalize(Platform.OS === 'android' ? 70 : 70, 'height'),
    width: normalize(Platform.OS === 'android' ? 70 : 70, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ALABASTER,
    borderRadius: 50,
  },
  viewText: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: normalize(16, 'width'),
  },
  touchOpacity: {
    height: normalize(100, 'height'),
    flexDirection: 'row',
  },
  viewContent: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '70%',
    top: normalize(15),
  },
  viewName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    fontSize: normalize(14),
    fontFamily: themeStyle.FONT_BOLD,
    width: '55%',
  },
  toSellWholesale: index => ({
    backgroundColor: index % 2 === 0 ? '#61BD4F' : Colors.MONZA,
    paddingHorizontal: normalize(5),
    borderRadius: normalize(5),
    paddingVertical: normalize(3),
    marginTop: normalize(5),
  }),
  state: {
    fontSize: normalize(13),
    fontFamily: themeStyle.FONT_FAMILY,
    color: themeStyle.COLOR_WHITE,
  },
  txtGmail: {
    color: Colors.DUSTY_GRAY,
    fontSize: normalize(13),
  },
  txtAddress: {
    fontSize: normalize(13),
    fontFamily: themeStyle.FONT_FAMILY,
  },
});
