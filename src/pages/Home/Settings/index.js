import React, {useContext, useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {Button, Provider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {Left, Right, Body, ListItem} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, StyleSheet, FlatList, Linking, View} from 'react-native';

import {showMessage} from '@utils/';
import theme from '@styles/theme.style';
import {AuthenticationContext} from '@context/index';
import {checkScreen} from '@redux/actions/authAction';
import HeaderStatusBar from '@components/headers/HeaderBackStatusBar';

const MENU_SETTING = [
  {
    key: 'change_password',
    icon: 'language',
    type: 'Octicons',
    name: 'Đổi mật khẩu',
  },
  {
    key: 'version',
    icon: 'yelp',
    type: 'Octicons',
    name: 'Phiên bản',
  },
];

const Settings = ({navigation}) => {
  const {signOut} = useContext(AuthenticationContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const accessToken = useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();

  const _onPress = item => {
    switch (item.key) {
      case 'change_language':
        navigation.navigate('NoFooter', {
          screen: 'ChangeLangusgeScreen',
          params: {},
        });
        break;
      case 'history':
        navigation.navigate('NoFooter', {
          screen: 'HistoryScreen',
          params: {},
        });
        break;
      case 'version':
        if (isUpdate === true) {
          openStore();
        } else {
          showMessage('Chưa có phiên bản cập nhật mới!');
        }
        break;
      case 'bookmark':
        navigation.navigate('NoFooter', {
          screen: 'BookmarkScreen',
          params: {},
        });
        break;
      case 'change_password':
        // navigation.navigate('NoFooter', {
        //   screen: 'ChangePasswordScreen',
        //   params: {},
        // });
        break;
      default:
        break;
    }
  };

  const _onSignOut = () => {
    signOut(accessToken);
  };
  const _onLogin = () => {
    dispatch(checkScreen('login'));
  };
  const openStore = () => {
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.facebook.katana',
    );
  };
  useEffect(() => {
    AsyncStorage.getItem('@version_Key')
      .then(data => {
        if (data) {
          if (DeviceInfo.getVersion() === data) {
            AsyncStorage.getItem('@build_Number').then(buildNumb => {
              if (DeviceInfo.getBuildNumber() === buildNumb) {
                setIsUpdate(false);
              } else {
                setIsUpdate(true);
              }
            });
          } else {
            setIsUpdate(true);
          }
        }
      })
      .catch(err => console.log(err));
  }, []);

  const _renderMenuSettings = ({item, index}) => {
    return (
      <ListItem icon key={item.key} button onPress={() => _onPress(item)}>
        <Left>
          <FontAwesome name={item.icon} style={styles.iconLeft} />
        </Left>
        <Body>
          <Text style={styles.text}>{item.name}</Text>
        </Body>
        <Right>
          {(item.key !== 'version' && (
            <FontAwesome name="angle-right" style={styles.iconLeft} />
          )) || (
            <>
              <Text
                style={
                  styles.text
                }>{`${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}</Text>
              {isUpdate === true && (
                <FontAwesome
                  name="long-arrow-right"
                  style={styles.iconVersion}
                />
              )}
            </>
          )}
        </Right>
      </ListItem>
    );
  };

  return (
    <Provider>
      <View>
        <HeaderStatusBar title={'Cài đặt'} />
        <FlatList
          data={MENU_SETTING}
          renderItem={_renderMenuSettings}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Button
        onPress={accessToken ? _onSignOut : _onLogin}
        color={theme.MAIN_COLOR}
        mode="outlined"
        style={styles.button}
        uppercase={false}
        labelStyle={styles.signOutTxt}>
        Đăng xuất
      </Button>
    </Provider>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    margin: 16,
    color: theme.MAIN_COLOR,
    borderColor: theme.MAIN_COLOR,
  },
  iconLeft: {
    fontSize: 22,
    color: '#626A72',
  },
  text: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
  },
  signOutTxt: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.MAIN_COLOR,
    fontSize: 14,
  },
  iconVersion: {fontSize: 30, color: 'red'},
});
