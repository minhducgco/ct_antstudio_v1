import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  SET_ORDER_LINE,
  SET_LIST_MONTH,
  SET_VALUE_SEARCH,
  SET_LIST_APPROVER,
} from './type';

import {getBlogPosts} from '@repository/Home/index.js';

export const getBlogsHome = (accessToken, blogPostId) => dispatch => {
  dispatch(fetchUser());
  getBlogPosts({accessToken, blogPostId})
    .then(data => dispatch(fetchUserSuccess(data)))
    .catch(error => dispatch(fetchUserFailed(error)));

  return Promise.resolve();
};

const fetchUser = () => ({
  type: FETCH_DATA,
});

const fetchUserSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

const fetchUserFailed = error => ({
  type: FETCH_DATA_FAILED,
  payload: {error},
});
export const setOrderLine =
  (payload, isUpdate = false) =>
  dispatch => {
    return dispatch({
      type: SET_ORDER_LINE,
      payload,
      isUpdate,
    });
  };

export const setListMonth = payload => dispatch => {
  return dispatch({
    type: SET_LIST_MONTH,
    payload,
  });
};
export const setValueSearch = payload => dispatch => {
  return dispatch({
    type: SET_VALUE_SEARCH,
    payload,
  });
};
export const setListApprover = payload => dispatch => {
  return dispatch({
    type: SET_LIST_APPROVER,
    payload,
  });
};
