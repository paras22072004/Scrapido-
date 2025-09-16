// src/pages/Leaderboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Leaderboard.css';
import Navbar from '../components/Navbar'; // Assuming you want Navbar on this page


// Mock data for the leaderboard
const leaderboardData = [
  { rank: 1, name: 'Riya Sharma', points: 15200, tier: 'Planet Savior' },
  { rank: 2, name: 'Amit Singh', points: 14150, tier: 'Planet Savior' },
  { rank: 3, name: 'You', points: 12800, tier: 'Recycle Hero' }, // Highlight the current user
  { rank: 4, name: 'Sunita Verma', points: 11900, tier: 'Recycle Hero' },
  { rank: 5, name: 'Karan Gupta', points: 9850, tier: 'Eco-Warrior' },
  { rank: 6, name: 'Priya Mehta', points: 7500, tier: 'Eco-Warrior' },
];

const Leaderboard = () => {
  return (
    <>
      <Navbar />
      <div className="leaderboard-containeruser">
        <div className="leaderboard-headeruser">
          <h1>🏆 Eco-Warriors Leaderboard 🏆</h1>
          <p>See how you rank against other top recyclers!</p>
        </div>
        <div className="leaderboard-listuser">
          {leaderboardData.map((user) => (
            <div key={user.rank} className={`leaderboard-row ${user.name === 'You' ? 'current-user' : ''}`}>
              <div className="rankuser">{user.rank}</div>
              <div className="nameuser">{user.name}</div>
              <div className="tieruser">{user.tier}</div>
              <div className="pointsuser">{user.points.toLocaleString()} EcoPoints</div>
            </div>
          ))}
        </div>
        <Link to="/user" className="btn btn-primary" style={{marginTop: '30px'}}>Back to Dashboard</Link>
      </div>
    </>
  );
};

export default Leaderboard;