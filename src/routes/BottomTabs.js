/* eslint-disable no-unused-vars */
import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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

import HomeScreen from '@pages/Application/HomeScreen/index';
import QrScanScreen from '@pages/Application/QrScanScreen/index';
import ProfileScreen from '@pages/Application/ProfileScreen/index';
import CalculatorScreen from '@pages/Application/CalculatorScreen/index';
import NotificationScreen from '@pages/Application/NotificationScreen/index';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
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
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="CalculatorScreen"
          component={CalculatorScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <IconCalculator fill={focused ? color.MAIN : color.GRAYCHATEAU} />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="QrScanScreen"
          component={QrScanScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <IconQrcode fill={focused ? color.MAIN : color.GRAYCHATEAU} />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <IconNotification
                fill={focused ? color.MAIN : color.GRAYCHATEAU}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <IconPerson fill={focused ? color.MAIN : color.GRAYCHATEAU} />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={
          (styles.animatedView, {transform: [{translateX: tabOffsetValue}]})
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  ...bottomTabsStyle,
});

export default function App() {
  return <BottomTabs />;
}
