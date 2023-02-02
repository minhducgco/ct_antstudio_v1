import React, {useState, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Keyboard, StyleSheet, TouchableOpacity} from 'react-native';

import Input from './Input';
// import {showMessage} from '@utils/';
import theme from '@styles/theme.style';
import {appConfig} from '@configs/Configs';
import {setLoading} from '@redux/actions/configAction';
import {LocalizationContext} from '@context/Localization';
import {authenticationStyle} from '@styles/authentication.style';
import {IconGoogle, IconFacebook, IconApple} from '@assets/svg/index';
import authManager from '@repository/Authentication/firebaseAuthManager';

const Login = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t} = useContext(LocalizationContext);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [require, setRequire] = useState(false);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const onLogin = async () => {
    Keyboard.dismiss();
    if (inputs.email && inputs.password) {
      setRequire(false);
      dispatch(setLoading(true));
      authManager
        .loginWithEmailAndPassword(
          inputs.email && inputs.email.trim(),
          inputs.password && inputs.password.trim(),
        )
        .then(response => {
          if (response?.user) {
            dispatch(setLoading(false));
            navigation.navigate('BottomTabs', {
              screen: 'HomeScreen',
            });
          } else {
            console.log(response.error);
            dispatch(setLoading(false));
          }
        })
        .catch(error => console.log(error));
    } else {
      setRequire(true);
    }
  };

  const onLoginGoogle = () => {
    console.log(JSON.stringify(appConfig, null, 2));
    // authManager
    //   .loginOrSignUpWithGoogle(appConfig)
    //   .then(response => {
    //     if (response?.user) {
    //       console.log(JSON.stringify(response.user, null, 2));
    //       navigation.navigate('BottomTabs', {
    //         screen: 'HomeScreen',
    //       });
    //     } else {
    //       console.log(response.error);
    //     }
    //   })
    //   .catch(error => console.log(error));
  };

  const onLoginApple = () => {
    // showMessage(
    //   'The password is invalid or the user does not have a password.',
    // );
  };

  const onLoginFacebook = () => {
    // authManager
    //   .loginOrSignUpWithFacebook(config)
    //   .then(response => {
    //     if (response?.user) {
    //       console.log(JSON.stringify(response.user, null, 2));
    //       navigation.navigate('BottomTabs', {
    //         screen: 'HomeScreen',
    //       });
    //     } else {
    //       console.log(response.error);
    //     }
    //   })
    //   .catch(error => console.log(error));
  };

  return (
    <View style={styles.formLogin}>
      <Text style={styles.txtLogo}>Chiti</Text>
      <Input
        onChangeText={text => handleOnchange(text, 'email')}
        onFocus={() => handleError(null, 'email')}
        iconName="email-outline"
        label={t('email')}
        placeholder={t('email')}
        error={errors.email}
      />
      <Input
        onChangeText={text => handleOnchange(text, 'password')}
        onFocus={() => handleError(null, 'password')}
        iconName="lock-outline"
        label={t('password')}
        placeholder={t('password')}
        error={errors.password}
        password
      />
      {require ? (
        <Text style={styles.alertRequireText}>
          {t('email_or_password_is_invalid')}
        </Text>
      ) : null}
      <Button
        mode="contained"
        color={theme.MAIN_COLOR}
        uppercase={false}
        style={styles.loginButton}
        onPress={onLogin}>
        <Text style={styles.textButton}>{t('sign_in')}</Text>
      </Button>
      <TouchableOpacity>
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

const styles = StyleSheet.create({
  ...authenticationStyle,
});
