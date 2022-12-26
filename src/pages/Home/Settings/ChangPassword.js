import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Form, Input, Icon, Item, Label, Content} from 'native-base';

import Colors from '@styles/color';
import {showMessage} from '@utils/index';
import theme from '@styles/theme.style';
import normalize from 'react-native-normalize';
import {changePassword} from '@repository/Authentication/index';
import HeaderStatusBar from '@components/headers/HeaderBackStatusBar';

export default function ChangPassword({navigation}) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isNewdpassword, setIsNewPassword] = useState(false);
  const [confirmPassword, setConfimPassword] = useState('');
  const [isConfirmpassword, setIsConfirmPassword] = useState(false);
  const access_token = useSelector(state => state.auth.accessToken);

  const checkRequire = () => {
    if (oldPassword === '') {
      showMessage('Vui lòng nhập mật khẩu của bạn!');
      return false;
    } else if (newPassword === '') {
      showMessage('Vui lòng nhập mật khẩu mới của bạn!');
      return false;
    } else if (newPassword !== confirmPassword) {
      showMessage('Vui lòng nhập lại mật khẩu mới của bạn!');
      return false;
    }
    return true;
  };
  const HandleChangePassword = async () => {
    if (checkRequire()) {
      await changePassword({
        access_token: access_token,
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      })
        .then(res => {
          showMessage('Thay Đổi mật khẩu thành công!');
          navigation.goBack();
        })
        .catch(_err => {
          showMessage('Nhập sai mật khẩu, vui lòng nhập lại!');
        });
    }
  };
  return (
    <Container>
      <HeaderStatusBar title={'Đổi mật khẩu'} />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label style={styles.label}>{'Mật khẩu'}</Label>
            <Input
              secureTextEntry={true}
              value={oldPassword}
              onChangeText={text => {
                setOldPassword(text);
              }}
              style={styles.label}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>{'Mật khẩu mới'}</Label>
            <Input
              secureTextEntry={isNewdpassword ? false : true}
              value={newPassword}
              onChangeText={text => {
                setNewPassword(text);
              }}
              style={styles.label}
            />
            <Icon
              active
              name={isNewdpassword ? 'eye' : 'eye-off'}
              style={styles.eyeIcon}
              onPress={() => setIsNewPassword(!isNewdpassword)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>{'Nhập lại mật khẩu mới'}</Label>
            <Input
              secureTextEntry={isConfirmpassword ? false : true}
              value={confirmPassword}
              onChangeText={text => {
                setConfimPassword(text);
              }}
              style={styles.label}
            />
            <Icon
              active
              name={isConfirmpassword ? 'eye' : 'eye-off'}
              style={styles.eyeIcon}
              onPress={() => setIsConfirmPassword(!isConfirmpassword)}
            />
          </Item>
          <TouchableOpacity
            style={styles.touchble}
            onPress={() => HandleChangePassword()}>
            <Text style={styles.title}>{'Đổi mật khẩu'}</Text>
          </TouchableOpacity>
        </Form>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: 'gray',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  row: {
    borderColor: Colors.IRON,
    fontSize: normalize(18),
    fontFamily: theme.FONT_MEDIUM,
    alignSelf: 'flex-end',
    padding: 0,
    color: Colors.BLACK,
  },
  eyeIcon: {
    fontSize: normalize(16),
    opacity: 0.4,
  },
  title: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: Colors.WHITE,
  },
  touchble: {
    marginTop: normalize(32, 'height'),
    marginLeft: normalize(8, 'width'),
    marginRight: normalize(8, 'width'),
    backgroundColor: theme.MAIN_COLOR,
    height: normalize(40, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  label: {fontFamily: theme.FONT_FAMILY, fontSize: 16},
});
