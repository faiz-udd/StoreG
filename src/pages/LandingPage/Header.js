// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import '../../styles/LandingPage.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>gStorage</h1>
      </div>
      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <button className="btn-get-started">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
