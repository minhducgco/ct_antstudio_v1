import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//-----------------------NoFooter------------------------//
import NoFooter from '@routes/NoFooter';
//----------------------BottomTabs-----------------------//
import BottomTabs from '@routes/BottomTabs';
//--------------------Authentication---------------------//
import LoginScreen from '@pages/Authentication/LoginScreen';
import SignUpScreen from '@pages/Authentication/SignUpScreen';
import SpanishScreen from '@pages/Authentication/SpanishScreen';
import OnboardingScreen from '@pages/Authentication/OnboardingScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="SpanishScreen"
    screenOptions={{headerShown: false}}>
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
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
