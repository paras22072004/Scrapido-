// src/pages/SellScrap.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRecycle,
  FaLaptop,
  FaQuestionCircle,
  FaArrowLeft,
  FaTrophy,
  FaWallet,
  FaStore,
  FaSignOutAlt,
  FaLightbulb
} from 'react-icons/fa';
import { MdKitchen, MdBlender } from 'react-icons/md';
import { scrapCategories } from '../data/scrapdata';
import StatCard from '../components/StatCard'; // Ensure this file exists
import './SellScrap.css';

// --- Stepper Component ---
const ProcessStepper = () => {
  const steps = [
    "Choose your Scrap Category",
    "Enter Details & Upload Image",
    "AI Estimates Value",
    "Submit Pickup Request",
    "ScrapBuddy Picks it Up 🚛♻️"
  ];
  return (
    <div className="process-stepperhome">
      <h2>Kaise Kaam Karta Hai?</h2>
      <div className="stepper-containerhome">
        {steps.map((step, index) => (
          <div key={index} className="stephome">
            <div className="step-numberhome">{index + 1}</div>
            <div className="step-texthome">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- AI Helper Panel ---
const AiHelperPanel = () => {
  const tips = [
    "Upload a clear photo 📸 so the AI can provide an accurate estimate.",
    "Enter the exact weight or quantity ⚖️ for better evaluation.",
    "Describe the condition honestly 🛠️ to ensure fair pricing.",
    "After receiving the AI estimate, submit your pickup request 🚚."
  ];
  return (
    <aside className="ai-helper-panelhome">
      <h3><FaLightbulb /> AI Helper</h3>
      <ul>
        {tips.map((tip, i) => <li key={i}>{tip}</li>)}
      </ul>
    </aside>
  );
};

// --- Scrap Details Form ---
const ScrapDetailsForm = ({ category, onBack }) => {
  const [subCategory, setSubCategory] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [aiOutput, setAiOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const subCategoryOptions = category ? (scrapCategories[category.name] || []) : [];

  // --- AI Analysis ---
  const handleAiAnalysis = async () => {
    if (!subCategory || !weight || !image) {
      alert("Please select an item, enter weight, and upload an image.");
      return;
    }
    setIsLoading(true);
    setAiOutput(null);

    const selectedItem = subCategoryOptions.find(item => item.name === subCategory);

    const formData = new FormData();
    formData.append('scrapImage', image);
    formData.append('subCategory', selectedItem.name);
    formData.append('basePrice', selectedItem.price);
    formData.append('unit', selectedItem.unit);
    formData.append('weight', weight);
    formData.append('description', description);

    try {
      const res = await fetch("https://scrapido-demo-server.onrender.com/api/scrap/analyze", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setAiOutput(data);
    } catch (error) {
      setAiOutput({ error: "⚠️ Error connecting to backend." });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Pickup Request ---
  const handlePickupRequest = async (e) => {
    e.preventDefault();
    if (!aiOutput) {
      alert("Please analyze the item with AI before requesting pickup.");
      return;
    }

    try {
      const res = await fetch("https://scrapido-demo-server.onrender.com/api/scrap/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: category.name,
          subCategory,
          weight,
          description,
          estimatedPrice: aiOutput.finalPrice,
          reasoning: aiOutput.reasoning,
        }),
      });
      if (!res.ok) throw new Error("Pickup request failed");
      alert("✅ Pickup request submitted successfully!");
      onBack();
    } catch (error) {
      alert("⚠️ Error submitting pickup request.");
    }
  };

  return (
    <div className="scrap-form-with-helperhome">
      <div className="scrap-formhome">
        <button onClick={onBack} className="back-buttonhome"><FaArrowLeft /> Back</button>
        <h3>Details for: <strong>{category.name}</strong></h3>
        <form>
          <label>1. Select the specific item:</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="" disabled>-- Select Item --</option>
            {subCategoryOptions.map(item =>
              <option key={item.name} value={item.name}>{item.name}</option>
            )}
          </select>

          <label>2. Enter weight (kg) or quantity (pieces):</label>
          <input
            type="number"
            placeholder="e.g., 5"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <label>3. Describe its condition:</label>
          <textarea
            placeholder="e.g., 'Slightly rusted but working'"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>4. Upload an image for verification:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAiAnalysis}
            disabled={isLoading}
          >
            {isLoading ? '🤖 Analyzing...' : 'Get AI Estimated Value'}
          </button>

          {aiOutput && !aiOutput.error && (
            <div className="ai-output-containerhome">
              <h4>AI Analysis Result:</h4>
              <p><strong>Estimated Price:</strong> {aiOutput.finalPrice}</p>
              <p><strong>Reasoning:</strong> {aiOutput.reasoning}</p>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handlePickupRequest}
              >
                Request Pickup
              </button>
            </div>
          )}
          {aiOutput && aiOutput.error && (
            <div className="ai-output-container errorhome">{aiOutput.error}</div>
          )}
        </form>
      </div>

      {/* AI Helper Side Panel */}
      <AiHelperPanel />
    </div>
  );
};

// --- Category Selector ---
const CategorySelector = ({ onSelectCategory }) => {
  const categories = [
    { name: 'Normal Recyclables', icon: <FaRecycle /> },
    { name: 'Large Appliances', icon: <MdKitchen /> },
    { name: 'Small Appliances', icon: <MdBlender /> },
    { name: 'Mobiles & Computers', icon: <FaLaptop /> },
    { name: 'Others', icon: <FaQuestionCircle /> }
  ];
  return (
    <div>
      <h2>What type of scrap are you selling?</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card-sell"
            onClick={() => onSelectCategory(cat)}
          >
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
const SellScrap = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="dashboard-containersellhome">
      {/* Small Sidebar */}
      <aside className="sidebar smalldashsellhome">
        <ul>
          <li><Link to="/dashboard/user/overview" data-tooltip="Dashboard"><FaRecycle /></Link></li>
          <li><Link to="/leaderboard" data-tooltip="Leaderboard"><FaTrophy /></Link></li>
          <li><Link to="#" data-tooltip="My Transactions"><FaWallet /></Link></li>
          <li><Link to="/marketplace" data-tooltip="Marketplace"><FaStore /></Link></li>
          <li><Link to="/" data-tooltip="Logout"><FaSignOutAlt /></Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-contentsellhome">
        <h1>Sell Your Scrap</h1>

        {/* Process Stepper */}
        <ProcessStepper />

        <StatCard>
          {selectedCategory ? (
            <ScrapDetailsForm
              category={selectedCategory}
              onBack={() => setSelectedCategory(null)}
            />
          ) : (
            <CategorySelector onSelectCategory={setSelectedCategory} />
          )}
        </StatCard>
      </main>
    </div>
  );
};

export default SellScrap;
