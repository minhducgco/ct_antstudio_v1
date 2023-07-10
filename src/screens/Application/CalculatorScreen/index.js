import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';

import {LocalizationContext} from '@context/LocalizationContext';
import HeaderWithTitle from '@components/Header/HeaderWithTitle';
import {calculatorScreenStyle as styles} from '@styles/calculatorScreen.style';

const CalculatorScreen = ({navigation}) => {
  const {t} = useContext(LocalizationContext);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithTitle title={t('settings')} />
    </SafeAreaView>
  );
};

export default CalculatorScreen;
