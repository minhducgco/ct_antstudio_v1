import React, {useState, useContext} from 'react';
import {Button} from 'react-native-paper';
import {Text, StyleSheet, View, Keyboard} from 'react-native';

import Input from './Input';
import theme from '@styles/theme.style';
import {AuthenticationContext} from '@context/index';
import {authenticationStyle} from '@styles/authentication.style';

const Login = ({}) => {
  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [require, setRequire] = useState(false);
  const {signIn} = useContext(AuthenticationContext);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (inputs.userName && inputs.password) {
      setRequire(false);
      let body = {login: inputs.userName, password: inputs.password};
      signIn(body);
    } else {
      setRequire(true);
    }
  };

  return (
    <View style={styles.form}>
      <Input
        onChangeText={text => handleOnchange(text, 'userName')}
        onFocus={() => handleError(null, 'userNamer')}
        iconName="account-outline"
        label={'Tên đăng nhập'}
        placeholder={'Tên đăng nhập'}
        error={errors.email}
      />
      <Input
        onChangeText={text => handleOnchange(text, 'password')}
        onFocus={() => handleError(null, 'password')}
        iconName="lock-outline"
        label={'Mật khẩu'}
        placeholder={'Mật khẩu'}
        error={errors.password}
        password
      />
      {require ? (
        <Text style={styles.alertRequireText}>
          {'Các trường bắt buộc không được để trống!'}
        </Text>
      ) : null}
      <Button
        mode="contained"
        color={theme.MAIN_COLOR}
        uppercase={false}
        style={styles.loginButton}
        onPress={validate}>
        <Text style={styles.textButton}>{'Đăng nhập'}</Text>
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  ...authenticationStyle,
  alertRequireText: {
    textAlign: 'center',
    color: theme.MAIN_COLOR,
    fontFamily: theme.FONT_FAMILY,
  },
});
