import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';

interface AddButtonProps {
  productId: number;
}

const AddButton: React.FC<AddButtonProps> = (props: AddButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.addProductToCart(props.productId));
  };

  return (
    <button
      className="bg-secondary hover:bg-primary p-4 w-full"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddButton;
