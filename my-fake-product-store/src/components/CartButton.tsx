import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import * as actions from '../actions';

interface CartButtonProps {
  productId: number;
}

const CartButton: React.FC<CartButtonProps> = (
  props: CartButtonProps
) => {
  const isUserAuthenticated = useSelector(
    (state: AppState) =>
      state.authState?.token !== '' && state.authState?.userInfo?.id !== ''
  );

  const isProductAddedToCart = useSelector(
    (state: AppState) =>
      state.cartState.products.find(
        (p) => p.productId.toString() === props.productId.toString()
      ) !== undefined
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isUserAuthenticated) {
      navigate('/auth/login');
    } else {
      if (isProductAddedToCart) {
        console.log('remove product');
      } else {
        dispatch(actions.addProductToCart(props.productId));
      }
    }
  };

  return (
    <button
      className="bg-secondary hover:bg-primary p-4 w-full"
      onClick={handleClick}
    >
      {isProductAddedToCart ? 'Remove' : 'Add to Cart'}
    </button>
  );
};

export default CartButton;
