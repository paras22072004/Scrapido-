// src/pages/KabadiwalaDashboard.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaMoneyBillWave, FaChartLine, FaSignOutAlt, FaEye, FaCheckCircle, FaRupeeSign, FaWeightHanging, FaStar, FaTimes } from 'react-icons/fa';
import "./KabadiwalaDashboard.css"; // Keep your CSS

const dummyPickups = [
  {
    id: 1024,
    address: "123, Green Park, Delhi",
    type: "Plastic Bottles",
    aiEstimate: [80, 120],
    weight: 5,
    condition: "Good",
    status: "Pending",
    image: "/frontend/public/bottles.jpg",
  },
  {
    id: 1025,
    address: "456, Vasant Kunj, Delhi",
    type: "Old Clothes",
    aiEstimate: [150, 200],
    weight: 10,
    condition: "Mixed",
    status: "Accepted",
    image: "/frontend/public/clothes.jpeg",
  },
  {
    id: 1026,
    address: "789, Connaught Place, Delhi",
    type: "Newspaper",
    aiEstimate: [50, 70],
    weight: 8,
    condition: "Excellent",
    status: "Pending",
    image: "",
  }
];

const statusColors = { Pending: "#f0ad4e", Accepted: "#5cb85c", Completed: "#337ab7" };

// --- Modal Component ---
const Modal = ({ children, onClose }) => (
  <div className="modal-overlay-kd">
    <div className="modal-content-kd">
      <button className="modal-close-btn-kd" onClick={onClose}><FaTimes /></button>
      {children}
    </div>
  </div>
);

// --- Pickup Row ---
const PickupRow = ({ pickup, onAcceptClick, onViewImageClick }) => (
  <tr>
    <td>{pickup.address}</td>
    <td>{pickup.type}</td>
    <td>₹{pickup.aiEstimate[0]} - ₹{pickup.aiEstimate[1]}</td>
    <td>
      <span className="status-pill-kd" style={{ backgroundColor: statusColors[pickup.status] }}>
        {pickup.status}
      </span>
    </td>
    <td className="action-buttons-kd">
      <button className="btn-kd btn-view-kd" onClick={() => onViewImageClick(pickup)}>
        <FaEye /> View
      </button>
      {pickup.status === "Pending" && (
        <button className="btn-kd btn-accept-kd" onClick={() => onAcceptClick(pickup)}>
          <FaCheckCircle /> Accept
        </button>
      )}
    </td>
  </tr>
);

const KabadiwalaDashboard = () => {
  const [pickups, setPickups] = useState([]);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  // Form state
  const [finalWeight, setFinalWeight] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [pickupTime, setPickupTime] = useState("");

  useEffect(() => setPickups(dummyPickups), []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    if (selectedPickup) {
      const avgBase = (selectedPickup.aiEstimate[0] + selectedPickup.aiEstimate[1]) / 2;
      const newEstimate = (avgBase / selectedPickup.weight) * finalWeight;
      setFinalPrice(newEstimate.toFixed(0));
    }
  }, [finalWeight, selectedPickup]);

  const handleViewImageClick = (pickup) => {
    setSelectedPickup(pickup);
    setImageModalOpen(true);
  };

  const handleAcceptClick = (pickup) => {
    setSelectedPickup(pickup);
    setFinalWeight(pickup.weight);
    setAcceptModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPickup(null);
    setImageModalOpen(false);
    setAcceptModalOpen(false);
    setPickupTime("");
  };

  const handleAcceptSubmit = (e) => {
    e.preventDefault();
    const updated = pickups.map(p =>
      p.id === selectedPickup.id ? { ...p, status: "Accepted" } : p
    );
    setPickups(updated);
    setNotification(`Pickup #${selectedPickup.id} has been accepted!`);
    closeModal();
  };

  const totalEarnings = pickups.reduce((sum, p) => sum + (p.aiEstimate[0] + p.aiEstimate[1]) / 2, 0).toFixed(2);

  return (
    <div className="dashboard-containerbuddykd">
      <aside className="sidebarbuddy">
        <ul>
          <li><Link to="#"><FaTruck /></Link></li>
          <li><Link to="#"><FaMoneyBillWave /></Link></li>
          <li><Link to="#"><FaChartLine /></Link></li>
          <li><Link to="/"><FaSignOutAlt /></Link></li>
        </ul>
      </aside>

      <main className="main-contentbuddykd">
        {notification && <div className="notification-banner-kd">{notification}</div>}

        <h1>Scrap Buddy Dashboard</h1>

        {/* Stats */}
        <div className="stats-grid-kd">
          <div className="stat-card-small-kd">
            <FaTruck className="stat-icon-kd" style={{ color: '#3498db' }} />
            <div>
              <h4>Pickups Today</h4>
              <p>{pickups.length}</p>
            </div>
          </div>
          <div className="stat-card-small-kd">
            <FaRupeeSign className="stat-icon-kd" style={{ color: '#2ecc71' }} />
            <div>
              <h4>Est. Earnings</h4>
              <p>₹{totalEarnings}</p>
            </div>
          </div>
          <div className="stat-card-small-kd">
            <FaStar className="stat-icon-kd" style={{ color: '#f1c40f' }} />
            <div>
              <h4>Your Rating</h4>
              <p>4.8 / 5</p>
            </div>
          </div>
        </div>

        <div className="content-layout-kd">
          <div className="main-panel-kd">
            <div className="stat-card-buddykd">
              <h3>Assigned Pickups</h3>
              <div className="table-container-kd">
                <table className="pickup-table-kd">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Scrap Type</th>
                      <th>AI Estimate</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pickups.length > 0 ? (
                      pickups.map(pickup => (
                        <PickupRow
                          key={pickup.id}
                          pickup={pickup}
                          onAcceptClick={handleAcceptClick}
                          onViewImageClick={handleViewImageClick}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="empty-state-kd">No pickups assigned yet.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ✅ Simple Google Maps iframe instead of react-leaflet */}
          <div className="side-panel-kd">
            <div className="stat-card-buddykd">
              <h3>Pickup Locations</h3>
              <div style={{ height: "400px", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                  title="simple-map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.00559336482!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35aef4c3e9%3A0x4a3f4b3a6f3e4b5f!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1633951934659!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {isImageModalOpen && selectedPickup && (
        <Modal onClose={closeModal}>
          <h2>Image for Pickup #{selectedPickup.id}</h2>
          <p>{selectedPickup.address}</p>
          <img src={selectedPickup.image} alt={selectedPickup.type} className="modal-image-kd" />
        </Modal>
      )}

      {isAcceptModalOpen && selectedPickup && (
        <Modal onClose={closeModal}>
          <h2>Accept Pickup #{selectedPickup.id}</h2>
          <p>{selectedPickup.address} - ({selectedPickup.type})</p>
          <form className="pickup-update-formkd" onSubmit={handleAcceptSubmit}>
            <div className="form-group-kd">
              <label><FaWeightHanging /> Update Weight (kg)</label>
              <input type="number" step="0.1" value={finalWeight} onChange={(e) => setFinalWeight(e.target.value)} required />
            </div>
            <div className="form-group-kd">
              <label>Pickup Time</label>
              <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
            </div>
            <div className="form-group-kd">
              <label><FaRupeeSign /> Final Price Estimate</label>
              <input type="number" value={finalPrice} readOnly className="readonly-input-kd" />
            </div>
            <button type="submit" className="btn-kd btn-submit-kd">Confirm & Accept</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default KabadiwalaDashboard;
