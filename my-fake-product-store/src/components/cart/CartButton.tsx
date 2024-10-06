import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../../interfaces';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

interface CartButtonProps {
  productId: number;
}

const CartButton: React.FC<CartButtonProps> = (props: CartButtonProps) => {
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

  const navigate = useNavigate();

  const handleClickCapture = (event: any) => {
    if (!isUserAuthenticated) {
      event.stopPropagation();
      navigate('/auth/login');
    }
  };

  return (
    <div onClickCapture={handleClickCapture}>
      {isProductAddedToCart ? (
        <RemoveButton productId={props.productId} />
      ) : (
        <AddButton productId={props.productId} />
      )}
    </div>
  );
};

export default CartButton;
