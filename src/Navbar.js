// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">📍 About</Link>
        <Link to="/rooms">Must-See Nearby</Link>
        <Link to="/gallery">🖼 Gallery</Link>
        <Link to="/contact">📞 Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
