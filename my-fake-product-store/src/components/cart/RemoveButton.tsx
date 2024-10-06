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
      className="btn"
      onClick={handleClick}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
