import {
  GET_USER_INFO,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from '../actions/types';
import { AuthState, IActionCreator } from '../interfaces';

const INITIAL_STATE: AuthState = {
  token: '',
  error: '',
  userInfo: {},
};

const authReducer = (
  state: AuthState = INITIAL_STATE,
  action: IActionCreator
) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, ...action.payload, error: '' };

    case LOGIN_USER_ERROR:
      return { ...state, error: action.payload };

    case LOGOUT_USER:
      return { ...INITIAL_STATE };

    case GET_USER_INFO:
      return { ...state, userInfo: { ...action.payload } };

    default:
      return state;
  }
};

export default authReducer;
