import { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts, setError, setLoading } from '../../actions';
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
    if (products && products.length > 0) {
      return (
        <div>
          <h1 className="text-3xl text-center md:text-left">Products({products.length})</h1>
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
