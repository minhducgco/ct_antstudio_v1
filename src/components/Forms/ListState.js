import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';

import Colors from '@styles/color';
import themeStyle from '@styles/theme.style';

const ListState = ({data = [], actionState}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => actionState(item, index)}
        style={styles.state(item.active)}>
        <Text numberOfLines={1} style={styles.txtState}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={index => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  state: active => ({
    marginVertical: normalize(20),
    marginHorizontal: 5,
    height: normalize(35),
    flex: 1,
    borderRadius: normalize(5),
    backgroundColor: active ? Colors.MANTIS : Colors.SILVERC4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  }),
  txtState: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: themeStyle.FONT_FAMILY,
    // borderWidth: 1,
  },
});
export default ListState;
