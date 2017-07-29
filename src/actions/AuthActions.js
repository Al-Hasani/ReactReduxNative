import { Alert, Platform, Keyboard } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  LOGIN_VIA_SMS,
  LOGIN_VIA_TOUCHID,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOADING,
  DONE,
  CLEAR_STATE,
  VALID_OTP
} from './types';

export const loginViaSMS = ({ patientNumber, identification }) => {
  Keyboard.dismiss();
  return (dispatch) => {
    dispatch({ type: LOADING });
    fetch('http://www.rcymc.med.sa/api/api/MobileSecurity/Login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PatientNumber: patientNumber,
        Identification: identification,
        DeviceType: Platform.OS === 'ios' ? 'IOS' : 'Android'
      })
    }).then(async response => {
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESSFUL, payload: await response.json() });
        dispatch(NavigationActions.reset({ index: 0, actions: [{ type: NavigationActions.NAVIGATE, routeName: 'OTP'}], key: null }));
      } else if (response.status === 404) {
        const error = await response.json();
        Alert.alert(error.Status, error.Message);
        dispatch({ type: LOGIN_FAILED });
      } else {
        Alert.alert('Server Error', 'The server is not responding. Please try again later');
      }
    }).catch(error => console.log(error));
  }
};

export const loginViaTouchID = ({ patientNumber, identification }) => {
  Keyboard.dismiss();
  return (dispatch) => {
    dispatch({ type: LOADING });
    fetch('http://www.rcymc.med.sa/api/api/MobileSecurity/TouchIDLogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PatientNumber: patientNumber,
        Identification: identification,
        DeviceType: Platform.OS === 'ios' ? 'IOS' : 'Android',
        //DeviceGUID: GUID
      })
    }).then(async response => {
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESSFUL, payload: await response.json() });
        dispatch(NavigationActions.navigate({ routeName: 'Profile'}));
      } else {
        dispatch({ type: LOGIN_FAILED, payload: await response.json() });
        dispatch(NavigationActions.navigate({ routeName: 'Profile'}));
      }
    })
  }
}

export const validateOtp = ({patientNumber, identification, otp, loginToken}) => {
  Keyboard.dismiss();
  return (dispatch) => {
    dispatch({ type: LOADING });
    fetch('http://www.rcymc.med.sa/api/api/MobileSecurity/ValidateOTP', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PatientNumber: patientNumber,
        Identification: identification,
        OTP: otp,
        LoginToken: loginToken
      })
    }).then(async response => {
      if (response.status === 200) {
        dispatch({ type: VALID_OTP, payload: await response.json() });
        dispatch(NavigationActions.reset({ index: 0, actions: [{ type: NavigationActions.NAVIGATE, routeName: 'Profile', params: {patientNumber}}], key: null }));
      } else if (response.status === 404) {
        const error = await response.json();
        Alert.alert(error.Status, error.Message);
        dispatch({ type: DONE });
      } else if (response.status === 408) {
        const error = await response.json();
        Alert.alert(error.Status, error.Message);
      } else {
        Alert.alert('Server Error', 'The server is not responding. Please try again later');
      }
    })
  }
}
