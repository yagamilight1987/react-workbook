import React from 'react';
import redirectAuth from '../components/auth/redirectAuth';
import CartListItems from '../components/cart/CartListItems';

const CartPage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>

      <CartListItems />
    </>
  );
};

export default redirectAuth(CartPage);
