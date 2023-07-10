import {LocaleConfig} from 'react-native-calendars';

export const VN_FORMAT_TIME = 'HH:mm';
export const VN_FORMAT_DATE = 'DD/MM/YYYY';
export const GL_FORMAT_DATE = 'YYYY-MM-DD';
export const VN_FORMAT_DATETIME = 'DD/MM/YYYY HH:mm:ss';
export const GL_FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';

export const googleConfig = {
  webClientId:
    '653218895930-13hu47jmv6r34bkuiqpolpkvhfiaprrj.apps.googleusercontent.com',
  offlineAccess: true,
  scopes: ['email'],
  facebookIdentifier: '875933576873186',
  isSMSAuthEnabled: true,
  isGoogleAuthEnabled: true,
  isAppleAuthEnabled: true,
  isFacebookAuthEnabled: true,
  forgotPasswordEnabled: true,
  isUsernameFieldEnabled: false,
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
