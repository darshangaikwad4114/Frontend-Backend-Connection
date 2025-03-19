import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container" role="alert">
      <p className="error-message">{message}</p>
      <button 
        className="retry-button"
        onClick={() => window.location.reload()}
        aria-label="Retry loading jokes"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
