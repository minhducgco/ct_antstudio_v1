import {
  ADD_DEVICE_ID,
  ADD_FIREBASE_TOKEN,
  ADD_TYPE_APP,
  SET_NUM_NOTIFY,
  SET_BLOGS,
  SET_TYPE_BLOG,
} from '../actions/type';

const initialState = {
  deviceId: '',
  deviceInfo: '',
  firebaseToken: '',
  typeApp: 'release', // cái này để kiểm tra xem app là đang trong quá trình test hay không
  numNotify: 0,
  blogs: {},
};

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DEVICE_ID:
      return {
        ...state,
        deviceId: action.deviceId,
        deviceInfo: action.deviceInfo,
      };
    case ADD_FIREBASE_TOKEN:
      return {
        ...state,
        firebaseToken: action.firebaseToken,
      };
    case ADD_TYPE_APP:
      return {
        ...state,
        typeApp: action.typeApp,
      };
    case SET_NUM_NOTIFY:
      return {
        ...state,
        numNotify: action.numNotify,
      };
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case SET_TYPE_BLOG:
      return {
        ...state,
        type_blogs: action.payload,
      };
    default:
      return state;
  }
}
