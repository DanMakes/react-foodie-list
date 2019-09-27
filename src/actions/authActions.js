import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING } from './types';

// Log in user
export const login = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.post('/api/auth');

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
