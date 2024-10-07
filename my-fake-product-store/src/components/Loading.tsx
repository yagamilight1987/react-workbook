import * as React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;