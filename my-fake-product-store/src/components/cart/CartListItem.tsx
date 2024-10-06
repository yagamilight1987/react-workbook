import React from 'react';
import { CartListItemType } from '../../interfaces';

interface CartListItemProps {
  product: CartListItemType;
}

const CartListItem: React.FC<CartListItemProps> = ({
  product,
}: CartListItemProps) => {
  return (
    <div className="bg-primary shadow-md rounded-lg min-h-72 flex">
      <img src={product.image} alt={product.title} className="w-56 rounded" />

      <div className="flex-grow p-4">
        <div className='flex justify-between gap-4'>
          <h2 className="text-xl font-bold">{product.title}</h2>

          <p className="text-lg font-semibold">
            ${product.price.toFixed(2)}
          </p>
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

        <div className="flex items-center mt-4">
          <input
            type="number"
            defaultValue={product.quantity}
            className="w-16 border border-secondary rounded text-center bg-secondary"
          />
          <button className="text-red-600 hover:text-red-800 ml-4">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
