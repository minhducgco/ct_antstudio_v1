import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import SvgIconBack from '@assets/svg/icons/SvgIconBack';
import Colors from '@styles/color';
import theme from '@styles/theme.style';
export default function HeaderBackStatusBar({
  title = '',
  hasLeft = true, //header hiển thị icon bê  trái
  hasBackgroundColor = false,
  hasIcon = false,
  renderLeft = () => {}, // render icon trái
  onActionLeft,
  clickIcon,
  nameIcon,
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
      <ImageBackground
        source={require('@assets/images/headerBackground.png')}
        style={styles.image}>
        <View style={styles.action}>
          <View style={styles.viewBack}>
            {hasLeft && (
              <TouchableOpacity onPress={() => _onGoBack()}>
                <SvgIconBack
                  color={
                    hasBackgroundColor !== true ? Colors.WHITE : Colors.MONZA
                  }
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.title(hasBackgroundColor)} numberOfLines={1}>
            {title}
          </Text>
          {hasIcon === true ? (
            <View style={styles.viewTitleIcon}>
              <TouchableOpacity onPress={clickIcon} style={styles.touchIcon}>
                <Icon
                  name={nameIcon}
                  size={normalize(28)}
                  color={Colors.WHITE}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.viewRight}>{renderRight()}</View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: normalize(80, 'height'),
    backgroundColor: Colors.WHITE,
  },
  action: {
    flexDirection: 'row',
    marginHorizontal: normalize(20, 'width'),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    paddingBottom: normalize(20),
  },
  viewBack: {
    width: normalize(60, 'width'),
    height: normalize(28, 'height'),
    // marginTop: normalize(Platform.OS === 'android' ? 0 : 5, 'height'),
  },
  viewRight: {
    width: normalize(60, 'width'),
    height: normalize(28, 'height'),
    alignItems: 'center',
  },
  viewTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: hasBackgroundColor => ({
    fontSize: 18,
    fontFamily: theme.FONT_BOLD,
    height: normalize(25, 'height'),
    width: '50%',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: hasBackgroundColor === true ? Colors.BLACK : Colors.WHITE,
  }),
  header: borderBottom => {
    return {
      width: '100%',
      height: normalize(80, 'height'),
      backgroundColor: Colors.WHITE,
      borderColor: borderBottom ? Colors.ALTO : Colors.WHITE,
      borderWidth: 1,
    };
  },
  hasTitle: (hasTitle, width) => {
    return {
      width: hasTitle === false ? '90%' : normalize(width - 150, 'width'),
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginRight: normalize(hasTitle === false ? normalize(20, 'width') : 0),
      marginLeft: normalize(hasTitle === false ? normalize(20, 'width') : 0),
    };
  },
  image: {width: '100%', flex: 1},
  viewTitleIcon: {
    width: normalize(70, 'width'),
    height: normalize(28, 'height'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewEmpty: {
    width: normalize(28),
  },
});
