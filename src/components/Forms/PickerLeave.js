import React, {useEffect, useState, useContext, useRef} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import {Icon, Item, Label, Input, Text} from 'native-base';
import {Menu} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import normalize from 'react-native-normalize';
import Colors from '@styles/color';

function PickerLeave({
  title = '',
  data = [],
  name = '',
  defaultValue,
  maxLength = 10000,
  setName,
  setValue,
  disabled = false,
  required = false,
  icon = false,
  keyboardType = '',
}) {
  const inputRef = useRef(null);
  const {t} = useContext(LocalizationContext);

  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = item => {
    // setName(item);
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
      />
    );
  };

  const onShowPicker = () => {
    if (inputRef.current) {
      inputRef.current._root.measure((fx, fy, width, height, px, py) => {
        setLocation({x: px, y: py + height / 2});
      });
    }
    setVisible(true);
  };
  // if (required) {
  //     return (
  //         <Item>
  //             <Label style={styles.title}>
  //                 {t(title)} <Text style={{ color: 'red' }}>*</Text>:
  //             </Label>
  //             <Input
  //                 disabled={disabled}
  //                 style={styles.value}
  //                 value={defaultValue}
  //                 onChangeText={(text) => {
  //                     setValue(text);
  //                 }}
  //                 numberOfLines={10}
  //                 maxLength={maxLength}
  //             />
  //         </Item>
  //     );
  // }

  return (
    <View style={styles.container}>
      <Label style={styles.title}>
        {t(title)} <Text style={{color: 'red'}}>*</Text>:
      </Label>
      <View style={styles.containerPicker}>
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
      </View>
    </View>
  );
}
PickerLeave.propTypes = {
  data: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.string,
};

export default PickerLeave;

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#c9c9c9',
  },
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#000',
    fontSize: 14,
    flex: 3,
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
    // flex: 7,
    // alignItems: 'center',
  },
  valueContainer: {
    height: 40,
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'center',
    marginLeft: normalize(5),
  },
  valueItem: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
    width: '100%',
  },
  menuBox: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    marginRight: normalize(5),
    alignItems: 'center',
    marginLeft: normalize(10),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(18),
    marginTop: normalize(10),
  },
  menu: {
    marginTop: normalize(15, 'height'),
    width: '80%',
    marginLeft: normalize(200),
  },
  containerPicker: {
    borderWidth: 1,
    borderColor: Colors.DUSTY_GRAY,
    // width: normalize(243),
    borderRadius: 5,
    flex: 7,
    // paddingLeft: normalize(20),
  },
});
