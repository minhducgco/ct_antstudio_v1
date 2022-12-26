import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  StyleSheet,
  SectionList,
  View,
  RefreshControl,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Tab, ScrollableTab} from 'native-base';
import {Tabs, CardItem} from 'native-base';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';

import {LocalizationContext} from '@context/index';
import theme from '@styles/theme.style';
import Colors from '@styles/color';
import {VN_FORMAT_DATETIME, VN_FORMAT_DATE} from '@configs/Configs';
import {
  IconBookcar,
  IconOverTime,
  IconShiper,
  IconBorder,
  IconPlaned,
  IconLeave,
  IconChild,
} from '@assets/svg/icons';
import SvgDashLine from '@assets/svg/SvgDashLine';
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
  States,
  typeIcon,
  nameIcon,
  viewScreenNav,
  typeScreen,
  refreshing = false,
  setRefreshing,
}) => {
  const {t} = useContext(LocalizationContext);
  const accessToken = useSelector(state => state.auth.accessToken);
  const navigation = useNavigation();
  const [mapState, setMapState] = useState({});
  useEffect(() => {
    let dictState = {};
    States.forEach(state => {
      dictState[state.key] = state.name;
    });
    setMapState(dictState);
  }, [States]);

  const onPress = item => {
    navigation.navigate('NoFooter', {
      screen: viewScreenNav,
      params: {
        id: item.value.id,
        accessToken: accessToken,
      },
    });
  };

  const _renderItem = ({item, index}) => {
    switch (typeScreen) {
      case 'Overtime':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconOverTime
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>
                    {mapState[item.value.state || item.state.key] || ''}
                  </Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.value.name || ''}
                </Text>
                <Text style={styles.text}>{item.value_portal.date}</Text>
                {Boolean(item.value.reason_cancel) && (
                  <Text style={styles.text}>
                    Lý do: {item.value.reason_cancel || ''}
                  </Text>
                )}
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
      case 'ExpressDelivery':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconShiper
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>{item.value.state.name}</Text>
                </View>
                <Text style={styles.title}>{item.value.name}</Text>
                <Text style={styles.text}>
                  {t('register_date')}:{' '}
                  {moment(item.value.date_register_express).format(
                    VN_FORMAT_DATE,
                  )}
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
      case 'BookCar':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconBookcar
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>{item.value.state.name}</Text>
                </View>
                <Text style={styles.title}>{item.value.name}</Text>
                <Text style={styles.text}>
                  Thời gian đi:{' '}
                  {moment(item.value.date_departure).format(VN_FORMAT_DATETIME)}
                </Text>
                <Text style={styles.text}>
                  Thời gian về:{' '}
                  {moment(item.value.date_back).format(VN_FORMAT_DATETIME)}
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
      case 'Stationery':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconBorder
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>{item.value.state.value}</Text>
                </View>
                <Text style={styles.title}>{item.value.name}</Text>
                <Text style={styles.text}>
                  {t('register_date')}:{' '}
                  {moment(item.value.date_register_express).format(
                    VN_FORMAT_DATE,
                  )}
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
      case 'Leave':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconLeave
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>
                    {mapState[item.value.state] || ''}
                  </Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.value.name || ''}
                </Text>
                {Boolean(item.value.reason_cancel) && (
                  <Text style={styles.text}>
                    Lý do: {item.value.reason_cancel || ''}
                  </Text>
                )}
                <Text style={styles.text}>
                  {t('from_date')}:{' '}
                  {moment(item.value.from_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_from).format(VN_FORMAT_DATE) ||
                    ''}
                </Text>
                <Text style={styles.text}>
                  {t('to_date')}:{' '}
                  {moment(item.value.to_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_to).format(VN_FORMAT_DATE) ||
                    ''}
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
      case 'Child':
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconChild
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>
                    {mapState[item.value.state] || ''}
                  </Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.value.name || ''}
                </Text>
                {Boolean(item.value.reason_cancel) && (
                  <Text style={styles.text}>
                    Lý do: {item.value.reason_cancel || ''}
                  </Text>
                )}
                <Text style={styles.text}>
                  {t('from_date')}:{' '}
                  {moment(item.value.from_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_from).format(VN_FORMAT_DATE) ||
                    ''}
                </Text>
                <Text style={styles.text}>
                  {t('to_date')}:{' '}
                  {moment(item.value.to_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_to).format(VN_FORMAT_DATE) ||
                    ''}
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
      default:
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.touchOpacity}>
              <View style={styles.viewIcon}>
                <View style={styles.viewBoder}>
                  <IconPlaned
                    color={
                      item.value.state.key === 'deny'
                        ? Colors.MONZA
                        : Colors.MANTIS
                    }
                    height={normalize(32, 'height')}
                    width={normalize(32, 'height')}
                  />
                </View>
              </View>
              <View style={styles.viewText}>
                <View
                  style={[
                    styles.viewTT,
                    {
                      backgroundColor:
                        item.value.state.key === 'deny'
                          ? Colors.MONZA
                          : Colors.MANTIS,
                    },
                  ]}>
                  <Text style={styles.textTT}>
                    {mapState[item.value.state] || ''}
                  </Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.value.name || ''}
                </Text>
                {Boolean(item.value.reason_cancel) && (
                  <Text style={styles.text}>
                    Lý do: {item.value.reason_cancel || ''}
                  </Text>
                )}
                <Text style={styles.text}>
                  {t('from_date')}:{' '}
                  {moment(item.value.from_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_from).format(VN_FORMAT_DATE) ||
                    ''}
                </Text>
                <Text style={styles.text}>
                  {t('to_date')}:{' '}
                  {moment(item.value.to_date).format(VN_FORMAT_DATE) ||
                    moment(item.value.date_to).format(VN_FORMAT_DATE) ||
                    ''}
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
    }
  };

  const _renderHeader = ({section}) => {
    return (
      <CardItem style={styles.headerContainer}>
        <Text style={styles.headerText}>{section.month}</Text>
      </CardItem>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
  };

  return (
    <SectionList
      indicatorStyle="white"
      sections={Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
      stickySectionHeadersEnabled={true}
      renderSectionHeader={_renderHeader}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const FormBody = ({
  States,
  Data,
  typeIcon,
  nameIcon,
  setState,
  typeScreen,
  viewScreenNav,
  refreshing = false,
  setRefreshing,
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
              States={States}
              typeIcon={typeIcon}
              nameIcon={nameIcon}
              typeScreen={typeScreen}
              refreshing={refreshing}
              viewScreenNav={viewScreenNav}
              setRefreshing={setRefreshing}
            />
          </Tab>
        );
      })}
    </Tabs>
  );
};
FormBody.propTypes = {
  States: PropTypes.arrayOf(PropTypes.object).isRequired,
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeIcon: PropTypes.string.isRequired,
  nameIcon: PropTypes.string.isRequired,
  typeScreen: PropTypes.string.isRequired,
  viewScreenNav: PropTypes.string.isRequired,
};

export default FormBody;
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
  },
  cardItem: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginLeft: 10,
  },
  headerContainer: {
    backgroundColor: '#E7F3FF',
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
  viewIcon: {
    flex: Platform.OS === 'android' ? 1 : 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoder: {
    height: normalize(Platform.OS === 'android' ? 80 : 70, 'height'),
    width: normalize(Platform.OS === 'android' ? 80 : 70, 'height'),
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
});
