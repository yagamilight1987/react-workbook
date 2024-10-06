import React from 'react';
import requireAuth from '../components/auth/requireAuth';
import CartListItems from '../components/cart/CartListItems';

const CartPage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>

      <CartListItems />
    </>
  );
};

export default requireAuth(CartPage);
