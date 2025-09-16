import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
  const { role } = useParams(); 
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the backend login API
      const res = await axios.post('https://scrapido-demo-server.onrender.com/api/auth/login', { email, password });

      console.log(res.data); // You can check the response from backend
      setMessage(res.data.message || 'Login successful!');

      // Store token if you want
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Redirect to role-based dashboard
      if (role) {
        navigate(`/${role}`);
      } else {
        navigate('/'); 
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Login failed!');
    }
  };

  const roleTitle = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User';

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-branding">
          <h2>Scrapido</h2>
          <p>Welcome back! Please login to your {roleTitle} account.</p>
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            {message && <p className="login-message">{message}</p>}
            <div className="form-actions">
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary login-btn">Login</button>
            <div className="signup-link">
              <p>Don't have an account? <Link to="/SignUpForm">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
