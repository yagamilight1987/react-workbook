import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppState } from '../interfaces';
import * as actions from '../actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const naviate = useNavigate();

  const getClassNames = (isActive: boolean) => {
    return ['mx-2 pb-2 rounded-sm', isActive ? 'border-b-2' : ''].join(' ');
  };

  const isUserAuthenticated = useSelector((state: AppState) =>
    Boolean(state.authState.token)
  );

  const fullName = useSelector(
    (state: AppState) =>
      `${state.authState.userInfo?.name?.firstname} ${state.authState.userInfo?.name?.lastname}`
  );

  const cartCount = useSelector((state: AppState) => state.cartState.products?.length);

  const handleLogout = () => {
    dispatch(actions.logoutUser());
    naviate('/');
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
                to="/cart"
                className={({ isActive }) => getClassNames(isActive)}
              >
                Cart (<strong>{cartCount}</strong>)
              </NavLink>
            </li>
            <li className="p-2">
              {isUserAuthenticated ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <NavLink to="/auth/login">Login</NavLink>
              )}
            </li>
            {isUserAuthenticated && fullName && (
              <li className="p-2">
                Hi, <strong className="capitalize">{fullName}</strong>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
