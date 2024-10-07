import { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { AppState, Product } from '../../interfaces';

interface ProductsProps {
  products?: Product[];
}

class Products extends Component<ProductsProps> {
  renderProductList(products: Product[] | undefined) {
    if (products && products.length > 0) {
      return (
        <div>
          <h1 className="text-3xl text-center md:text-left">
            Products({products.length})
          </h1>
          <div className="flex flex-wrap gap-12 justify-center mt-12">
            {products.map((product: Product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
    } else {
      return 'No products';
    }
  }

  render() {
    const { products } = this.props;
    return this.renderProductList(products);
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    products: state.productState.products,
  };
};

export default connect(mapStateToProps)(Products);
