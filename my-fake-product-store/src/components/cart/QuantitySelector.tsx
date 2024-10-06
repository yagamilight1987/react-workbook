import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions';
import { AppState } from '../../interfaces';
import renderAuth from '../auth/renderAuth';

interface QuantitySelectorProps {
  productId: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = (
  props: QuantitySelectorProps
) => {
  const quantity = useSelector(
    (state: AppState) =>
      state.cartState.products.find(
        (item) => item.productId === props.productId
      )?.quantity
  );

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(
      actions.updateQuantity(props.productId, Number(event.target.value))
    );
  };

  return (
    <input
      type="number"
      min={1}
      max={10}
      value={quantity || 1}
      onChange={handleChange}
      className="w-16 rounded text-center"
    />
  );
};

export default renderAuth(QuantitySelector);
