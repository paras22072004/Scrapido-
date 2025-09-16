import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul> {/* Sidebar Navigation */}
          <li><Link to="#">Users</Link></li>
          <li><Link to="#">Kabadiwalas</Link></li>
          <li><Link to="#">Artisans</Link></li>
          <li><Link to="#">Scrap Data</Link></li>
          <li><Link to="#">Transactions</Link></li>
          <li><Link to="#">Reports</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Admin Dashboard</h1>
        
        <StatCard title="Manage Users">
          <p>View, verify, or suspend user accounts.</p>
        </StatCard>
        
        <StatCard title="Manage Kabadiwalas">
          <p>Onboard new collectors and view activity logs.</p>
        </StatCard>
        
        <StatCard title="Manage Artisans">
          <p>Approve new product listings and manage artisan profiles.</p>
        </StatCard>
        
        <StatCard title="Scrap Data & AI Model">
          <p>Use new images to train the AI estimation model.</p>
        </StatCard>

         <StatCard title="Impact Reports">
          <p>Generate reports on scrap collected, CO2 saved, and artisan earnings.</p>
        </StatCard>
      </main>
    </div>
  );
};

export default AdminDashboard;