import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import codePush from 'react-native-code-push';
import {Settings} from 'react-native-fbsdk-next';
import {Provider as ProviderPaper} from 'react-native-paper';

import store from './src/redux/store';
import {LocalizationProvider} from './src/context/Localization';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

const App = () => {
  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
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
