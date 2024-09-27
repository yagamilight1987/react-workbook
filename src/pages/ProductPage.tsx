import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import ActiveFilters from '../components/ActiveFilters';

const ProductPage: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-4 w-64 border-zinc-600 border-r-2">
        <Sidebar />
      </div>

      <div className="flex-1 p-4">
        <div className="py-4">
          <ActiveFilters />
        </div>
        <div className="flex justify-center flex-wrap">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
