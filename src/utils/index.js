import {PermissionsAndroid} from 'react-native';
import moment from 'moment';
import {Vibration} from 'react-native';
import Toast from 'react-native-simple-toast';

import {VN_FORMAT_DATE} from '@configs/Configs';

RegExp.quote = function (str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

export async function hasAndroidPermission({permission, title}) {
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, title);
  return status === 'granted';
}

var Utils = {};

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

export function convertFloatToTimeString(floatTime) {
  /**
   * chuyển đổi dạng số sang dạng HH:mm (thời gian)
   */
  if (typeof floatTime === 'number') {
    if (floatTime < 0) {
      floatTime = 0;
    }
    let minute = Math.floor((floatTime - Math.floor(floatTime)) * 60);
    let timeNotFormatted =
      Math.floor(floatTime).toString() + ':' + minute.toString();
    let timeFormatted = moment(timeNotFormatted, 'HH:mm').format('HH:mm');
    return timeFormatted;
  }
  return floatTime;
}

export function convertTimeStringToFloat(timeString) {
  /**
   * Chuyển đổi dạng string sang dạng số.
   */
  if (typeof timeString === 'string') {
    let timeArray = timeString.split(':');
    let hour = Number(timeArray[0]);
    let minute = Number(timeArray[1]) / 60;
    return hour + minute;
  }
  return timeString;
}

export const showMessage = message => {
  Vibration.vibrate();
  Toast.show(message, Toast.SHORT, Toast.BOTTOM);
};

export const convertAmount = amount => {
  let amountVND = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return amountVND;
};
export function getDaysArray(start, end) {
  var dateArray = [];
  var currentDate = moment(start, VN_FORMAT_DATE);
  var stopDate = moment(end, VN_FORMAT_DATE);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format(VN_FORMAT_DATE));
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}
// Lấy số lượng bản ghi từ mảng các tháng
export const getMapFromArray = data => {
  return data.reduce((obj, item) => {
    return obj + item.data.length;
  }, 0);
};

// Trả về ngày đầu tiên và cuối cùng của tháng
export const getFirstLastDayOfMonth = data => {
  const myArray = data.split('/');
  const lastDay = new Date(new Date(myArray[1], myArray[0], 1) - 1);
  const firstDay = new Date(new Date(myArray[1], myArray[0] - 1, 1));
  return {lastDay, firstDay};
};

// Format dd/mmm/yyy hh:mm:ss to yyyy/mmm/dd hh:mm:ss
export const formatDate = data => {
  const myArray = data.split(' ');
  const day = myArray[0].split('/').reverse().join('-');
  const dayFormat = day + ' ' + myArray[1];
  return {dayFormat};
};

// Utils.showMessage = showMessage;
Utils.num2numDong = num2numDong;
Utils.onchangeNumber = onchangeNumber;
Utils.convertFloatToTimeString = convertFloatToTimeString;
Utils.convertTimeStringToFloat = convertTimeStringToFloat;
Utils.convertAmount = convertAmount;
Utils.getDaysArray = getDaysArray;
Utils.getMapFromArray = getMapFromArray;
Utils.getFirstLastDayOfMonth = getFirstLastDayOfMonth;
Utils.formatDate = formatDate;
export default Utils;
