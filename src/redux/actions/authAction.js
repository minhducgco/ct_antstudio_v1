import {
  SET_USER_LOGIN,
  SET_USER_LOGOUT,
  REVOKE,
  SET_SIGN_UP,
  CHECK_MODAL,
  CHECK_SCREEN,
  LOGIN,
  LOGOUT,
} from './type';
import {removeUserLogin} from '@configs/Database';

export const login = user => ({
  type: LOGIN,
  user,
});

export const logout = user => ({
  type: LOGOUT,
});

export const onRevoke = (data, accessToken) => dispatch => {
  dispatch({
    type: REVOKE,
    payload: data,
    accessToken: accessToken,
  });
};

export const onUserLogin = (data, accessToken) => dispatch => {
  dispatch({
    type: SET_USER_LOGIN,
    payload: data,
    accessToken: accessToken,
  });
  return Promise.resolve();
};

export const onUserLogout = () => dispatch => {
  dispatch({
    type: SET_USER_LOGOUT,
  });
  removeUserLogin();
};
export const signUp = isSignUp => dispatch => {
  dispatch({
    type: SET_SIGN_UP,
    isSignUp: isSignUp,
  });
};
export const checkModal = isOpen => dispatch => {
  dispatch({
    type: CHECK_MODAL,
    isOpen,
  });
};
export const checkScreen = screen => dispatch => {
  dispatch({
    type: CHECK_SCREEN,
    screen,
  });
};
