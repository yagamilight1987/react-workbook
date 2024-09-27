import {
  CHANGE_FILTER,
  CHANGE_SORT,
  ERROR_PRODUCTS,
  GET_LOCAL_PRODUCTS,
  GET_PRODUCTS,
  LOADING_PRODUCTS,
} from '../actions/types';
import { IActionCreator, ProductState } from '../interfaces';

export default (state: ProductState = {}, action: IActionCreator) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        master: [...action.payload],
      };

    case GET_LOCAL_PRODUCTS:
      return { ...state, products: [...action.payload] };

    case CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...{ [action.payload.filterType]: action.payload.filterValue },
        },
      };

    case CHANGE_SORT:
      return { ...state, sort: action.payload };

    case LOADING_PRODUCTS:
      return { ...state, loading: action.payload };

    case ERROR_PRODUCTS:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
