import { combineReducers } from 'redux';

import productsReducer from './products';
import categoriesReducer from './categories';
import authReducer from './auth';

export default combineReducers({
  productState: productsReducer,
  categories: categoriesReducer,
  authState: authReducer,
});
