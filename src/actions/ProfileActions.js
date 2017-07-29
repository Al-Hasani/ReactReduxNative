import { PROFILE_FETCHED, LOADING, DONE, DEPENDANTS_FETCHED } from './types';

export const getPatientProfile = ({ ptno, token }) => {
  return (dispatch) => {
     console.log('getPatientProfile');
    dispatch({ type: LOADING });
    fetch(`http://www.rcymc.med.sa/api/api/PatientProfile/GetPatientProfile?Token=${token}&PatientNumber=${ptno}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      if (response.status === 200) {
        dispatch({ type: PROFILE_FETCHED, payload: await response.json() });
        dispatch({ type: DONE });
      } else {
        console.log(response);
      }
    }).catch(error => console.log(error));
  }
}

export const getDependants = ({ptno, token}) => {
  console.log(ptno, token);
  return (dispatch) => {
    dispatch({ type: LOADING });
    fetch(`http://www.rcymc.med.sa/api/api/PatientProfile/GetDependants?Token=${token}&PatientNumber=${ptno}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      if (response.status === 200) {
        dispatch({ type: DEPENDANTS_FETCHED, payload: await response.json() });
        dispatch({ type: DONE });
      } else {
        console.log(response);
      }
    }).catch(error => console.log(error));
  }
}
