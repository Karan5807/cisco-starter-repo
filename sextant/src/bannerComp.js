// Banner.js
import React from 'react';
import './App.css'; // Import the styles

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
