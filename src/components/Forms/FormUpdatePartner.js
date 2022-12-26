import themeStyle from '@styles/theme.style';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import Colors from '@styles/color';

export default function FormUpdatePartner({
  title,
  value,
  isAble,
  sendTxt,
  onPress,
  disabled = true,
  index,
}) {
  const [txtInput, setTxtInput] = useState();
  useEffect(() => {
    setTxtInput(value);
  }, [value]);
  const onChangeText = text => {
    setTxtInput(text);
    sendTxt(text, index);
  };

  return (
    <View style={styles.viewItem}>
      <Text numberOfLines={1} style={styles.txtTitle}>
        {title}:
      </Text>
      <TouchableOpacity
        style={styles.txtContent(isAble)}
        disabled={disabled}
        onPress={onPress}>
        <TextInput
          style={styles.txtInput}
          value={txtInput}
          onChangeText={onChangeText}
          editable={isAble}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    paddingHorizontal: normalize(5),
    alignItems: 'center',
    margin: normalize(5),
  },
  txtTitle: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: themeStyle.COLOR_BLACK,
    fontSize: normalize(14),
    marginLeft: normalize(15),
    flex: 0.4,
  },
  txtContent: it => ({
    flex: 1,
    marginLeft: normalize(20),
    borderWidth: it === true ? normalize(2) : normalize(0),
    borderColor: it === true ? Colors.SILVER : null,
    borderRadius: it === true ? normalize(8) : normalize(0),
    paddingHorizontal: normalize(6),
    height: normalize(35),
  }),
  content: {
    flex: 1,
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.COLOR_BLACK,
    fontSize: normalize(14),
    paddingHorizontal: normalize(6),
    marginLeft: normalize(20),
  },
  txtInput: {
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.COLOR_BLACK,
    fontSize: normalize(13),
  },
});
