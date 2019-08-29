import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = () => async dispatch => {
  try {
    const data = {};

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  } catch {}
};
