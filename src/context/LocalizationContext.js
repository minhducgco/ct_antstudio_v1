import * as React from 'react';
import i18n from 'i18n-js';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import en from '@i18n/en.json';
import vi from '@i18n/vi.json';

i18n.fallbacks = true;
i18n.translations = {vi, en};

export const LocalizationContext = React.createContext({});

export const LocalizationProvider = ({children}) => {
  const [locale, setLocale] = React.useState('vi');

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  const clientGraphql = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
  });

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <ApolloProvider client={clientGraphql}>{children}</ApolloProvider>
    </LocalizationContext.Provider>
  );
};
