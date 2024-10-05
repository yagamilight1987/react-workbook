import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../components/auth/requireAuth';
import { AppState, CartProduct, Product } from '../interfaces';

interface CartPageProps {
  cartItems: CartProduct;
  cartProducts: Product[];
}

class CartPage extends Component<CartPageProps> {
  render() {
    if (this.props.cartItems?.length > 0) {
      return (
        <ul>
          {this.props.cartProducts?.map((item) => (
            <li key={item.id}>
              {item.title} : {item.price}
            </li>
          ))}
        </ul>
      );
    }

    return <div>Empty cart!</div>;
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    cartItems: state.cartState.products,
    cartProducts: getCartProducts(
      state.cartState.products,
      state.productState.master
    ),
  };
};

const getCartProducts = (
  cartProducts: CartProduct,
  masterProducts: Product[] | undefined
) => {
  return cartProducts.map((item) => {
    const foundProduct = masterProducts?.find(
      (p) => p.id.toString() === item.productId.toString()
    );
    if (foundProduct !== null) {
      return foundProduct;
    }
  });
};

export default connect(mapStateToProps)(requireAuth(CartPage));
