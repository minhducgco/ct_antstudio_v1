import {combineReducers} from 'redux';
import authReducer from './authReducer';
import configReducer from './configReducer';
import {dataReducer} from './dataReducer';

export default combineReducers({
  auth: authReducer,
  conf: configReducer,
  datareduce: dataReducer,
});
