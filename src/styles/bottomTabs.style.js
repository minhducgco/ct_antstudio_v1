import normalize from 'react-native-normalize';

import color from '@styles/color';

export const bottomTabsStyle = {
  tabBarStyle: {
    backgroundColor: color.WHITE,
    position: 'absolute',
    // bottom: normalize(10),
    // marginHorizontal: normalize(10),
    paddingHorizontal: normalize(20),
    height: normalize(60),
    // borderTopWidth: 0,
    // borderRadius: 15,
  },
  animatedView: {
    width: 200,
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 98,
    left: 50,
    borderRadius: 20,
  },
};
