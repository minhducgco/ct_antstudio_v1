import React, {useContext, useState, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Menu} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import {OvertimeType, LeaveType, ChildType, BTType} from './HeaderThreeDots';
import {LocalizationContext} from '@context';
import theme from '@styles/theme.style';
import normalize from 'react-native-normalize';

function HeaderWithParams({
  title,
  hasBack = true,
  hasAction = false,
  onAction,
  accessToken,
  id,
  state,
  typeScreen,
}) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const {t} = useContext(LocalizationContext);

  const _onGoBack = () => {
    navigation.goBack();
  };
  const PickType = cases => {
    switch (typeScreen) {
      case 'Overtime':
        OvertimeType(
          navigation,
          setVisible,
          accessToken,
          id,
          cases,
          t('notification'),
          t('alert_content4'),
        );
        break;
      case 'Leave':
        LeaveType(
          navigation,
          setVisible,
          accessToken,
          id,
          cases,
          t('notification'),
          t('alert_content4'),
        );
        break;
      case 'Child':
        ChildType(
          navigation,
          setVisible,
          accessToken,
          id,
          cases,
          t('notification'),
          t('alert_content4'),
        );
        break;
      case 'BusinessTravel':
        BTType(
          navigation,
          setVisible,
          accessToken,
          id,
          cases,
          t('notification'),
          t('alert_content4'),
        );
        break;
      default:
        return;
    }
  };
  const _renderItem = (type, cases) => {
    return <Menu.Item onPress={() => PickType(cases)} title={t(type)} />;
  };

  const _handleMore = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Fragment>
      <Appbar.Header style={{backgroundColor: theme.MAIN_COLOR}}>
        {hasBack && <Appbar.Action onPress={_onGoBack} icon="arrow-left" />}
        <Appbar.Content title={title} titleStyle={styles.title} />
        {(state === 'draft' && (
          <Menu
            style={{
              top: normalize(40, 'height'),
            }}
            onDismiss={closeMenu}
            visible={visible}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                onPress={_handleMore}
                onDismiss={closeMenu}
                color={'white'}
              />
            }>
            {_renderItem('update_button', 'update')}
            {_renderItem('delete_button', 'delete')}
          </Menu>
        )) || <Appbar.Action />}
      </Appbar.Header>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default HeaderWithParams;
