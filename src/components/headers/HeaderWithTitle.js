/******************************************
 *  Author : Author
 *  Created On : Sat Jul 04 2020
 *  File : HeaderOnlyTitle.js
 *  Description:
 *******************************************/
import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Title, Button} from 'native-base';
import {Appbar} from 'react-native-paper';

import theme from '@styles/theme.style';

const HeaderWithTitle = props => {
  return (
    <Appbar.Header style={{backgroundColor: theme.MAIN_COLOR}}>
      <Appbar.Content title={props.title} titleStyle={styles.title} />
    </Appbar.Header>
  );
};

export default HeaderOnlyTitle;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: theme.FONT_BOLD,
  },
});
