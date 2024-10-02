import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from '../actions/types';
import { IActionCreator } from '../interfaces';

const authReducer = (state = {}, action: IActionCreator) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, ...action.payload };

    case LOGIN_USER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
