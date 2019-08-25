import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  /* auth la key de goi sau nay */
  auth: authReducer
});
