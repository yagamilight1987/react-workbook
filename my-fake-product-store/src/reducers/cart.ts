import { CartState, IActionCreator } from '../interfaces';
import * as TYPES from '../actions/types';
import products from './products';

const INITIAL_STATE: CartState = {
  id: 1,
  userId: 0,
  date: Date.now().toString(),
  products: [],
};

export default (state: CartState = INITIAL_STATE, action: IActionCreator) => {
  switch (action.type) {
    case TYPES.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [
          ...state.products,
          { productId: action.payload, quantity: 1 },
        ],
      };

    case TYPES.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.productId.toString() !== action.payload.toString()
        ),
      };

    case TYPES.GET_USER_CART:
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
      };

    case TYPES.LOGOUT_USER:
      return {
        ...INITIAL_STATE,
      };

    case TYPES.UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map(
          (product) =>
            product.productId === action.payload.productId
              ? { ...product, quantity: action.payload.quantity } // Update quantity
              : product // Keep the other products unchanged
        ),
      };

    default:
      return state;
  }
};
