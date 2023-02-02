/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import normalize from 'react-native-normalize';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '@styles/color';
import theme from '@styles/theme.style';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  onPressIn = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <MaterialCommunityIcons
          name={iconName}
          style={{
            color: COLORS.MAIN,
            fontSize: 22,
            marginRight: 10,
          }}
        />
        <TextInput
          autoCorrect={false}
          onPressIn={() => onPressIn()}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          style={{
            color: COLORS.darkBlue,
            flex: 1,
            fontSize: 16,
            fontFamily: theme.FONT_FAMILY,
          }}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{
              color: COLORS.darkBlue,
              fontSize: 22,
              marginLeft: normalize(10),
            }}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginBottom: normalize(10),
    fontSize: 14,
    color: COLORS.grey,
    fontFamily: theme.FONT_FAMILY,
  },
  inputContainer: {
    height: normalize(50),
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderRadius: normalize(10),
    marginBottom: normalize(20),
  },
});

export default Input;
