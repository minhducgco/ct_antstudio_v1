import React, {useState, useRef, useContext} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Icon, Item, Text} from 'native-base';
import {Menu} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {LocalizationContext} from '@context/';
import themeStyle from '@styles/theme.style';

export default function PickerOrder({
  data = [],
  name = '',
  setValue,
  disabled = false,
  icon = false,
  width,
  color = '#000',
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});
  const {t} = useContext(LocalizationContext);

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = item => {
    setValue(item);
    setVisible(false);
  };

  const _renderItem = ({item, index}) => {
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
        setLocation({x: px + width * 2, y: py + height / 2});
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
        style={styles.menu}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Menu>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: themeStyle.COLOR_GRAY,
        }}>
        <Text numberOfLines={1} style={styles.value(color)}>
          {name}
        </Text>
        <Icon
          name={visible ? 'chevron-small-up' : 'chevron-small-down'}
          type="Entypo"
          style={{color: color}}
        />
      </View>
    </Item>
  );
}
// PickerItem.propTypes = {
//   data: PropTypes.array.isRequired,
//   setValue: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   setName: PropTypes.func,
//   disabled: PropTypes.bool,
// };

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#c9c9c9',
  },
  title: {
    color: '#000',
    fontSize: normalize(14),
  },
  value: color => ({
    color: color,
    fontSize: normalize(12),
    fontFamily: themeStyle.FONT_FAMILY,
    flex: 1,
    paddingLeft: normalize(10),
  }),
  valueContainer: {
    height: normalize(40),
    justifyContent: 'center',
  },
  valueItem: {
    color: '#000',
    fontSize: normalize(14),
    width: '130%',
    fontFamily: themeStyle.FONT_FAMILY,
  },
  menuBox: {
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  menu: {
    marginTop: normalize(15, 'height'),
    width: '95%',
    left: normalize(10),
  },
  itemContain: {maxWidth: '100%'},
});
