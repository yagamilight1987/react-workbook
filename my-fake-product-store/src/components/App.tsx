import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/LoginPage';
import NoMatch from '../pages/NoMatchPage';

const App: React.FC = (): ReactNode => {
  return (
    <div className=" bg-primary">
      <div className="container mx-auto min-h-screen text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
