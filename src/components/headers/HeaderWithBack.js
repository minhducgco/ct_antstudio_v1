/******************************************
 *  Author      : HoiHD
 *  Created On  : Sun Jul 05 2020
 *  File        : HeaderWithBack.js
 *  Description : Component Header có nút back và title.
 *******************************************/
import React, {useState} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar, Menu} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';

const {width} = Dimensions.get('window');

function HeaderWithBack({
  title = 'Header Title',
  hasBack = true,
  hasFilter = false,
  hasAction = false,
  icon = 'dots-horizontal',
  iconFilter = 'filter',
  filterData = [{key: 'item', name: 'Item'}],
  onActionFilter = () => {},
  onAction = () => {},
  onSelectFilterItem = () => {},
}) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const _onGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const openMenu = () => {
    setVisible(true);
  };

  const actionFilter = () => {
    openMenu();
    onActionFilter;
  };

  const onItemSelect = (item, index) => {
    setVisible(false);
    onSelectFilterItem(item, index);
  };

  return (
    <Appbar.Header style={{backgroundColor: theme.MAIN_COLOR}}>
      {hasBack && <Appbar.Action onPress={_onGoBack} icon="arrow-left" />}
      <Appbar.Content title={title} titleStyle={styles.title} />
      {hasAction && <Appbar.Action onPress={onAction} icon={icon} />}
      {(hasFilter && (
        <Appbar.Action icon={iconFilter} onPress={actionFilter} />
      )) || <Appbar.Action />}
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={{x: width - 10, y: 40}}>
        {filterData.map((item, index) => {
          return (
            <Menu.Item
              onPress={() => onItemSelect(item, index)}
              title={item.name}
              titleStyle={styles.titleItemFilter}
            />
          );
        })}
      </Menu>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
  titleItemFilter: {
    fontFamily: theme.FONT_SEMI_BOLD,
    color: '#000',
    fontSize: 14,
  },
});

HeaderWithBack.propTypes = {
  title: PropTypes.string.isRequired,
  hasBack: PropTypes.bool,
  hasAction: PropTypes.bool,
  onAction: PropTypes.func,
  hasFilter: PropTypes.bool,
  iconFilter: PropTypes.string,
  onActionFilter: PropTypes.func,
  filterData: PropTypes.array,
  onSelectFilterItem: PropTypes.func,
};

export default HeaderWithBack;
