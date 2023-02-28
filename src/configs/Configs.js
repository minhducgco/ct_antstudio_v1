import {LocaleConfig} from 'react-native-calendars';

export const VN_FORMAT_TIME = 'HH:mm';
export const VN_FORMAT_DATE = 'DD/MM/YYYY';
export const GL_FORMAT_DATE = 'YYYY-MM-DD';
export const VN_FORMAT_DATETIME = 'DD/MM/YYYY HH:mm:ss';
export const GL_FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';

export const regexForNames = /^[a-zA-Z]{2,25}$/;

export const MAIN_DOMAIN = 'http://192.168.163.187:8080';

export const googleConfig = {
  webClientId:
    '653218895930-13hu47jmv6r34bkuiqpolpkvhfiaprrj.apps.googleusercontent.com',
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible.
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
};

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
