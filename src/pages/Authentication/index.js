import React, {useEffect} from 'react';
import {
  View,
  Image,
  Animated,
  Platform,
  Keyboard,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import normalize from 'react-native-normalize';

import themeStyle from '@styles/theme.style';
import Login from '@components/Authentication/Login';
import {authenticationStyle} from '@styles/authentication.style';

let imageHeight = new Animated.Value(122);
let imageMarginTop = new Animated.Value(60);
let imageMarginBottom = new Animated.Value(60);

const showKeyBoard = () => {
  Animated.timing(imageHeight, {
    toValue: 50,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
  Animated.timing(imageMarginTop, {
    toValue: 20,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
  Animated.timing(imageMarginBottom, {
    toValue: 30,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
};

const hideKeyBoard = () => {
  Animated.timing(imageHeight, {
    toValue: 122,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
  Animated.timing(imageMarginTop, {
    toValue: 60,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
  Animated.timing(imageMarginBottom, {
    toValue: 60,
    easing: Animated.easing,
    useNativeDriver: false,
  }).start();
};

const AuthenticationScreen = ({navigation}) => {
  const url = require('@assets/images/logo_ptf.png');

  useEffect(() => {
    let show;
    let hide;
    Platform.OS === 'ios'
      ? ((show = Keyboard.addListener('keyboardWillShow', showKeyBoard)),
        (hide = Keyboard.addListener('keyboardWillHide', hideKeyBoard)))
      : ((show = Keyboard.addListener('keyboardDidShow', showKeyBoard)),
        (hide = Keyboard.addListener('keyboardDidHide', hideKeyBoard)));
    return () => {
      show.remove();
      hide.remove();
    };
  });

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.contain}>
        <StatusBar backgroundColor={themeStyle.COLOR_WHITE} />
        <View style={styles.loginContain}>
          <Image source={url} style={styles.logo} resizeMode="contain" />
          <Login />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
  ...authenticationStyle,
  loginContain: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: themeStyle.COLOR_WHITE,
    marginBottom: normalize(30),
  },
});
export default AuthenticationScreen;
