import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

const App: React.FC = (): ReactNode => {
  return (
    <div className="w-full bg-zinc-800 text-zinc-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
