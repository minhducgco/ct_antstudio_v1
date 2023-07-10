/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';

import Colors from '@styles/color';
import theme from '@styles/theme.style';
import IconLibrary from '@components/BaseComponent/IconLibrary';

export default function HeaderWithTitle({
  hasLeft = false,
  title = 'Header Title',
  hasBackgroundColor = false,
  onActionRight = () => {},
  renderRight = () => <View />,
}) {
  const navigation = useNavigation();
  const _onGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.containerHeader}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.WHITE,
        }}
      />
      <View style={styles.action}>
        <View style={styles.viewBack}>
          {hasLeft && (
            <TouchableOpacity onPress={() => _onGoBack()}>
              <IconLibrary
                library="Ionicons"
                iconName="arrow-back-sharp"
                size={27}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title(hasBackgroundColor)} numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity style={styles.viewRight} onPress={onActionRight}>
          {renderRight()}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: normalize(80, 'height'),
    backgroundColor: Colors.WHITE,
  },
  title: hasBackgroundColor => ({
    fontSize: 18,
    fontFamily: theme.FONT_FAMILY,
    height: normalize(25, 'height'),
    width: '60%',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: hasBackgroundColor === true ? Colors.BLACK : Colors.BLACK,
  }),
  action: {
    flexDirection: 'row',
    height: normalize(42, 'height'),
    marginTop: normalize(Platform.OS === 'android' ? -40 : -45, 'height'),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: normalize(20),
  },
  viewBack: {
    width: normalize(28, 'width'),
    height: normalize(28, 'height'),
  },
  viewRight: {
    width: normalize(28, 'width'),
    height: normalize(28, 'height'),
    marginRight: normalize(20, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
