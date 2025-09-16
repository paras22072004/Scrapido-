import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import './UserDashboard.css';
import { 
  FaRecycle, 
  FaTrophy, 
  FaWallet, 
  FaGift, 
  FaStore, 
  FaSignOutAlt 
} from 'react-icons/fa';

import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, Legend 
} from 'recharts';

const UserDashboard = () => {

  const stats = [
    { title: 'Total Scrap Sold', value: '15 kg', change: '+12%' },
    { title: 'Rewards Earned', value: '350 EcoCoins', change: '+8%' },
    { title: 'Your Rank', value: '#3', change: '' },
    { title: 'Current Tier', value: 'Recycle Hero', change: '' },
  ];

  const monthlyData = [
    { month: 'Jan', points: 50 },
    { month: 'Feb', points: 80 },
    { month: 'Mar', points: 65 },
    { month: 'Apr', points: 90 },
    { month: 'May', points: 75 },
  ];

  

  const categoryData = [
    { name: 'Plastic', value: 40 },
    { name: 'Metal', value: 25 },
    { name: 'Electronics', value: 20 },
    { name: 'Paper', value: 15 },
  ];

  const rewardsData = [
    { month: 'Jan', rewards: 50 },
    { month: 'Feb', rewards: 70 },
    { month: 'Mar', rewards: 60 },
    { month: 'Apr', rewards: 90 },
    { month: 'May', rewards: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard-containeruserdash">
      {/* Small Sidebar */}
      <aside className="sidebaruser smalldash">
        <ul>
          <li><Link to="/user" data-tooltip="Sell Scrap"><FaRecycle /></Link></li>
          <li><Link to="/leaderboard" data-tooltip="Leaderboard"><FaTrophy /></Link></li>
          <li><Link to="#" data-tooltip="Transactions"><FaWallet /></Link></li>
          <li><Link to="#" data-tooltip="Rewards"><FaGift /></Link></li>
          <li><Link to="/marketplace" data-tooltip="Eco Bazaar"><FaStore /></Link></li>
          <li><Link to="/" data-tooltip="Logout"><FaSignOutAlt /></Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-contentuserdash">
        <h1>User Dashboard</h1>

        {/* Stats Row */}
        <div className="stats-rowuserdash">
          {stats.map((stat, index) => (
            <div key={index} className="stat-carduserdash">
              <h3>{stat.title}</h3>
              <p className="stat-valuedash">{stat.value}</p>
              {stat.change && (
                <p className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                  {stat.change}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Quick Summary Card */}
        <StatCard title="Quick Summarydash">
          <p>Total Scrap Sold: <strong>15 kg</strong> | Rewards Earned: <strong>350 EcoCoins</strong></p>
        </StatCard>

        {/* Charts Row */}
        <div className="charts-rowuserdash">
          {/* Bar Chart */}
          <StatCard title="Monthly EcoPoints">
            <BarChart width={350} height={200} data={monthlyData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#4CAF50" />
            </BarChart>
          </StatCard>

         

          {/* Pie Chart */}
          <StatCard title="Scrap Category Distribution">
            <PieChart width={350} height={200}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </StatCard>

          {/* Area Chart */}
          <StatCard title="Monthly Rewards">
            <AreaChart width={350} height={200} data={rewardsData}>
              <defs>
                <linearGradient id="colorRewards" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Area type="monotone" dataKey="rewards" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRewards)" />
            </AreaChart>
          </StatCard>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
