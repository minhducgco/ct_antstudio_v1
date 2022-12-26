import React, {useRef, useState, useContext} from 'react';
import {View, StyleSheet, TextInput, Platform, FlatList} from 'react-native';
import normalize from 'react-native-normalize';
import {Menu} from 'react-native-paper';
import {Item} from 'native-base';

import {IconSearch} from '@assets/svg/icons';
import Colors from '@styles/color';
import themeStyle from '@styles/theme.style';
import {LocalizationContext} from '@context/index';

const FilterForm = ({icon = false, onPress, data = [], disabled = false}) => {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});
  const [textSearch, setTextSearch] = useState('');
  const {t} = useContext(LocalizationContext);

  const onShowPicker = () => {
    if (inputRef.current) {
      inputRef.current._root.measure((fx, fy, width, height, px, py) => {
        setLocation({x: px, y: py + 20});
      });
    }
    setVisible(true);
  };
  const onChangeText = text => {
    setTextSearch(text);
    if (text) {
      onShowPicker();
    } else {
      onDismiss();
    }
  };
  const onDismiss = () => {
    setVisible(false);
  };
  const renderItem = ({item, index}) => {
    return (
      <Menu.Item
        title={item.name}
        onPress={() => {
          onPress(item, textSearch);
          onDismiss();
        }}
        titleStyle={styles.valueItem}
        icon={icon === true ? item.icon : ''}
      />
    );
  };
  return (
    <Item
      ref={inputRef}
      disabled={disabled}
      style={styles.search}
      onPress={onShowPicker}>
      <TextInput
        style={styles.txtSearch}
        placeholder={t('input_search')}
        onChangeText={onChangeText}
        value={textSearch}
      />
      <Menu
        visible={visible}
        onDismiss={onDismiss}
        anchor={{x: location.x, y: location.y}}
        style={{marginTop: normalize(15, 'height'), width: '80%'}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </Menu>
      <View style={styles.icSearch}>
        <IconSearch
          color={Colors.DUSTY_GRAY}
          height={normalize(Platform.OS === 'ios' ? 17 : 20, 'height')}
          width={normalize(Platform.OS === 'ios' ? 17 : 20, 'width')}
        />
      </View>
    </Item>
  );
};
const styles = StyleSheet.create({
  viewSearch: {
    paddingVertical: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  search: {
    borderWidth: 1,
    // width: '70%',
    flex: 1,
    height: normalize(30),
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    borderColor: Colors.DUSTY_GRAY,
  },
  txtSearch: {
    width: '90%',
    paddingVertical: normalize(5),
    paddingLeft: normalize(10),
    fontFamily: themeStyle.FONT_FAMILY,
  },
  icSearch: {justifyContent: 'center'},
  headerContainer: {
    backgroundColor: Colors.WHITE,
  },
  valueItem: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
    width: '100%',
  },
});

export default FilterForm;
