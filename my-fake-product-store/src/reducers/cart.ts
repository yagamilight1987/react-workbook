import { CartState, IActionCreator } from '../interfaces';
import { ADD_PRODUCT_TO_CART, GET_USER_CART } from '../actions/types';

const INITIAL_STATE: CartState = {
  id: 1,
  userId: 0,
  date: Date.now().toString(),
  products: [],
};

export default (state: CartState = INITIAL_STATE, action: IActionCreator) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [
          ...state.products,
          { productId: action.payload, quantity: 1 },
        ],
      };

    case GET_USER_CART:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    default:
      return state;
  }
};
