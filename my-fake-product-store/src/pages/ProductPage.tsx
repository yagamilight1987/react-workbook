import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import ActiveFilters from '../components/ActiveFilters';

const ProductPage: React.FC = () => {
  return (
    <div className="flex">
      <aside className="p-4 w-64 bg-secondary h-full fixed">
        <Sidebar />
      </aside>

      <div className="flex-1 p-4 pl-72">
        <div className="py-4">
          <ActiveFilters />
        </div>
        <div className="flex flex-wrap">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
