/******************************************
 *  Author     : HoiHD
 *  Created On : Sat Jul 04 2020
 *  File       : HeaderApplication..js
 *  Description: Header của màn hình Ứng dụng.
 *******************************************/
import React, {memo} from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IconSetting} from '@assets/svg/icons/index';

import theme from '@styles/theme.style';
import Colors from '@styles/color';
import normalize from 'react-native-normalize';

const imgDefault = require('../../assets/images/default.png');

const HeaderApplication = () => {
  const navigation = useNavigation();

  const user = useSelector(state => state.auth.user);
  const isLogin = useSelector(state => state.auth.isLogin);

  const _onGoToProfile = () => {
    navigation.navigate('NoFooter', {
      screen: 'ProfileUserScreen',
      params: {
        employeeId: user.employee_id.id,
      },
    });
  };

  const _onGoToSetting = () => {
    navigation.navigate('NoFooter', {
      screen: 'SettingsScreen',
      params: {},
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <TouchableOpacity
        style={styles.thumbnailContainer}
        onPress={() => _onGoToProfile()}
        activeOpacity={0.8}>
        {/* <FastImage
                    source={
                        !isLogin
                            ? imgDefault
                            : user.employee_id !== undefined
                            ? { uri: user.employee_id.img_url }
                            : imgDefault
                    }
                    style={styles.thumbnail}
                    resizeMode={FastImage.resizeMode.cover}
                />
                {(Boolean(Object.keys(user).length) && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {user.employee_id !== undefined
                                ? user.employee_id.name
                                : user.user_id.name}
                        </Text>
                    </View>
                )) || (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {'Người dùng hệ thống'}
                        </Text>
                    </View>
                )} */}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button]}
        onPress={() => _onGoToSetting()}>
        <IconSetting color={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  container: {
    backgroundColor: 'transparent',
    height: 75,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginRight: normalize(16, 'width'),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  thumbnailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontFamily: theme.FONT_BOLD,
    fontSize: 17,
  },
  iconSetting: {fontSize: 26, color: Colors.WHITE},
});

export default memo(HeaderApplication);
