import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbarnav">
      <Link to="/" className="logovnav">
        Scrapido
      </Link>

      {/* Waste floating animation */}
      <div className="logo-animationanv">
        <span>🗑️</span>
        <span>♻️</span>
        <span>🥤</span>
        <span>📄</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-iconhomenav" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar1 change" : "bar1"}></div>
        <div className={menuOpen ? "bar2 change" : "bar2"}></div>
        <div className={menuOpen ? "bar3 change" : "bar3"}></div>
      </div>

      {/* Navigation Links */}
      <div className={menuOpen ? "nav-links active" : "nav-linksnav"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="ScrapRate" onClick={() => setMenuOpen(false)}>
          ScrapRate
        </Link>
        <Link to="/marketplace" onClick={() => setMenuOpen(false)}>
          Eco Bazzar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
