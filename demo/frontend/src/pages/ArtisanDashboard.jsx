// src/pages/ArtisanDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaRecycle,
  FaUpload,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";
import StatCard from "../components/StatCard";
import "./ArtisanDashboard.css";

const ArtisanDashboard = () => {
  return (
    <div className="dashboard-containerartisan">
      {/* Sidebar */}
     <aside className="sidebarartisan">
  <ul>
    <li>
      <Link to="#" data-tooltip="Dashboard">
        <FaHome />
      </Link>
    </li>
    <li>
      <Link to="#" data-tooltip="Available Scrap">
        <FaRecycle />
      </Link>
    </li>
    <li>
      <Link to="#" data-tooltip="Upload Products">
        <FaUpload />
      </Link>
    </li>
    <li>
      <Link to="#" data-tooltip="My Sales">
        <FaShoppingBag />
      </Link>
    </li>
    <li>
      <Link to="/" data-tooltip="Logout">
        <FaSignOutAlt />
      </Link>
    </li>
  </ul>
</aside>


      {/* Main Content */}
      <main className="main-contentartisan">
        <h1>✨ Artisan Dashboard</h1>

        {/* Available Scrap Table */}
        <StatCard title="Available Scrap Nearby">
          <table className="tableartisan">
            <thead>
              <tr>
                <th>Scrap Type</th>
                <th>Quantity (Approx)</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wood Planks</td>
                <td>15 kg</td>
                <td>Green Park Hub</td>
                <td>
                  <button className="btn-secondaryartisan">Request</button>
                </td>
              </tr>
              <tr>
                <td>Glass Bottles</td>
                <td>25 kg</td>
                <td>Hauz Khas Hub</td>
                <td>
                  <button className="btn-secondaryartisan">Request</button>
                </td>
              </tr>
            </tbody>
          </table>
        </StatCard>

        {/* Upload Product Form */}
        <StatCard title="Upload New Product">
          <form className="formartisan">
            <label>Product Image:</label>
            <input type="file" />

            <label>Product Name:</label>
            <input type="text" placeholder="e.g., Handmade Tote Bag" />

            <label>Price (₹):</label>
            <input type="number" placeholder="Enter Price" />

            <label>Description:</label>
            <textarea placeholder="Product Description"></textarea>

            <label>Scrap Material Used:</label>
            <input type="text" placeholder="e.g., Scrap Fabric, Old Jeans" />

            <label>Category:</label>
            <select>
              <option>Decor</option>
              <option>Furniture</option>
              <option>Bags</option>
              <option>Accessories</option>
            </select>

            <button type="submit" className="btn-primaryartisan">
              Upload Product
            </button>
          </form>
        </StatCard>
      </main>
    </div>
  );
};

export default ArtisanDashboard;
