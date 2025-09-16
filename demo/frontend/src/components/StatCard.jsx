import React from 'react';
import './statCard.css'; 

const StatCard = ({ title, children }) => {
  return (
    <div className="stat-card">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};


export default StatCard;