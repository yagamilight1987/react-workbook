import React from 'react';
import NavbarMenuItems from './NavbarMenuItems';

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none md:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">My Fake Product Store</div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <NavbarMenuItems />
        </ul>
      </div>
    </div>
  );
};

export default Header;
