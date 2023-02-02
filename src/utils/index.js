import moment from 'moment';
// import Toast from 'react-native-simple-toast';
import {PermissionsAndroid} from 'react-native';

RegExp.quote = function (str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

var Utils = {};

export async function hasAndroidPermission({permission, title}) {
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, title);
  return status === 'granted';
}

export function num2numDong(num, currency, currencyLabel) {
  /**
   * Tự động phân cách 3 số sau dấu phẩy
   */
  if (isNaN(num)) {
    num = 0;
  }
  let positive_num = Math.abs(num);
  let num_string = '';

  let cumulative_revenue = Array.from(
    parseFloat(positive_num).toFixed(0),
  ).reverse();
  let beauti_cumulative_revenue = '';
  cumulative_revenue.forEach((number, index) => {
    beauti_cumulative_revenue += number;

    if (index && !((index + 1) % 3)) {
      beauti_cumulative_revenue += ',';
    }
  });
  beauti_cumulative_revenue = beauti_cumulative_revenue.replace(/[,]$/, '');
  num_string = Array.from(beauti_cumulative_revenue).reverse().join('');
  if (currency !== false) {
    num_string += currencyLabel ? ' ' + currencyLabel : ' đ';
  }
  if (num !== 0 && num < 0) {
    return '-' + num_string;
  }
  return num_string;
}

export function onchangeNumber(text) {
  /**
   * Tự động phân cách khi nhập giá trị. dùng kết hợp với hàm bên trên(num2numDong)
   */
  text = text.substr(0, 1000000);
  if (text.length > 1) {
    if (text.startsWith('0')) {
      text = text.replace(/^0{1,}/, '');
    }
    text = text.replace(new RegExp(/[.]/gi), '');
  }
  if (text === '') {
    text = '0';
  }

  return text;
}

// export const showMessage = message => {
//   Toast.show(message, Toast.SHORT, Toast.BOTTOM);
// };

export const convertAmount = amount => {
  let amountVND = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return amountVND;
};

export const timeFormat = timeStamp => {
  if (moment(timeStamp).isValid()) {
    if (moment().diff(moment.unix(timeStamp), 'days') === 0) {
      return moment.unix(timeStamp, ['hh:mm']).format('h:mm a'); // 3:20 pm
    } else if (moment().diff(moment.unix(timeStamp), 'days') < 7) {
      return moment.unix(timeStamp).format('ddd'); // Tue, Wed etc
    } else {
      return moment.unix(timeStamp).format('D MMM'); // 20 Jan
    }
  }
  return ' ';
};

export const getUnixTimeStamp = () => {
  return moment().unix();
};

Utils.timeFormat = timeFormat;
// Utils.showMessage = showMessage;
Utils.num2numDong = num2numDong;
Utils.convertAmount = convertAmount;
Utils.onchangeNumber = onchangeNumber;
Utils.getUnixTimeStamp = getUnixTimeStamp;
Utils.hasAndroidPermission = hasAndroidPermission;

export default Utils;
