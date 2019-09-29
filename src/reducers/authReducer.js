import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING } from '../actions/types';

const initialState = {
  token: null,
  isAthenticated: false,
  user: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAthenticated: false,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
