import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner" aria-hidden="true"></div>
      <p className="loading-text">Loading jokes...</p>
    </div>
  );
};

export default LoadingSpinner;
