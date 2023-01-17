/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useContext} from 'react';
// import {getDeviceId, getDevice} from 'react-native-device-info';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {
//   // useSelector,
//   // useDispatch,
// } from 'react-redux';
// import {LocaleConfig} from 'react-native-calendars';
// import Toast from 'react-native-tiny-toast';

// import BottomTabs from '@routes/index';
// import SplashScreen from '@pages/index';
// import Database from '@configs/Database';
// import NoFooter from '@routes/no_footer/index';
import Authentication from '@pages/Authentication/index';
// import {logOut, signIn} from '@repository/Authentication/index';
import {
  // LocalizationContext,
  AuthenticationContext,
} from './index';
// import {onAddDeviceId} from '@redux/actions/configAction';
// import {
//   //   onRevoke,
//   onUserLogin,
//   onUserLogout,
//   checkScreen,
// } from '@redux/actions/authAction';
// import {showMessage} from '@utils/';

const Stack = createStackNavigator();

export const AuthenticationProvider = () => {
  // const {t, locale} = useContext(LocalizationContext);
  // const dispatch = useDispatch();
  // const [success, setSuccess] = useState(t('successfully'));
  //   const accessToken = useSelector(state => state.auth.accessToken);
  //   const isLoading = useSelector(state => state.auth.isLoading);
  // const _dispatchAddType = (type) => {
  //     dispatch(onAddTypeApp(type));
  // };

  return (
    <AuthenticationContext.Provider
    // value={authContext}
    >
      <NavigationContainer>
        {/* <StatusBar backgroundColor={'#fff'} /> */}
        <Stack.Navigator headerMode="none">
          {/* {accessToken ? (
            <Fragment>
              <Stack.Screen name="Tabs" component={BottomTabs} />
              <Stack.Screen name="NoFooter" component={NoFooter} />
            </Fragment>
          ) : ( */}
          <Stack.Screen name="Auth" component={Authentication} />
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthenticationContext.Provider>
  );
};
