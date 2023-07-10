import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  numNotify: 0,
  listCountry: [],
  listProvince: [],
  listDistrict: [],
  listWard: [],
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      return {...state, isLoading: action.payload};
    },
    setNumNotify(state, action) {
      return {
        ...state,
        numNotify: action.payload,
      };
    },
    setListCountry(state, action) {
      return {
        ...state,
        listCountry: action.payload,
      };
    },
    setListProvince(state, action) {
      return {
        ...state,
        listProvince: action.payload,
      };
    },
    setListDistrict(state, action) {
      return {
        ...state,
        listDistrict: action.payload,
      };
    },
    setListWard(state, action) {
      return {
        ...state,
        listWard: action.payload,
      };
    },
  },
});

export const {
  setListWard,
  setIsLoading,
  setNumNotify,
  setListCountry,
  setListProvince,
  setListDistrict,
} = configSlice.actions;

export default configSlice.reducer;
