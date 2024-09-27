import React from 'react';
import { Product } from '@/interfaces';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="bg-zinc-600 rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-zinc-200 line-clamp-1">{product.title}</h2>
        <p className="text-zinc-300 mt-2 line-clamp-3">{product.description}</p>
        <p className="mt-2">Category: {product.category}</p>
        <p className="mt-2 text-lg font-semibold text-zinc-950">
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
  );
};

export default ProductItem;
