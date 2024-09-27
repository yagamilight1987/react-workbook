import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const getClassNames = (isActive: boolean) => {
    return [
      'mx-2 pb-2 rounded-sm',
      isActive ? 'text-zinc-200 border-b-2' : '',
    ].join(' ');
  };

  return (
    <header className="flex justify-between items-center bg-zinc-900 px-2 h-12 border-b-2 border-zinc-700 fixed w-full z-10 container">
      <div className="text-bold tracking-widest text-zinc-200">
        My Fake Product Store
      </div>
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
    </header>
  );
};

export default Header;
