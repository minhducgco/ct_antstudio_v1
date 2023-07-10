import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  accessToken: '',
  firebaseToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      return {...state, userInfo: action.payload};
    },
    setAccessToken(state, action) {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
  },
});

export const {setUserInfo, setAccessToken} = authSlice.actions;

export default authSlice.reducer;
