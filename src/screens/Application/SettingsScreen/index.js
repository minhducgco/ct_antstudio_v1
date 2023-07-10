import React from 'react';
import {View, StyleSheet} from 'react-native';

import {settingsScreenStyle} from '@styles/settingsScreen.style';

const SettingsScreen = ({navigation}) => {
  return <View style={styles.container} />;
};

export default SettingsScreen;

const styles = StyleSheet.create({
  ...settingsScreenStyle,
});
