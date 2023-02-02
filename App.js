import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import codePush from 'react-native-code-push';
import {Settings} from 'react-native-fbsdk-next';
import {Provider as ProviderPaper} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid, BackHandler, StatusBar, Platform} from 'react-native';

import store from '@redux/store';
import {LocalizationProvider} from '@context/Localization';
import {requestUserPermission} from '@services/Notification/NotificationService';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

const App = () => {
  let backAction = null;
  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
    BackHandler.addEventListener('hardwareBackPress', onBackHandle);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBackHandle = () => {
    if (backAction + 2000 > new Date().getTime()) {
      BackHandler.exitApp();
    }
    backAction = new Date().getTime();
    ToastAndroid.show('Bấm thêm lần nữa để thoát!', ToastAndroid.SHORT);
    return true;
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      AsyncStorage.getItem('version_autheStatus1')
        .then(res => {
          if (Number(res) !== 1) {
            requestUserPermission();
          }
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <ProviderPaper>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Provider Provider store={store}>
        <LocalizationProvider />
      </Provider>
    </ProviderPaper>
  );
};

export default codePush(codePushOptions)(App);
