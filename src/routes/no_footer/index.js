import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
/*-----------------------------  Home Screen  -------------------------------------------- */
import HomeScreen from '@pages/Home/HomeScreen/index';
/*-----------------------------   Settings    -------------------------------------------- */
import Settings from '@pages/Home/Settings/index';
import ChangePassword from '@pages/Home/Settings/ChangPassword';
/*-----------------------------      Sale     -------------------------------------------- */
import OrderListScreen from '@pages/Home/SaleOrder/index';

function NoFooterStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePassword} />
      <Stack.Screen name="OrderList" component={OrderListScreen} />
    </Stack.Navigator>
  );
}

export default function HomeContainer() {
  return <NoFooterStack />;
}
