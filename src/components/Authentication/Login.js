import React, {useRef, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Keyboard, TouchableOpacity} from 'react-native';

import {showMessage} from '@utils/';
import {googleConfig} from '@configs/Configs';
import Input from '@components/Authentication/Input';
import {setIsLoading} from '@redux/reducer/configReducer';
import AuthButton from '@components/Authentication/Button';
import {LocalizationContext} from '@context/LocalizationContext';
import {IconGoogle, IconFacebook, IconApple} from '@assets/svg/index';
import authManager from '@repository/Authentication/firebaseAuthManager';
import {authenticationStyle as styles} from '@styles/authentication.style';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t} = useContext(LocalizationContext);

  const onLogin = () => {
    Keyboard.dismiss();
    if (usernameRef.current?.value && passwordRef.current?.value) {
      dispatch(setIsLoading(true));
      authManager
        .loginWithEmailAndPassword(
          usernameRef.current?.value && usernameRef.current?.value.trim(),
          passwordRef.current?.value && passwordRef.current?.value.trim(),
        )
        .then(response => {
          if (response?.user) {
            showMessage.success('Đăng nhập thành công');
            dispatch(setIsLoading(false));
            usernameRef.current.clearValue();
            passwordRef.current.clearValue();
            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabs', params: {}}],
            });
          } else {
            showMessage.fail(response.error);
            dispatch(setIsLoading(false));
          }
        })
        .catch(error => console.log(error));
    } else {
      showMessage.fail(t('email_or_password_is_invalid'));
    }
  };

  const onLoginGoogle = async () => {
    dispatch(setIsLoading(true));
    authManager
      .loginOrSignUpWithGoogle(googleConfig)
      .then(response => {
        if (response?.user) {
          console.log(JSON.stringify(response.user, null, 2));
          dispatch(setIsLoading(false));
          navigation.replace('BottomTabs', {
            screen: 'HomeScreen',
          });
        } else {
          dispatch(setIsLoading(false));
          console.log(response.error);
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  const onLoginApple = () => {
    showMessage.help('Chức năng này đang phát triển, vui lòng thử lại sau!');
  };

  const onLoginFacebook = async () => {
    // dispatch(setIsLoading(true));
    authManager.loginOrSignUpWithFacebook(googleConfig).then(response => {
      console.log(JSON.stringify(response, null, 2));
      // if (response?.user) {
      //   console.log(JSON.stringify(response.user, null, 2));
      //   navigation.replace('BottomTabs', {
      //     screen: 'HomeScreen',
      //   });
      //   dispatch(setIsLoading(false));
      //   // dispatch(setUserData({user}));
      //   Keyboard.dismiss();
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: 'MainStack', params: {}}],
      //   });
      // } else {
      //   dispatch(setIsLoading(false));
      //   console.log(response.error);
      // }
    });
  };

  const navigateForget = () => {
    navigation.navigate('OTPScreen');
  };

  return (
    <View style={styles.formLogin}>
      <Text style={styles.txtLogo}>Chiti</Text>
      <Input
        ref={usernameRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        iconName="email-outline"
        label={t('email')}
        placeholder={t('email')}
        val
      />
      <Input
        ref={passwordRef}
        returnKeyType="done"
        iconName="lock-outline"
        label={t('password')}
        placeholder={t('password')}
        onSubmitEditing={onLogin}
        password
      />
      <AuthButton title={t('sign_in')} onPress={onLogin} />
      <TouchableOpacity onPress={navigateForget}>
        <Text style={styles.txtForgetPass}>{t('forgot_password')}</Text>
      </TouchableOpacity>
      <Text style={styles.txtLoginWith}>{t('login_with')}</Text>
      <View style={styles.loginWith}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonLoginWith}
          onPress={onLoginGoogle}>
          <IconGoogle />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonLoginWith}
          onPress={onLoginFacebook}>
          <IconFacebook />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonLoginWith}
          onPress={onLoginApple}>
          <IconApple />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
