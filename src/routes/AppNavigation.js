import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//-----------------------NoFooter------------------------//
import NoFooter from '@routes/NoFooter';
//----------------------BottomTabs-----------------------//
import BottomTabs from '@routes/BottomTabs';
//--------------------Authentication---------------------//
import OTPScreen from '@screens/Authentication/OTPScreen';
import LoginScreen from '@screens/Authentication/LoginScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen';
import SpanishScreen from '@screens/Authentication/SpanishScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="SpanishScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="OTPScreen" component={OTPScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="SpanishScreen" component={SpanishScreen} />
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="AuthStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="NoFooter" component={NoFooter} />
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
  </Stack.Navigator>
);

export const AppNavigation = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <RootNavigator />
    </NavigationContainer>
  );
};
