import React, {useContext} from 'react';
import {Text, Alert, View} from 'react-native';
import {Button} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {Fab, Icon} from 'native-base';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context';
import colors from '@styles/color';

const DynamicButton = ({func, name, color}) => {
  const {t} = useContext(LocalizationContext);
  return (
    <Button
      uppercase={false}
      onPress={() => {
        func();
      }}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={styles.textButton}>{t(name)}</Text>
    </Button>
  );
};
const alertNotification = (title, text) =>
  Alert.alert(
    title,
    text,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );

const AddButton = ({func}) => {
  return (
    <Fab
      active={false}
      position="bottomRight"
      direction="up"
      useNativeDriver={false}
      style={styles.buttonContainer}
      onPress={func}>
      <View style={styles.buttonView}>
        <Icon name="add" style={{color: colors.WHITE}} />
      </View>
    </Fab>
  );
};

export {DynamicButton, alertNotification, AddButton};

export const styles = {
  button: {
    flex: 1,
    justifyContent: 'center',
    height: normalize(40, 'height'),
    margin: normalize(5),
  },
  textButton: {
    fontFamily: theme.FONT_BOLD,
    color: '#fff',
    fontSize: normalize(10, 'height'),
  },
  buttonContainer: {
    backgroundColor: theme.MAIN_COLOR,
    justifyContent: 'center',
  },
  buttonView: {
    alignSelf: 'center',
    left: 1,
    top: 1,
  },
};
