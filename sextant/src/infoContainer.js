// InfoContainer.js

import React from 'react';
import './App.css'; // Im

const InfoContainer = ({ children }) => {
  return (
    <div className="info-container">
      {children}
    </div>
  );
};

export default InfoContainer;
