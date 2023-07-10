import normalize from 'react-native-normalize';

import color from '@styles/color';
import themeStyle from '@styles/theme.style';

export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';
export const NOT_EMPTY_CELL_BG_COLOR = color.MAIN;

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
    paddingHorizontal: normalize(20),
    // paddingTop: normalize(20),
    justifyContent: 'center',
  },
  alertRequireText: {
    textAlign: 'center',
    color: themeStyle.MAIN_COLOR,
    fontFamily: themeStyle.FONT_FAMILY,
  },
  authButton: disable => ({
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
    width: '90%',
    borderRadius: normalize(5),
    backgroundColor: disable ? color.DUSTY_GRAY : color.MAIN,
  }),
  textButton: {
    fontSize: 20,
    paddingVertical: normalize(10),
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
  viewReSend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: normalize(20),
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
  codeFieldRoot: {
    height: CELL_SIZE,
    marginVertical: normalize(10),
    paddingHorizontal: 20,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: color.MAIN,
    backgroundColor: '#fff',
    borderColor: color.MAIN,
    // borderWidth: 1,
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3,
  },
  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  imageForgetPass: {
    width: normalize(200),
    height: normalize(200),
    alignSelf: 'center',
  },
};
