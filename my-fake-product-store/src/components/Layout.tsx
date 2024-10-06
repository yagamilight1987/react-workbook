import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import NavbarMenuItems from './NavbarMenuItems';
import * as actions from '../actions';
import { AppState } from '../interfaces';

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const userId = useSelector(
    (state: AppState) => state.authState?.userInfo?.id
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      if (userId) {
        setLoading(true);
        await dispatch(actions.getUserCart(userId));
        setLoading(false);
      }
    };

    fetchItems();
  }, [dispatch, userId]);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Header />
        {/* Page content here */}
        {loading ? (
          'Loading'
        ) : (
          <div className="px-6 py-8">
            <Outlet />
          </div>
        )}
      </div>
      <div className="drawer-side z-[2]">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavbarMenuItems placement="sidebar" />
        </ul>
      </div>
    </div>
  );
};

export default Layout;
