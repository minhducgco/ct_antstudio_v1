import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  IconHome,
  IconQrcode,
  IconPerson,
  IconCalculator,
  IconNotification,
} from '@assets/svg/index';
import color from '@styles/color';
import {bottomTabsStyle} from '@styles/bottomTabs.style.js';
import HomeScreen from '@screens/Application/HomeScreen/index';
import QrScanScreen from '@screens/Application/QrScanScreen/index';
import ProfileScreen from '@screens/Application/ProfileScreen/index';
import CalculatorScreen from '@screens/Application/CalculatorScreen/index';
import NotificationScreen from '@screens/Application/NotificationScreen/index';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconHome fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="CalculatorScreen"
        component={CalculatorScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconCalculator fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="QrScanScreen"
        component={QrScanScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconQrcode fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconNotification fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconPerson fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  ...bottomTabsStyle,
});

export default function App() {
  return <BottomTabs />;
}
