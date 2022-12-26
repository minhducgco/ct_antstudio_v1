import theme from './theme.style';
import normalize from 'react-native-normalize';

export const authenticationStyle = {
  contain: {
    flex: 1,
    backgroundColor: theme.COLOR_WHITE,
  },
  form: {paddingHorizontal: 30},
  textButton: {
    fontSize: normalize(20),
    fontFamily: theme.FONT_BOLD,
    color: '#ffffff',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: normalize(150),
    width: '70%',
    marginBottom: normalize(20),
  },
  loginButton: {
    marginTop: normalize(20),
    alignSelf: 'center',
    justifyContent: 'center',
    height: normalize(50),
    width: '50%',
    borderRadius: normalize(15),
    backgroundColor: theme.MAIN_COLOR,
  },
};
