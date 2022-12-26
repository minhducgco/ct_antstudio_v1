/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Settings} from 'react-native-fbsdk-next';
import {Provider as ProviderPaper} from 'react-native-paper';
import {ToastAndroid, BackHandler, StatusBar} from 'react-native';

import store from './src/redux/store';
import {LocalizationProvider} from './src/context/Localization';

const App = () => {
  let backAction = null;
  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
    BackHandler.addEventListener('hardwareBackPress', onBackHandle);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackHandle);
    };
  }, [onBackHandle]);

  const onBackHandle = () => {
    if (backAction + 2000 > new Date().getTime()) {
      BackHandler.exitApp();
    }
    backAction = new Date().getTime();
    ToastAndroid.show('Bấm thêm lần nữa để thoát!', ToastAndroid.SHORT);
    return true;
  };
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

export default App;
