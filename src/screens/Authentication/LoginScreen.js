import React, {useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import themeStyle from '@styles/theme.style';
import Login from '@components/Authentication/Login';
import {LocalizationContext} from '@context/LocalizationContext';
import TemplateLogin from '@components/Authentication/TemplateLogin';
import {authenticationStyle as styles} from '@styles/authentication.style';

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const {t} = useContext(LocalizationContext);

  const navigateRegister = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <TemplateLogin>
      <SafeAreaView style={styles.containLogin}>
        <StatusBar backgroundColor={themeStyle.COLOR_WHITE} />
        <Login />
        <View style={styles.registerArea}>
          <Text style={styles.txtNewTo}>{t('new_to_Chiti')}</Text>
          <TouchableOpacity onPress={navigateRegister}>
            <Text style={styles.txtRegister}>{t('register')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TemplateLogin>
  );
};

export default LoginScreen;
