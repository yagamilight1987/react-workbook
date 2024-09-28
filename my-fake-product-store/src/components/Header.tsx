import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const getClassNames = (isActive: boolean) => {
    return ['mx-2 pb-2 rounded-sm', isActive ? 'border-b-2' : ''].join(' ');
  };

  return (
    <header className="flex justify-center bg-header h-16 fixed left-0 w-full z-10">
      <div className="container px-2 flex justify-between items-center">
        <div className="text-bold tracking-widest">My Fake Product Store</div>
        <nav>
          <ul className="flex">
            <li className="p-2">
              <NavLink
                to="/"
                className={({ isActive }) => getClassNames(isActive)}
              >
                Products
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                to="/login"
                className={({ isActive }) => getClassNames(isActive)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
