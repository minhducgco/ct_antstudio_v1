/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : CheckBoxItem.js
 *  Description : item checkbox form
 *******************************************/
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Label, Input, Icon} from 'native-base';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';

function CheckBoxItem({title, value, setValue, disabled = false}) {
  const {t} = useContext(LocalizationContext);

  return (
    <Item onPress={() => setValue(!value)} disabled={disabled}>
      <Label style={styles.title}>{t(title)}:</Label>
      <Input defaultValue="" disabled={true} />
      {(value && (
        <Icon name="ios-checkbox" type="Ionicons" style={styles.checkbox} />
      )) || (
        <Icon
          name="checkbox-blank-outline"
          type="MaterialCommunityIcons"
          style={styles.checkbox}
        />
      )}
    </Item>
  );
}

CheckBoxItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CheckBoxItem;

const styles = StyleSheet.create({
  checkbox: {
    color: theme.MAIN_COLOR,
  },
  title: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
    color: '#000',
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
  },
});
