import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className=" bg-primary text-white">
      <Header />
      <div className="container mx-auto min-h-screen pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
