import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ScrapRate.css';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const scrapRatesData = [
  { name: 'Tamba (Copper)', value: 430 },
  { name: 'Aluminium', value: 110 },
  { name: 'Loha (Iron)', value: 25 },
  { name: 'Plastic', value: 15 },
  { name: 'Paper', value: 10 },
];

const COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#845EC2'];

const ScrapRate = () => {
  return (
    <>
      <Navbar />
      <div className="rate-containerrate">
        <h1 className="rate-titlerate">Live Scrap Price Trends</h1>
        <p className="rate-subtitlerate">Track the market value of key materials over the last months.</p>

        {/* Side by side container */}
        <div className="rate-flex-containerrate">
          {/* Left: Pie Chart */}
          <div className="chart-boxraterate">
            <ResponsiveContainer width="100%" height={550}>
              <PieChart>
                <Pie
                  data={scrapRatesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={220}
                  fill="#8884d8"
                  label
                >
                  {scrapRatesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => `₹${val}/kg`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Right: Rate List */}
          <div className="rate-list-boxrate">
            <h2 className="rate-subheadingrate">Today's Detailed Rates</h2>
            <div className="rate-gridrate">
              {scrapRatesData.map((item, index) => (
                <div key={index} className="rate-cardrate">
                  <h3>{item.name}</h3>
                  <p>₹{item.value}/kg</p>
                </div>
              ))}
            </div>
            <Link to="/login/user" className="sell-btnrate">
              Sell Your Scrap Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapRate;
