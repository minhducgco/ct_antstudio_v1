import {PermissionsAndroid, DeviceEventEmitter} from 'react-native';

var Utils = {};

export const showMessage = {
  success: message => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'success',
    });
  },
  fail: message => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'fail',
    });
  },
  warning: message => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'warning',
    });
  },
  help: message => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'help',
    });
  },
};

export async function hasAndroidPermission({permission, title}) {
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission, title);
  return status === 'granted';
}

export function onchangeNumber(text) {
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

Utils.showMessage = showMessage;
Utils.onchangeNumber = onchangeNumber;
Utils.hasAndroidPermission = hasAndroidPermission;

export default Utils;
