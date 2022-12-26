import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Input} from 'native-base';
import normalize from 'react-native-normalize';

import {IconSearch, IconMenu, IconBack} from '@assets/svg/icons/index';
import theme from '@styles/theme.style';
import Colors from '@styles/color';

export default function HeaderBackStatusBar({
  hasBack = false,
  renderSearch,
  onGoBack,
  onChangeText,
  value,
  placeholder,
  onPressMenu,
  hasMenu = false,
}) {
  return (
    <View
      style={[
        styles.containerHeader,
        {
          height: normalize(80, 'height'),
          // hasBack === true
          //     ? normalize(
          //           Platform.OS === 'android' ? 55 : 80,
          //           'height',
          //       )
          //     : normalize(80, 'height'),
        },
      ]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View>
        <ImageBackground
          source={require('@assets/images/headerBackground.png')}
          style={styles.contain}>
          <View style={styles.action}>
            {hasBack && (
              <TouchableOpacity onPress={() => onGoBack()}>
                <IconBack color={Colors.WHITE} />
              </TouchableOpacity>
            )}
            <View style={styles.viewSearch}>
              <IconSearch color={Colors.WOODSMOKE} />
              <Input
                value={value}
                numberOfLines={1}
                style={styles.searchText}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={theme.COLOR_BLACK_LIGHT}
              />
              {hasMenu && (
                <TouchableOpacity onPress={onPressMenu}>
                  <IconMenu color={Colors.MONZA} width={15} height={15} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: Colors.WHITE,
  },
  action: {
    flexDirection: 'row',
    // height: normalize(42, 'height'),
    // marginTop: normalize(Platform.OS === 'android' ? -40 : -45, 'height'),
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    color: Colors.BLACK,
    fontSize: 13,
    fontFamily: theme.FONT_ITALIC,
  },
  viewSearch: {
    backgroundColor: Colors.WHITE,
    height: normalize(32, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: normalize(10),
    margin: normalize(8),
    borderRadius: normalize(16),
    flex: 1,
  },
  contain: {width: '100%', height: '100%'},
});
