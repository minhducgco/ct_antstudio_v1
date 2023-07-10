import {combineReducers} from '@reduxjs/toolkit';

import authReducer from '@redux/reducer/authReducer';
import configReducer from '@redux/reducer/configReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer,
});

export default rootReducer;
