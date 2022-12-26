import HTTP from '@configs/HTTP';
import Database from '@configs/Database';
import DeviceInfo from 'react-native-device-info';

export const signIn = async ({login, password, type = 'odoo'}) => {
  const body = {
    login: login,
    password: password,
    device_id: DeviceInfo.getUniqueId()._j || 'caf4aa4951f98317',
    firebase_token: '',
  };
  const token = await Database.getFirebaseToken();
  if (token) {
    body.firebase_token = token;
  }
  const deviceName = await DeviceInfo.getDeviceName();
  if (deviceName) {
    body.device_info = deviceName;
  }
  console.log(body);
  return new Promise((handleSuccess, handleError) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    HTTP.post(
      '/sign_in',
      options,
      res => {
        if (res.code === 200) {
          handleSuccess(res.data);
        } else {
          handleError(res.message);
        }
      },
      err => {
        handleError(err);
      },
    );
  });
};

export const logOut = async ({accessToken}) =>
  new Promise((handleSuccess, handleError) => {
    let body = {
      access_token: accessToken,
    };
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    console.log(
      '🚀 ~ file: index.js ~ line 57 ~ newPromise ~ JSON.stringify(body)',
      JSON.stringify(body),
    );
    HTTP.post(
      '/logout',
      options,
      res => {
        if (res.code === 200) {
          handleSuccess(res.data);
        } else {
          handleError(res.message);
        }
      },
      err => {
        handleError(err);
      },
    );
  });

export const signUp = ({
  type,
  name,
  email,
  phone,
  password,
  deviceId,
  deviceInfo,
  firebaseToken,
}) =>
  new Promise((handleSuccess, handleError) => {
    let body = {
      type,
      name,
      email,
      phone,
      password,
      device_id: deviceId,
      device_info: deviceInfo,
      firebase_token: firebaseToken,
    };
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    HTTP.post(
      '/sign_up',
      options,
      res => {
        if (res.result !== undefined && res.result.code === 200) {
          handleSuccess(res.result.data);
        } else {
          handleError(res.result.message);
        }
      },
      err => {
        handleError(err);
      },
    );
  });

export const getLogo_Url = ({logo_name = ''}) =>
  new Promise((handleSuccess, handleError) => {
    let body = {
      logo_name: logo_name,
    };
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    HTTP.post(
      '/website/get_logo',
      options,
      res => {
        if (res.result !== undefined && res.result.code === 200) {
          handleSuccess(res.result.data);
        } else {
          handleError(res.result.message);
        }
      },
      err => {
        handleError(err);
      },
    );
  });

export const changePassword = ({
  access_token,
  old_password,
  new_password,
  confirm_password,
}) =>
  new Promise((handleSuccess, handleError) => {
    let body = {
      access_token: access_token,
      old_password: old_password,
      new_password: new_password,
      confirm_password: confirm_password,
    };
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    HTTP.post(
      '/website/change_password',
      options,
      res => {
        if (res.result !== undefined && res.result.code === 200) {
          handleSuccess(res.result.data);
        } else {
          handleError(res.result.message);
        }
      },
      err => {
        handleError(err);
      },
    );
  });
