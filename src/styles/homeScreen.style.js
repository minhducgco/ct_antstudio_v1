import normalize from 'react-native-normalize';

import Colors from '@styles/color';
import themeStyle from '@styles/theme.style';

export const homeScreenStyle = {
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GraphQL: {
    fontSize: normalize(30),
    fontFamily: themeStyle.FONT_FAMILY,
    color: Colors.BLACK,
  },
};
