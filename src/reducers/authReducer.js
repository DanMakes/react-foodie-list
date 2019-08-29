import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

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
    default:
      return state;
  }
};
