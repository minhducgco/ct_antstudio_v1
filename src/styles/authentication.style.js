import normalize from 'react-native-normalize';

import color from '@styles/color';
import themeStyle from '@styles/theme.style';

export const authenticationStyle = {
  containerSpanish: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.WHITE,
  },
  txtLogo: {
    fontSize: 150,
    fontFamily: themeStyle.FONT_LOGO,
    color: color.MAIN,
    textAlign: 'center',
  },
  copyRight: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 14,
  },
  containLogin: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  formLogin: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  alertRequireText: {
    textAlign: 'center',
    color: themeStyle.MAIN_COLOR,
    fontFamily: themeStyle.FONT_FAMILY,
  },
  loginButton: {
    marginTop: normalize(10),
    alignSelf: 'center',
    justifyContent: 'center',
    height: normalize(50),
    width: '90%',
    borderRadius: normalize(5),
    backgroundColor: color.MAIN,
  },
  textButton: {
    fontSize: 20,
    fontFamily: themeStyle.FONT_BOLD,
    color: '#ffffff',
  },
  txtForgetPass: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: color.MAIN,
    textAlign: 'center',
    paddingVertical: normalize(10),
    fontSize: 15,
  },
  txtLoginWith: {
    marginVertical: normalize(20),
    alignSelf: 'center',
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 16,
  },
  registerArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(40),
    marginBottom: normalize(10),
  },
  txtNewTo: {fontFamily: themeStyle.FONT_FAMILY, fontSize: 16},
  txtRegister: {
    fontFamily: themeStyle.FONT_FAMILY,
    color: color.MAIN,
    marginLeft: normalize(5),
    fontSize: 16,
  },
  loginWith: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  logo: {
    alignSelf: 'center',
    height: normalize(30, 'height'),
    resizeMode: 'contain',
    flex: 2,
  },
  buttonLoginWith: {
    height: normalize(50),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: themeStyle.COLOR_GRAY,
    borderRadius: normalize(10),
    marginHorizontal: normalize(5),
    flexDirection: 'row',
    width: normalize(95),
  },
  loginWithText: {
    fontFamily: themeStyle.FONT_FAMILY,
    flex: 8,
    alignSelf: 'center',
    fontSize: 16,
  },
};
