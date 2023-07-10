import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';

import AuthButton from '@components/Authentication/Button';
import HeaderWithTitle from '@components/Header/HeaderWithTitle';
import {LocalizationContext} from '@context/LocalizationContext';
import TemplateLogin from '@components/Authentication/TemplateLogin';
import {authenticationStyle as styles} from '@styles/authentication.style';

import {useSelector} from 'react-redux';

const SignUpScreen = ({}) => {
  const {t} = useContext(LocalizationContext);
  const isLoading = useSelector(state => state.config.isLoading);

  const onRegis = () => {
    console.log(isLoading);
  };

  return (
    <TemplateLogin>
      <SafeAreaView style={styles.containLogin}>
        <HeaderWithTitle hasLeft={true} title={t('register')} />
        <AuthButton title={t('register')} onPress={onRegis} />
      </SafeAreaView>
    </TemplateLogin>
  );
};

export default SignUpScreen;
