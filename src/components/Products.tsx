import { AppState, Product } from '@/interfaces';
import { Component } from 'react';

import { connect } from 'react-redux';
import { getProducts } from '../actions';
import ProductItem from './ProductItem';

interface ProductsProps {
  products?: Product[];
  getProducts: () => void;
}

class Products extends Component<ProductsProps> {
  componentDidMount(): void {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="flex-1 flex flex-wrap justify-center p-4">
        {products && products.length > 0
          ? products.map((product) => (
              <div key={product.id} className="m-4 w-96">
                <ProductItem product={product} />
              </div>
            ))
          : 'No products'}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    products: state.productState.products,
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

// export default () => {
//   const dispatch = useDispatch();
//   const products: Product[] | undefined = useSelector(
//     (state: IState) => state.products
//   );

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   return (
//     <ul>
//       {products?.map((p: Product) => (
//         <li key={p.id}>{p.title}</li>
//       ))}
//     </ul>
//   );
// };
