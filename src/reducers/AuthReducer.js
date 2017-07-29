import { Alert, Platform } from 'react-native';
import {
  LOGIN_VIA_SMS,
  LOGIN_VIA_TOUCHID,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  INPUT_CHANGED,
  LOADING,
  DONE,
  CLEAR_STATE,
  SUBMIT_OTP,
  VALID_OTP
} from '../actions/types';

import Navigator from '../Navigator';
import { NavigationActions } from 'react-navigation';

const INITIAL_STATE = {
  patientNumber: '555496',
  identification: '1064319278',
  status: '',
  otp: '',
  loginToken: '',
  token: '',
  guid: '',
  animating: false
}
export default (state = INITIAL_STATE, action) => {
  checkInputs = (action) => {
    if (action.payload.patientNumber.length < 6) {
      Alert.alert('Error', 'Patient number must be 6 digits');
    } else if (action.payload.identification.length < 10) {
      Alert.alert('Error', 'Identification number must be 10 digits');
    } else if (!/^\d+$/.test(action.payload.patientNumber)) {
      Alert.alert('Error', 'Patient number must only contains numbers');
    } else if (!/^\d+$/.test(action.payload.identification)) {
      Alert.alert('Error', 'Identification number must only contains numbers');
    }
  }

  switch(action.type) {
    default:
      return state;
    case INPUT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.text }

    case LOADING:
      return { ...state, animating: true };

    case DONE:
      return { ...state, animating: false };

    case LOGIN_VIA_SMS:
      this.checkInputs(action);

    case LOGIN_VIA_TOUCHID:
      this.checkInputs(action);
      return state;

    case LOGIN_SUCCESSFUL:
      console.log(action.payload);
      return { ...state, status: action.payload.Status, animating: false, otp: action.payload.OTP.toString(), loginToken: action.payload.LoginToken };

    case LOGIN_FAILED:
      return { ...state, animating: false };

    case CLEAR_STATE:
      return { INITIAL_STATE };

    case VALID_OTP:
    console.log(action.payload);
      return { ...state, animating: false, token: action.payload.Token, guid: action.payload.GUID };
  };
};
