import React, {useState, useRef, useContext} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Icon, Item, Text} from 'native-base';
import {Menu} from 'react-native-paper';
// import fonts from '@theme/f';/
import normalize from 'react-native-normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LocalizationContext} from '@context/';
import themeStyle from '@styles/theme.style';

export default function DropdownPickerAsign({
  data = [],
  emp = [],
  disabled = false,
  icon = false,
  name = '',
  setEmp,
  leadID,
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({x: 0, y: 0});
  const {t} = useContext(LocalizationContext);

  const onDismiss = () => {
    setVisible(false);
  };

  const onPress = (item, index) => {
    if (item.id === leadID) {
      Alert.alert(t('WARNING'), t('ERROR_ISSIGN'));
      onRemove(index);
    } else {
      let newListIssues = [...emp];
      newListIssues.push(item);
      setEmp(Array.from(new Set(newListIssues)));
    }
    setVisible(false);
  };

  const onRemove = index => {
    let newListIssues = [...emp];
    newListIssues.splice(index, 1);
    setEmp(newListIssues);
  };

  const _renderItem = ({item, index}) => {
    return (
      <Menu.Item
        title={item.name}
        onPress={() => onPress(item, index)}
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
      <View style={styles.valueContainer}>
        {emp.length > 0 ? (
          <FlatList
            data={emp}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View style={styles.row}>
                <Text numberOfLines={1} style={styles.value}>
                  {item.name}
                </Text>
                <View style={styles.justify}>
                  <TouchableOpacity onPress={() => onRemove(index)}>
                    <AntDesign name="closecircle" size={13} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <Text numberOfLines={1} style={styles.value}>
            {name}
          </Text>
        )}
      </View>
      <Icon
        name={visible ? 'chevron-small-up' : 'chevron-small-down'}
        type="Entypo"
      />
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
    fontFamily: themeStyle.NORMAL,
    color: '#000',
    fontSize: 14,
    marginHorizontal: normalize(5),
  },
  valueContainer: {
    paddingVertical: normalize(10),
    width: normalize(300),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueItem: {
    fontFamily: themeStyle.NORMAL,
    color: '#000',
    fontSize: 14,
    width: '130%',
  },
  menuBox: {
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    marginTop: normalize(15, 'height'),
    width: '95%',
  },
  row: {flexDirection: 'row'},
  justify: {justifyContent: 'center'},
});
