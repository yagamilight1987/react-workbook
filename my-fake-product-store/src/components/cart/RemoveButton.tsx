import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';

interface RemoveButtonProps {
  productId: number;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ productId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.removeProductFromCart(productId));
  };

  return (
    <button
      className="bg-secondary hover:bg-primary p-4 w-full"
      onClick={handleClick}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
