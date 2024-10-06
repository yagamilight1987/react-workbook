import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppState,
  CartListItemType,
  CartProduct,
  Product,
} from '../../interfaces';
import CartListItem from './CartListItem';

interface CartListItemsProps {
  subTotal: { quantity: number; totalPrice: number };
  cartProducts: CartListItemType[];
}

class CartListItems extends Component<CartListItemsProps> {
  render() {
    return (
      <div className="grid gap-6">
        {this.props.cartProducts?.map((item: CartListItemType) => (
          <CartListItem key={item.id} product={item} />
        ))}
        {
          <div className="my-8 text-right text-2xl font-light">
            Subtotal ({this.props.subTotal.quantity} items):
            <span className="font-black tracking-widest">
              ${this.props.subTotal.totalPrice.toFixed(2)}
            </span>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const cartProductItems = getCartProducts(
    state.cartState.products,
    state.productState.master
  );
  return {
    subTotal: getCartQuantityAndTotalPrice(cartProductItems),
    cartProducts: cartProductItems,
  };
};

const getCartProducts = (
  cartItems: CartProduct[],
  masterProducts: Product[] | undefined
): CartListItemType[] => {
  if (cartItems?.length && masterProducts?.length) {
    const filteredProducts: CartListItemType[] = [];
    cartItems.map((cartItem) => {
      const foundItem = masterProducts.find(
        (item) => item.id === cartItem.productId
      );
      if (foundItem) {
        filteredProducts.push({
          ...foundItem,
          productId: cartItem.productId,
          quantity: cartItem.quantity,
        });
      }
    });

    return filteredProducts?.length ? filteredProducts : [];
  }

  return [];
};

const getCartQuantityAndTotalPrice = (cartListItems: CartListItemType[]) => {
  const totals = cartListItems.reduce(
    (acc, item) => {
      acc.quantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { quantity: 0, totalPrice: 0 }
  );

  return totals;
};

export default connect(mapStateToProps)(CartListItems);
