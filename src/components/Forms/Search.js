import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, FlatList, Platform, TextInput, View} from 'react-native';
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
  holder,
  height = normalize(300),
  isInModal = false,
  onEndEditing,
  multiline = false,
  editable = true,
  setNameSearch = () => {},
  border = true,
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(value.name);
    return () => {};
  }, [value]);

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = item => {
    setValue(item);
    setVisible(false);
  };
  // const onChangeText = (txt) => {
  //     setSearch(txt);
  //     const newList = data.filter((item) => {
  //         return item.name.toLowerCase().match(txt.toLowerCase().trim());
  //     });
  //     console.log(newList.length);
  //     setList(newList);
  // };
  const _renderItem = ({item, index}) => {
    // console.log(item);
    return (
      <Menu.Item
        title={item.name}
        onPress={() => onPress(item)}
        titleStyle={styles.valueItem}
        icon={icon === true ? item.icon : ''}
        style={styles.itemContain}
      />
    );
  };

  const onShowPicker = () => {
    if (inputRef.current) {
      inputRef.current._root.measure((fx, fy, width, height, px, py) => {
        const yPlatform =
          Platform.OS === 'android'
            ? py - normalize(200) + height
            : py - normalize(270) + height;
        setLocation({
          x: px + width * 2,
          y: isInModal ? yPlatform : py + height / 2,
        });
      });
    }
    setVisible(true);
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
        style={styles.menu(height)}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Menu>
      <View style={styles.inputContain(border)}>
        <TextInput
          value={search}
          // numberOfLines={1}
          style={styles.value}
          onFocus={() => onShowPicker()}
          onChangeText={setSearch}
          placeholder={holder}
          onEndEditing={onEndEditing}
          editable={editable}
          onChange={e => setNameSearch(e.nativeEvent.text)}
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
    fontSize: normalize(12),
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
    fontSize: normalize(13),
  },
  menuBox: {
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
  },
  menu: height => ({
    marginTop: normalize(15, 'height'),
    width: '93%',
    height: height,
  }),
  inputContain: border => ({
    flexDirection: 'row',
    borderWidth: border === true ? 0.5 : 0,
    borderRadius: 5,
    borderColor: themeStyle.COLOR_GRAY,
  }),
  itemContain: {maxWidth: '100%'},
});
