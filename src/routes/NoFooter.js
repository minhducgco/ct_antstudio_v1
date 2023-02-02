import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
/*-----------------------------   Settings    -------------------------------------------- */
import Settings from '@pages/Application/SettingsScreen/index';

function NoFooter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
}

export default function NoFooterStack() {
  return <NoFooter />;
}
