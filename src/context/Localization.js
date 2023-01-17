import React, {useState, useMemo} from 'react';
import i18n from 'i18n-js';
// import * as RNLocalize from 'react-native-localize';

import en from '@i18n/en.json';
import vi from '@i18n/vi.json';

import {LocalizationContext} from './index';
// import {AuthenticationProvider} from './Authentication';

i18n.fallbacks = true;
i18n.translations = {vi, en};

export const LocalizationProvider = () => {
  const [locale, setLocale] = useState('vi');

  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <></>
    </LocalizationContext.Provider>
  );
};
