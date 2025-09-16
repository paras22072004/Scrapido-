// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './dash.css';
import { FaHome, FaRecycle, FaTrophy, FaHistory, FaStore, FaSignOutAlt } from 'react-icons/fa';

const navItems = [
  { path: "/dashboard/user/overview", icon: <FaHome />, text: "Dashboard" },
  { path: "/dashboard/user", icon: <FaRecycle />, text: "Sell Scrap" },
  { path: "/leaderboard", icon: <FaTrophy />, text: "Leaderboard" },
  { path: "#", icon: <FaHistory />, text: "Transactions" },
  { path: "/marketplace", icon: <FaStore />, text: "Eco Bazaar" },
  { path: "/", icon: <FaSignOutAlt />, text: "Logout" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar-new">
      <div className="sidebar-logo">S2V</div>
      <ul className="sidebar-nav">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink to={item.path} className="nav-link" title={item.text}>
              {item.icon}
              <span className="link-text">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;