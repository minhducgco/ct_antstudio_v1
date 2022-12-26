import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import normalize from 'react-native-normalize';
import {Container, Content} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {applicationStyles} from '@styles/application.style';
import {IconSetting, IconEmptyData} from '@assets/svg/icons/index';

import Colors from '@styles/color';
import {MAIN_DOMAIN} from '@configs/Configs';

const {height, width} = Dimensions.get('window');
const menuSale = [
  {
    id: 2,
    key: 'sale',
    icon: 'cart-check',
    type: 'SimpleLineIcons',
    navigation: 'OrderList',
    parent: 'NoFooter',
    name: 'Bán hàng',
  },
  {
    id: 3,
    key: 'inventory',
    icon: 'folder-alert-outline',
    type: 'MaterialCommunityIcons',
    navigation: 'Order',
    parent: 'NoFooter',
    name: 'Tồn kho',
  },
  {
    id: 4,
    key: 'product',
    icon: 'cube-outline',
    type: 'MaterialCommunityIcons',
    navigation: 'Partner',
    parent: 'NoFooter',
    name: 'Sản phẩm',
  },
];

const Application = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const imgDefault = require('@assets/images/ava.jpg');
  const [refreshing, setRefreshing] = useState(false);

  const _navigationScreen = item => {
    if (item.key === 'sale') {
      navigation.navigate('NoFooter', {
        screen: 'OrderList',
        params: {},
      });
    }
  };

  const _onGoToSetting = () => {
    navigation.navigate('NoFooter', {
      screen: 'SettingsScreen',
      params: {},
    });
  };

  const _onGoToProfile = () => {};

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const _renderMainMenu = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => _navigationScreen(item.item)}
        disabled={item.key === 'additional_key'}
        style={[styles.itemContainer]}>
        <View
          style={[
            styles.itemButton,
            {
              backgroundColor: Colors.ALABASTER,
            },
          ]}>
          <MaterialCommunityIcons name={item.item.icon} style={styles.icon} />
          <View
            style={[
              {
                height: height / 20,
                width: width / 6,
              },
              styles.viewIconFavorite,
            ]}>
            <Text
              key={item.item.id}
              style={styles.itemText}
              allowFontScaling={false}>
              {item.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <SafeAreaView style={styles.flx_1}>
        <Content
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={styles.content}>
          <View style={styles.viewHeader}>
            <View style={styles.viewSetting}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => _onGoToSetting()}>
                <IconSetting color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
            <View style={styles.thumbnailContainer}>
              <TouchableOpacity
                onPress={() => _onGoToProfile()}
                activeOpacity={0.8}>
                <FastImage
                  source={
                    user?.user_id?.image
                      ? {
                          uri: `${MAIN_DOMAIN}${user.user_id.image}`,
                        }
                      : imgDefault
                  }
                  style={styles.thumbnail}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewWorkEntryManage}>
            <View style={styles.informationTab}>
              <Text style={styles.informationTxt}>
                Xin chào! {user?.employee_id?.name || user?.user_id?.name}
              </Text>
              <Text style={styles.helpTxt}>Bạn có cần giúp đỡ gì không?</Text>
            </View>
          </View>
          <View style={{marginTop: normalize(30, 'height')}}>
            <View style={styles.favoriteContainer}>
              <View style={styles.arrangeContainer}>
                <Text style={styles.favoriteTitle}>Chức năng</Text>
              </View>
            </View>
            <FlatList
              data={menuSale}
              horizontal={true}
              renderItem={_renderMainMenu}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.columnWrapperStyle}
            />
          </View>
          <View style={styles.favoriteContainer}>
            <Text style={styles.favoriteTitle}>Chương trình khuyến mại</Text>
          </View>
          <View style={styles.empty}>
            <IconEmptyData />
          </View>
        </Content>
      </SafeAreaView>
      <View
        style={[
          styles.absolute,
          {
            top: normalize(Platform.OS === 'ios' ? -32 : -35, 'height'),
            width: width,
          },
        ]}>
        <Image
          source={require('@assets/images/backgroundApplication.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </Container>
  );
};

export default Application;

const styles = StyleSheet.create({
  ...applicationStyles,
  itemContainer: {
    width: (width / 10) * 3,
    borderRadius: 20,
  },
  itemButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(Platform.OS === 'android' ? 85 : 75, 'height'),
    marginHorizontal: normalize(Platform.OS === 'android' ? 10 : 5, 'width'),
    marginVertical: normalize(Platform.OS === 'android' ? 10 : 5, 'height'),
  },
  thumbnailContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flx_1: {flex: 1},
  img: {width: '100%', height: '100%'},
  img_logo_ctkm: {
    alignSelf: 'center',
    width: '94%',
    height: normalize(350),
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  icon: {
    color: Colors.MONZA,
    fontSize: 30,
  },
});
