import theme from './theme.style';
import {Platform, Dimensions} from 'react-native';
// import {responsiveWidth} from 'react-native-responsive-dimensions';
import normalize from 'react-native-normalize';
import Colors from '@styles/color';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

export const applicationStyles = {
  containerStylePagination: {
    backgroundColor: Colors.WHITE,
    paddingVertical: normalize(8, 'height'),
  },
  separator: {
    height: normalize(3, 'height'),
    backgroundColor: Colors.SILVER,
  },
  paginationItem: {
    width: normalize(6, 'width'),
    height: normalize(6, 'height'),
    borderRadius: 3,
    marginHorizontal: normalize(10, 'width'),
    backgroundColor: theme.MAIN_COLOR,
  },
  paginationContainer: {
    flexDirection: 'row',
    height: normalize(1, 'height'),
    marginVertical: normalize(10, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontFamily: theme.FONT_BOLD,
    color: Colors.BLACK,
    fontSize: 11,
    textAlign: 'center',
  },
  viewIconFavorite: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {
    backgroundColor: theme.MAIN_COLOR,
    // width: responsiveWidth(15),
    // height: responsiveWidth(15),
    // borderRadius: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    // width: responsiveWidth(25),
    // height: responsiveWidth(30),
  },
  favoriteArrangeTitle: {
    fontFamily: theme.FONT_FAMILY,
    color: Colors.BLACK,
  },
  favoriteArrangeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  favoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10, 'height'),
    alignItems: 'center',
  },
  favoriteTitle: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 18,
    paddingVertical: 5,
    color: Colors.BLACK,
  },
  inactiveDotStyle: {
    width: normalize(7, 'width'),
    height: normalize(7, 'height'),
    borderRadius: 3.5,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  dotStyle: {
    width: normalize(8, 'width'),
    height: normalize(8, 'height'),
    borderRadius: 4,
    marginHorizontal: normalize(2, 'height'),
    backgroundColor: Colors.SILVERC4,
  },
  mainContainerCarousel: {
    height: normalize(40, 'height'),
    backgroundColor: '#efefef',
    flexDirection: 'row',
  },
  textCarousel: {
    color: '#626A72',
    fontFamily: theme.FONT_FAMILY,
    fontSize: 12,
    lineHeight: normalize(14, 'height'),
  },
  textQtyCarousel: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 20,
    fontWeight: '900',
    color: '#626A72',
  },
  iconCarousel: {
    flex: 1.5,
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
    backgroundColor: '#cfcfcf',
    zIndex: -1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    overflow: 'hidden',
  },
  absolute: {
    height: normalize(190, 'height'),
    backgroundColor: 'transparent',
    zIndex: -10,
    position: 'absolute',
  },
  content: {
    zIndex: 12,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    paddingVertical: 20,
  },
  viewSetting: {
    zIndex: 12,
    position: 'absolute',
    right: normalize(20, 'width'),
    top: normalize(20, 'height'),
  },
  viewWorkEntryManage: {
    zIndex: -10,
    position: 'absolute',
    top: normalize(100, 'height'),
    alignSelf: 'center',
  },
  viewHeader: {
    width: '100%',
    height: normalize(150, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  thumbnail: {
    width: normalize(75, 'height'),
    height: normalize(75, 'height'),
    borderRadius: 50,
    borderWidth: normalize(Platform.OS === 'android' ? 5 : 2, 'height'),
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
  },
  informationTab: {
    // flexDirection: 'row',
    paddingTop: normalize(25),
    backgroundColor: Colors.WHITE,
    width: ITEM_WIDTH,
    height: normalize(95),
    justifyContent: 'space-evenly',
    // paddingLeft: normalize(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: normalize(20),
    marginBottom: normalize(20),
  },
  informationTxt: {
    fontFamily: theme.FONT_BOLD,
    color: Colors.BLACK,
    fontSize: 16,
  },
  helpTxt: {fontFamily: theme.FONT_FAMILY, color: Colors.BLACK, fontSize: 16},
  columnWrapperStyle: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
};
