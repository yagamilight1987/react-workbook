import { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts, setError, setLoading } from '../actions';
import ProductItem from './ProductItem';
import { AppState, Product } from '@/interfaces';

interface ProductsProps {
  products?: Product[];
  loading?: boolean;
  error?: string;
  getProducts: () => void;
}

class Products extends Component<ProductsProps> {
  componentDidMount(): void {
    this.props.getProducts();
  }

  renderLoader() {
    return 'Loading...';
  }

  renderError(message: string) {
    return message;
  }

  renderProductList(products: Product[] | undefined) {
    return products && products.length > 0
      ? products.map((product: Product) => (
          <div key={product.id} className="m-4 w-64">
            <ProductItem product={product} />
          </div>
        ))
      : 'No products';
  }

  render() {
    const { products, loading, error } = this.props;
    return (
      <>
        {loading
          ? this.renderLoader()
          : error
          ? this.renderError(error)
          : this.renderProductList(products)}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    products: state.productState.products,
    loading: state.productState.loading,
    error: state.productState.error,
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
  setLoading: setLoading,
  setError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
