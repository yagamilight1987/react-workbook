import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <div className=" bg-primary text-white">
      <div className="w-full min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
