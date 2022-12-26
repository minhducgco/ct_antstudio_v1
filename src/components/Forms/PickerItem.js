/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : PickerItem.js
 *  Description : Component chọn 1 trong danh sách cho trước.
 *******************************************/
import React, {useState, useContext, useRef} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Icon, Item, Label, Text} from 'native-base';
import {Menu} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import normalize from 'react-native-normalize';

function PickerItem({
  title = '',
  data = [],
  name = '',
  setValue,
  disabled = false,
  icon = false,
  // setName,
  isRight = false,
}) {
  const inputRef = useRef(null);
  const {t} = useContext(LocalizationContext);

  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = item => {
    setValue(item);
    // setName(item?.name);
    setVisible(false);
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
        if (isRight) {
          setLocation({x: px + width, y: py});
        } else {
          setLocation({x: px, y: py});
        }
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
        style={{marginTop: normalize(15, 'height'), width: '80%'}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Menu>
      <Label style={styles.title}>{t(title)}:</Label>
      <View style={styles.valueContainer}>
        <Text numberOfLines={1} style={styles.value}>
          {name}
        </Text>
      </View>
      <Icon
        name={visible ? 'chevron-small-up' : 'chevron-small-down'}
        type="Entypo"
      />
    </Item>
  );
}
PickerItem.propTypes = {
  data: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default PickerItem;

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#c9c9c9',
  },
  title: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
  },
  valueContainer: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  valueItem: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
    width: '100%',
  },
  menuBox: {
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
