import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import codePush from 'react-native-code-push';
import {Settings} from 'react-native-fbsdk-next';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as ProviderPaper} from 'react-native-paper';
import {ToastAndroid, BackHandler, StatusBar} from 'react-native';

import {store, persistor} from '@redux/store';
import {AppNavigation} from '@routes/AppNavigation';
import {LocalizationProvider} from '@context/LocalizationContext';
import ModalToastMessage from '@components/Modal/ModalToastMessage';
import LoadingWithLottie from '@components/Loading/LoadingWithLottie';

const codePushOptions = {
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
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

  return (
    <ProviderPaper>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider>
            <AppNavigation />
            <ModalToastMessage />
            <LoadingWithLottie />
          </LocalizationProvider>
        </PersistGate>
      </Provider>
    </ProviderPaper>
  );
};

export default codePush(codePushOptions)(App);
