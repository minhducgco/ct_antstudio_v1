import * as React from 'react';
import i18n from 'i18n-js';
import {useDispatch, useSelector} from 'react-redux';

import en from '@i18n/en.json';
import vi from '@i18n/vi.json';

import Database from '@configs/Database';
import {AppNavigation} from '@routes/AppNavigation';
import {onAddFirebaseToken} from '@redux/actions/configAction';
import {getFirebaseToken} from '@services/Notification/NotificationService';
import LoadingIconAnimated from '@components/MiniComponent/LoadingIconAnimated';

i18n.fallbacks = true;
i18n.translations = {vi, en};

export const LocalizationContext = React.createContext({});

export const LocalizationProvider = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(st => st.conf);
  const [locale, setLocale] = React.useState('vi');

  React.useEffect(() => {
    _checkFirebaseTokenFromAsyncStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _dispatchAddFirebaseToken = token => {
    dispatch(onAddFirebaseToken(token));
  };

  const _checkFirebaseTokenFromAsyncStore = async () => {
    var token = await Database.getFirebaseToken();
    if (token === undefined || token === '') {
      await getFirebaseToken().then(res => {
        token = res;
      });
      await Database.setFirebaseToken({value: token});
    }
    _dispatchAddFirebaseToken(token);
  };

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <AppNavigation />
      <LoadingIconAnimated isLoading={isLoading} />
    </LocalizationContext.Provider>
  );
};
