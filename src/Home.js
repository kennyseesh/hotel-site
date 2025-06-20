import React from 'react';

import './App.css';
import Navbar from './Navbar';
import titlebackground from './assets/Devtaimg.jpg';

function Home() {
  return (
    <div className="App">
      <Navbar />

      <header className="hero-banner">
        <div className="overlay">
          <div className="hero-content">
            <h1>HOTEL VIKRAM PALACE & KHUSHI RESTAURANT</h1>
            <p>Yamunotri Road, Kharadi near Govt hospital Distt. Uttarkashi 249141</p>
          </div>
        </div>
        {/* Removed the side-arrow button */}
      </header>
    </div>
  );
}

export default Home;
