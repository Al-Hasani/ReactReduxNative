import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  profile: ProfileReducer
});
