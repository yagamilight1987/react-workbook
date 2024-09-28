import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-2">
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
