import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';

import theme from '@styles/theme.style';

const {width, height} = Dimensions.get('window');

export const VN_FORMAT_TIME = 'HH:mm';
export const VN_FORMAT_DATE = 'DD/MM/YYYY';
export const GL_FORMAT_DATE = 'YYYY-MM-DD';
export const VN_FORMAT_DATETIME = 'DD/MM/YYYY HH:mm:ss';
export const GL_FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';

// export const MAIN_DOMAIN = 'https://uat-ptf.erpviet.vn/';
export const MAIN_DOMAIN = 'https://erp.edally.vn';
export const domain = MAIN_DOMAIN + '/api/v1/me';

LocaleConfig.locales.vi = {
  monthNames: [
    'Tháng Một',
    'Tháng Hai',
    'Tháng Ba',
    'Tháng Tư',
    'Tháng Năm',
    'Tháng Sáu',
    'Tháng Bảy',
    'Tháng Tám',
    'Tháng Chín',
    'Tháng Mười',
    'Tháng Mười Một',
    'Tháng Mười Hai',
  ],
  monthNamesShort: [
    'Th.1',
    'Th.2',
    'Th.3',
    'Th.4',
    'Th.5',
    'Th.6',
    'Th.7',
    'Th.8',
    'Th.9',
    'Th.10',
    'Th.11',
    'Th.12',
  ],
  dayNames: [
    'Chủ Nhật',
    'Thứ 2',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'vi';
LocaleConfig.locales.en = LocaleConfig.locales[''];

export const autoRemakeLinkImage = ({link}) => {
  let newLink = link.replace('url(', '').replace(')', '');

  let findHttps = newLink.startsWith('http');
  let newestLink = newLink;

  if (!findHttps) {
    newestLink = MAIN_DOMAIN + newLink;
  }

  return newestLink;
};

autoRemakeLinkImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export const styleScrollTabRedLine = {
  underlineStyle: {
    backgroundColor: theme.MAIN_COLOR,
  },
  style: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
};

export const tabStylesRedLine = {
  tabStyle: {
    backgroundColor: '#fff',
  },
  textStyle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.COLOR_GREY,
  },
  activeTabStyle: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#000',
    fontFamily: theme.FONT_BOLD,
  },
};

export const fromCoords = {x: 0, y: height};
export const toCoords = {x: width, y: 0};
