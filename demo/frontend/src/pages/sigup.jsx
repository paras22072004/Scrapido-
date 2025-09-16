import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './sigup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://scrapido-demo-server.onrender.com/api/auth/signup', formData);
      setMessage(res.data.message);

      if (res.status === 201) {
        // ✅ Redirect to role-based login page
        navigate(`/Login/${formData.role}`);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed!');
    }
  };

  return (
    <div className="form-containersign">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="kabadiwala">Kabadiwala</option>
            <option value="artisan">Artisan</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupForm;
