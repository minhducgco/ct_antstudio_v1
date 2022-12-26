import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SET_USER_LOGIN,
  SET_USER_LOGOUT,
  REVOKE,
  SET_SIGN_UP,
  CHECK_MODAL,
  CHECK_SCREEN,
  LOGIN,
  LOGOUT,
} from '../actions/type';

const initialState = {
  user: {},
  accessToken: '',
  isLoading: true,
  isLogin: false,
  isSignUp: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REVOKE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isLogin: true,
        accessToken: action.accessToken,
      };
    case SET_USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        accessToken: action.accessToken,
      };
    case SET_USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        user: {},
        accessToken: null,
      };
    case SET_SIGN_UP:
      return {
        ...state,
        isSignUp: action.isSignUp,
      };
    case CHECK_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case CHECK_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    case LOGIN:
      return {...state, isLoggedIn: true, user: action.user};
    case LOGOUT:
      AsyncStorage.removeItem('@loggedInUserID:id');
      AsyncStorage.removeItem('@loggedInUserID:key');
      AsyncStorage.removeItem('@loggedInUserID:password');
      return {...state, isLoggedIn: false, user: {}};
    default:
      return state;
  }
}
