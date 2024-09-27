import { combineReducers } from 'redux';

import productsReducer from './products';
import categoriesReducer from './categories';

export default combineReducers({
  productState: productsReducer,
  categories: categoriesReducer,
});
