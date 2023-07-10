import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
/*-----------------------------   Settings    -------------------------------------------- */
import SettingsScreen from '@screens/Application/SettingsScreen/index';

function NoFooter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function NoFooterStack() {
  return <NoFooter />;
}
