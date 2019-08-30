import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
  isAthenticated: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAthenticated: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAthenticated: false
      };
    default:
      return state;
  }
};
