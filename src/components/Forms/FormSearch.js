import {IconSearch} from '@assets/svg/icons';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import Colors from '@styles/color';

export default function FormSearch({
  width,
  placeholder,
  onEndEditing,
  style,
  txtInput,
  setTxtInput,
}) {
  const onChangeText = text => {
    setTxtInput(text);
  };
  return (
    <View style={[styles.viewSearch(width), {...style}]}>
      <TextInput
        style={styles.txtInput}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={txtInput}
        onChangeText={onChangeText}
      />
      <View style={styles.icon}>
        <IconSearch color={Colors.DUSTY_GRAY} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
    marginHorizontal: normalize(20),
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  viewSearch: width => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.SILVERC4,
    borderRadius: normalize(10),
    height: normalize(35),
    // width: width,
    // flex: 0.6,
    alignSelf: 'center',
    marginVertical: normalize(10),
    marginHorizontal: normalize(5),
  }),
  txtInput: {
    flex: 1,
    fontSize: normalize(10),
    paddingHorizontal: normalize(10),
  },
  icon: {
    justifyContent: 'center',
    marginRight: normalize(7),
  },
});
