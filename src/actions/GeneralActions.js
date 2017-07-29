import { NavigationActions } from 'react-navigation';
import {
INPUT_CHANGED,
LOADING,
DONE,
CLEAR_STATE
} from './types';
export const inputChanged = ({prop, text}) => {
  return {
    type: INPUT_CHANGED,
    payload: {prop, text}
  };
};

export const navigate = (screen, patientNumber=null) => {
  return (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: screen, params: {patientNumber} }));
  }
}

export const dismessModal = () => {
  return (dispatch) => {
    dispatch(NavigationActions.reset({ index: 0, actions: [{ type: NavigationActions.NAVIGATE, routeName: 'Login'}], key: null }));
    dispatch({ type: CLEAR_STATE });
  }
}
