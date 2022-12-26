/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : ButtonForms.js
 *  Description : Danh sách nút
 *******************************************/
import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';

function ButtonForms({data, onAction, disabled = false}) {
  const onPress = item => {
    onAction(item);
  };

  const _renderItem = ({item, index}) => {
    let color = theme.MAIN_COLOR;
    let icon = '';
    if (item.key === 'confirm_update') {
      color = theme.MAIN_COLOR;
      icon = 'content-save';
    } else if (item.key.search(/add/i) !== -1) {
      icon = 'plus-circle';
      color = theme.MAIN_COLOR;
    } else if (item.key.search(/back/i) !== -1) {
      color = theme.COLOR_BACK;
      icon = 'backspace';
    } else if (item.key.search(/(deny|refuse|close|cancel|reject)/i) !== -1) {
      color = theme.COLOR_GREY;
      icon = 'close-box-multiple';
    } else if (item.key.search(/delete/i) !== -1) {
      color = theme.MAIN_COLOR;
      icon = 'trash-can-outline';
    } else if (item.key.search(/edit|update/i) !== -1) {
      color = theme.COLOR_EDIT;
      icon = 'lead-pencil';
    } else if (item.key.search(/save|confirm/i) !== -1) {
      color = theme.MAIN_COLOR;
      icon = 'content-save';
    } else if (item.key.search(/send|sent/i) !== -1) {
      color = theme.COLOR_EDIT;
      icon = 'send';
    }
    return (
      <Button
        icon={icon}
        disabled={disabled}
        mode="contained"
        uppercase={false}
        style={styles.button}
        onPress={() => onPress(item)}
        labelStyle={styles.labelText}
        color={color}>
        {item.name}
      </Button>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

ButtonForms.propTypes = {
  data: PropTypes.array.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ButtonForms;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
  },
  labelText: {
    fontFamily: theme.FONT_BOLD,
    color: '#fff',
    fontSize: 14,
  },
});
