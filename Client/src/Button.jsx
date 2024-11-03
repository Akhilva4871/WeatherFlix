// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Import the CSS file

function Button({ onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      Get Weather and Movies
    </button>
  );
}

export default Button;
