import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = () => async dispatch => {
  try {
    const res = {};

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
