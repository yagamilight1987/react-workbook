import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage: React.FC = () => {
  return (
    <div className=" bg-primary text-white">
      <div className="w-full min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl">Nothing to see here!</h2>
        <h3 className="mt-4">
          Go to
          <Link to="/" className="bg-primary p-2 hover:bg-secondary">
            Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NoMatchPage;
