import { combineReducers } from 'redux';

import productsReducer from './products';
import categoriesReducer from './categories';
import authReducer from './auth';
import cartReducer from './cart';

export default combineReducers({
  productState: productsReducer,
  categories: categoriesReducer,
  authState: authReducer,
  cartState: cartReducer,
});
