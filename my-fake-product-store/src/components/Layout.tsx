import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import { AppState } from '@/interfaces';

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
    <div className=" bg-primary text-white">
      <Header />
      <div className="container mx-auto min-h-screen pt-16">
        {loading ? 'Loading' : <Outlet />}
      </div>
    </div>
  );
};

export default Layout;
