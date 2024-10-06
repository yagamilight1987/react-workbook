import React from 'react';
import { Product } from '../../interfaces';
import CartButton from '../cart/CartButton';
import QuantitySelector from '../cart/QuantitySelector';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-8 hover:bg-base-300">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h2 className="card-title">{product.title}</h2>
          <div className="badge badge-neutral capitalize">
            {product.category}
          </div>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-lg font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                {'★'.repeat(Math.floor(product.rating.rate))}
                {'☆'.repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="ml-2">({product.rating.rate})</span>
            </div>
          </div>
        </div>
        <div className="flex items-stretch card-actions justify-end">
          <QuantitySelector productId={product.id} />
          <CartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
