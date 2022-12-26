/******************************************
 *  Author      : HoiHD
 *  Created On  : Sun Jul 05 2020
 *  File        : HeaderWithBack.js
 *  Description : Component Header có nút back và title.
 *******************************************/
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';

function HeaderWithFunction({
  title = 'Header Title',
  hasAction = false,
  icon,
  onAction,
}) {
  const navigation = useNavigation();
  const _onGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Appbar.Header style={{backgroundColor: theme.MAIN_COLOR}}>
      <Appbar.Action onPress={_onGoBack} icon="arrow-left" />
      <Appbar.Content title={title} titleStyle={styles.title} />
      {hasAction ? (
        <Appbar.Action onPress={onAction} icon={icon} />
      ) : (
        <Appbar.Action />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
  titleItemFilter: {
    fontFamily: theme.FONT_SEMI_BOLD,
    color: '#000',
    fontSize: 14,
  },
});

HeaderWithFunction.propTypes = {
  title: PropTypes.string.isRequired,
  hasAction: PropTypes.bool,
  icon: PropTypes.string,
  onAction: PropTypes.func,
};

export default HeaderWithFunction;
