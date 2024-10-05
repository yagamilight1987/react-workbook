import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Auth from './auth/Auth';
import { LoginPage, ProductPage, CartPage, NoMatchPage } from '../pages';

const App: React.FC = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
