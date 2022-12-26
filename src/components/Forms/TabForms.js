/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : TabForms.js
 *  Description : Tab trong Form
 *******************************************/
import React, {Fragment, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import {Tab, Tabs, ScrollableTab, Container} from 'native-base';
import {Item, Label, Input} from 'native-base';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import {styleScrollTabRedLine, tabStylesRedLine} from '@configs/Configs';

function TabForms({title, data, children, activeTab, setActiveTab}) {
  const {t} = useContext(LocalizationContext);

  const onChangeTab = item => {
    setActiveTab(item.i);
  };

  return (
    <>
      {Boolean(title) && (
        <Item>
          <Label style={styles.title}>{t(title)}:</Label>
          <Input disabled={true} />
        </Item>
      )}
      <Tabs
        style={{backgroundColor: '#fff'}}
        locked={true}
        renderTabBar={() => <ScrollableTab {...styleScrollTabRedLine} />}
        onChangeTab={onChangeTab}>
        {data.map(item => {
          return (
            <Tab {...tabStylesRedLine} heading={t(item.key)}>
              {children(item)}
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}

TabForms.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabForms;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#000',
    fontSize: 14,
  },
});
