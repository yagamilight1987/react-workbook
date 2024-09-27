import { FETCH_CATEGORIES } from '../actions/types';
import { IActionCreator } from '../interfaces';

export default (state: Array<string> = [], action: IActionCreator) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};
