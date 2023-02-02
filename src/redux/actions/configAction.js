import {
  ADD_DEVICE_ID,
  ADD_FIREBASE_TOKEN,
  ADD_TYPE_APP,
  SET_NUM_NOTIFY,
  SET_BLOGS,
  SET_TYPE_BLOG,
  SET_LOADING,
} from './type';

export const setLoading = payload => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const onAddDeviceId = (deviceId, deviceInfo) => dispatch => {
  dispatch({
    type: ADD_DEVICE_ID,
    deviceId: deviceId,
    deviceInfo: deviceInfo,
  });
  return Promise.resolve();
};

export const onAddFirebaseToken = firebaseToken => dispatch => {
  dispatch({
    type: ADD_FIREBASE_TOKEN,
    firebaseToken: firebaseToken,
  });
};

export const onAddTypeApp = typeApp => dispatch => {
  dispatch({
    type: ADD_TYPE_APP,
    typeApp: typeApp,
  });
};

export const setNumNotify = num => dispatch => {
  dispatch({
    type: SET_NUM_NOTIFY,
    numNotify: num,
  });
};

export const setBlogs = blogs => dispatch => {
  dispatch({
    type: SET_BLOGS,
    payload: blogs,
  });
};

export const setTypeBlog = typeCode => dispatch => {
  dispatch({
    type: SET_TYPE_BLOG,
    payload: typeCode,
  });
};
