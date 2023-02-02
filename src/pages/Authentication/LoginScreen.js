import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  Animated,
  Platform,
  Keyboard,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import themeStyle from '@styles/theme.style';
import Login from '@components/Authentication/Login';
import {LocalizationContext} from '@context/Localization';
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

const LoginScreen = ({navigation}) => {
  const {t} = useContext(LocalizationContext);

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

  const navigateRegister = () => {};

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.containLogin}>
        <StatusBar backgroundColor={themeStyle.COLOR_WHITE} />
        <Login />
        <View style={styles.registerArea}>
          <Text style={styles.txtNewTo}>{t('new_to_Chiti')}</Text>
          <TouchableOpacity onPress={() => navigateRegister}>
            <Text style={styles.txtRegister}>{t('register')}</Text>
          </TouchableOpacity>
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
});

export default LoginScreen;
