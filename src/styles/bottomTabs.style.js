import normalize from 'react-native-normalize';
import color from '@styles/color';

export const bottomTabsStyle = {
  tabBarStyle: {
    backgroundColor: color.WHITE,
    position: 'absolute',
    bottom: normalize(10),
    marginHorizontal: normalize(10),
    height: normalize(60),
    borderRadius: 10,
    shadowColor: color.BLACK,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
  },
  animatedView: {
    width: 200,
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 98,
    // Horizontal Padding = 20...
    left: 50,
    borderRadius: 20,
  },
};
