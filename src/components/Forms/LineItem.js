import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Label} from 'native-base';

import normalize from 'react-native-normalize';
import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';

function LineItem({title, value, inLine}) {
  const {t} = useContext(LocalizationContext);
  if (inLine) {
    return (
      <View style={styles.line}>
        <Label style={styles.titleinLine}>{t(title)}:</Label>
        <Label style={styles.value}> {value}</Label>
      </View>
    );
  }

  return (
    <View style={styles.line}>
      <Label style={styles.title}>{t(title)}:</Label>
      <Label style={styles.value}> {value}</Label>
    </View>
  );
}
export default LineItem;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
    color: '#000',
    width: normalize(100),
    flex: 3,
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    borderRadius: 8,
    color: '#000',
    fontSize: 14,
    flex: 7,
  },
  line: {
    flexDirection: 'row',
    marginLeft: normalize(18),
    marginVertical: normalize(15),
    alignItems: 'flex-start',
  },
  titleinLine: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
    color: '#000',
    marginRight: normalize(10),
  },
});
