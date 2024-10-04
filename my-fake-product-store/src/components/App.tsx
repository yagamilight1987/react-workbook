import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import NoMatch from '../pages/NoMatchPage';
import Auth from './auth/Auth';

const App: React.FC = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
