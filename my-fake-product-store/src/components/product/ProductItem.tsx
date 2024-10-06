import React from 'react';
import { Product } from '../../interfaces';
import CartButton from '../cart/CartButton';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-80" />
      <div className="p-4">
        <h2 className="text-xl font-bold line-clamp-1">{product.title}</h2>
        {/* <p className="text-zinc-300 mt-2 line-clamp-2 text-zinc-500">{product.description}</p> */}
        <p className="mt-2 capitalize">Category: {product.category}</p>
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
      <CartButton productId={product.id} />
    </div>
  );
};

export default ProductItem;
