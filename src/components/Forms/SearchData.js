/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, FlatList, View, TextInput} from 'react-native';
import {Icon, Item} from 'native-base';
import {Menu} from 'react-native-paper';
import normalize from 'react-native-normalize';
import themeStyle from '@styles/theme.style';

export default function Search({
  data = [],
  setValue,
  disabled = false,
  icon = false,
  value,
  setData,
  placeholder,
  width = '100%',
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setSearch(value.name);
    setFilterData(data);
    return () => {};
  }, [value, data]);

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = item => {
    setValue(item);
    setVisible(false);
    setSearch('');
  };

  const _renderItem = ({item, index}) => {
    return (
      <Menu.Item
        title={item.name}
        onPress={() => onPress(item)}
        titleStyle={styles.valueItem}
        icon={icon === true ? item.icon : ''}
      />
    );
  };

  const onShowPicker = () => {
    if (inputRef.current) {
      inputRef.current._root.measure((fx, fy, width, height, px, py) => {
        setLocation({x: px + width * 2, y: py + height / 2});
      });
    }
    setVisible(true);
  };

  const SearchText = text => {
    onShowPicker();
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(data);
      setSearch(text);
    }
  };
  return (
    <Item
      ref={inputRef}
      disabled={disabled}
      style={styles.menuBox}
      onPress={onShowPicker}>
      <Menu
        visible={visible}
        onDismiss={onDismiss}
        anchor={{x: location.x, y: location.y}}
        style={styles.menu}>
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Menu>
      <View style={styles.inputContain(width)}>
        <TextInput
          value={search}
          // numberOfLines={1}
          style={styles.value}
          onFocus={() => onShowPicker()}
          onChangeText={SearchText}
          placeholder={placeholder}
          // onChange={(e) => setNameSearch(e.nativeEvent.text)}
          // multiline={multiline}
        />
        <Icon
          name={visible ? 'chevron-small-up' : 'chevron-small-down'}
          type="Entypo"
        />
      </View>
    </Item>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#c9c9c9',
  },
  title: {
    fontFamily: themeStyle.FONT_BOLD,
    color: '#000',
    fontSize: 14,
  },
  value: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: '#000',
    fontSize: normalize(15),
    flex: 1,
    justifyContent: 'center',

    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
  },
  valueContainer: {
    height: normalize(40),
    justifyContent: 'center',
  },
  valueItem: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: '#000',
    fontSize: normalize(15),
  },
  menuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    borderWidth: 1,
  },
  menu: {
    marginTop: normalize(15, 'height'),
    width: '93%',
  },
  inputContain: width => ({
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: themeStyle.COLOR_GRAY,
    width: width,
  }),
  itemContain: {maxWidth: '100%'},
});
