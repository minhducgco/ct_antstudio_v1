import React from 'react';
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';

import HeaderStatusBar from '@components/headers/HeaderBackStatusBar';
import {AddButton} from '@components/MiniComponent/MiniComponents';
import {scrollTabStyles, tabStyles} from '@styles/scroll.style';
import ContentBody from '@components/Application/Sales/ContentBody';

const tabs = [
  {key: '', name: 'Tất cả', sequence: 1},
  {key: 'draft', name: 'Nháp', sequence: 2},
  {key: 'no_transfer', name: 'Chưa xuất kho', sequence: 3},
  {key: 'sent', name: 'Chờ duyệt', sequence: 3},
];

export default function OrderListScreen({navigation}) {
  const _onPressFAB = () => {
    // navigation.navigate('CreateNewOrder', {isCreate: true});
  };

  return (
    <Container>
      <HeaderStatusBar title={'Bán hàng'} hasBackgroundColor={false} />
      <Tabs
        renderTabBar={() => <ScrollableTab {...scrollTabStyles} />}
        locked={true}>
        {tabs.map(tab => {
          return (
            <Tab heading={tab.name} key={tab.key} {...tabStyles}>
              <ContentBody type={tab.key} />
            </Tab>
          );
        })}
      </Tabs>
      <AddButton func={() => _onPressFAB()} />
    </Container>
  );
}
