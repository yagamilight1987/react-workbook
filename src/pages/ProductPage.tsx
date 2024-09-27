import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';

const ProductPage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Products />
    </div>
  );
};

export default ProductPage;
