import { PROFILE_FETCHED, DEPENDANTS_FETCHED } from '../actions/types';

const INITIAL_STATE = {
  patient: {},
  dependants: [],
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;

    case PROFILE_FETCHED:
      console.log(action.payload);
      return { ...state, patient: action.payload };

    case DEPENDANTS_FETCHED:
      console.log(state.dependants);
      return { ...state, dependants: action.payload.Dependants };
  }
}
