import React from 'react';
import { CartListItemType } from '../../interfaces';
import RemoveButton from './RemoveButton';
import QuantitySelector from './QuantitySelector';

interface CartListItemProps {
  product: CartListItemType;
}

const CartListItem: React.FC<CartListItemProps> = ({
  product,
}: CartListItemProps) => {
  return (
    <div className="bg-secondary shadow-md rounded-lg min-h-72 flex">
      <img src={product.image} alt={product.title} className="w-56 rounded" />

      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between gap-4">
            <h2 className="text-xl font-bold">{product.title}</h2>

            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-yellow-500">
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span className="ml-2">({product.rating.rate})</span>
          </div>

          <p className="text-zinc-300 mt-2">{product.description}</p>
          <p className="mt-2 capitalize">Category: {product.category}</p>
        </div>
        <div className="flex items-stretch mt-4">
          <QuantitySelector productId={product.id} />
          <div className="ml-4 w-32">
            <RemoveButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
