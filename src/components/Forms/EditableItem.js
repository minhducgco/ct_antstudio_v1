/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : EditableItem.js
 *  Description : item có thể sửa trong form .
 *******************************************/
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Item, Textarea} from 'native-base';
import {Label, Input, ListItem, Left, Right, Body} from 'native-base';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';

function EditableItem({
  title,
  setValue,
  defaultValue,
  disabled = false,
  required = false,
  multiline = false,
  maxLength = 10000,
  keyboardType = 'email-address',
  placeholder,
  rowSpan = false,
}) {
  const {t} = useContext(LocalizationContext);

  if (multiline) {
    return (
      <ListItem noBorder>
        <Body>
          <Label style={styles.title}>
            {t(title)} <Text style={{color: 'red'}}>*</Text>:
          </Label>
          <Textarea
            bordered
            rowSpan={!rowSpan ? 5 : 2.5}
            style={styles.value}
            disabled={disabled}
            value={defaultValue}
            defaultValue={defaultValue}
            onChangeText={text => {
              setValue(text);
            }}
            placeholder={placeholder}
          />
        </Body>
      </ListItem>
    );
  }

  if (required) {
    return (
      <Item>
        <Label style={styles.title}>
          {t(title)} <Text style={{color: 'red'}}>*</Text>:
        </Label>
        <Input
          keyboardType={keyboardType}
          disabled={disabled}
          style={styles.value}
          value={defaultValue}
          defaultValue={defaultValue}
          onChangeText={text => {
            setValue(text);
          }}
          numberOfLines={10}
          maxLength={maxLength}
        />
      </Item>
    );
  }
  return (
    <Item>
      <Label style={styles.title}>{t(title)}:</Label>
      <Input
        keyboardType={keyboardType}
        disabled={disabled}
        style={styles.value}
        value={defaultValue}
        defaultValue={defaultValue}
        onChangeText={text => {
          setValue(text);
        }}
        numberOfLines={10}
        maxLength={maxLength}
      />
    </Item>
  );
}

EditableItem.propTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  keyboardType: PropTypes.string,
  disabled: PropTypes.bool,
};

export default EditableItem;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
    color: '#000',
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    borderRadius: 8,
    color: '#000',
    fontSize: 14,
    flex: 1,
  },
});
