// src/pages/ScrapRate.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ScrapRate.css';

// --- Import the icons we need ---
import { FaRecycle, FaLaptop, FaCar } from 'react-icons/fa';
import { MdKitchen, MdBlender } from 'react-icons/md';

// --- Your new, structured scrap rate data ---
const scrapRatesData = [
  {
    category: 'Normal Recyclables',
    icon: <FaRecycle />,
    items: [
      { name: 'Newspaper', rate: '₹14/kg', note: 'Market Rates Dropped Recently' },
      { name: 'Clothes', rate: '₹8/kg', note: 'Accepted only with other scrap' },
      { name: 'Glass bottles', rate: '₹2/kg', note: 'Accepted only with other scrap' },
      { name: 'Office Paper (A3/A4)', rate: '₹14/kg' },
      { name: 'Copies/Books', rate: '₹12/kg' },
      { name: 'Cardboard', rate: '₹8/kg', note: 'For bulk qty, call +91-8595358613' },
      { name: 'PET Bottles/ Other Plastic', rate: '₹8/kg' },
      { name: 'Iron (Loha)', rate: '₹24/kg', note: 'For bulk qty, call +91-8595358613' },
      { name: 'Steel Utensils', rate: '₹40/kg' },
      { name: 'Aluminium', rate: '₹105/kg' },
      { name: 'Brass', rate: '₹305/kg' },
      { name: 'Copper', rate: '₹425/kg' },
    ],
  },
  {
    category: 'Large Appliances',
    icon: <MdKitchen />,
    items: [
      { name: 'Split AC 1.5 Ton (Copper)', rate: '₹4150/piece' },
      { name: 'Window AC 1.5 Ton (Copper)', rate: '₹4050/piece' },
      { name: 'SPLIT/WINDOW AC 1 Ton (Copper)', rate: '₹3000/piece' },
      { name: 'Front Load Washing Machine', rate: '₹1350/piece' },
      { name: 'Top Load Washing Machine', rate: '₹1000/piece' },
      { name: 'Semi Auto Washing Machine', rate: '₹750/piece' },
      { name: 'Single Door Fridge', rate: '₹1200/piece' },
      { name: 'Double Door Fridge', rate: '₹1350/piece' },
      { name: 'Geyser', rate: '₹20/kg' },
      { name: 'Iron Cooler', rate: '₹24/kg' },
      { name: 'Plastic cooler', rate: '₹15/kg' },
    ],
  },
  {
    category: 'Small Appliances',
    icon: <MdBlender />,
    items: [
      { name: 'Printer/Scanner/Fax', rate: '₹20/kg' },
      { name: 'Metal E-waste', rate: '₹28/kg' },
      { name: 'Plastic E-waste', rate: '₹15/kg' },
      { name: 'CRT TV', rate: '₹200/piece' },
      { name: 'Ceiling Fan', rate: '₹35/Kg' },
      { name: 'Motors (Copper wiring)', rate: '₹35/kg' },
      { name: 'Microwave', rate: '₹350/piece' },
      { name: 'UPS', rate: '₹180/piece' },
      { name: 'Inverter/Stabilizer (Copper)', rate: '₹40/Kg' },
      { name: 'Battery (used with inverters)', rate: '₹81/kg' },
    ],
  },
  {
    category: 'Mobiles & Computers',
    icon: <FaLaptop />,
    items: [
      { name: 'Scrap Laptop', rate: '₹300/piece' },
      { name: 'CRT Monitor', rate: '₹150/piece' },
      { name: 'LCD Monitor', rate: '₹20/Kg' },
      { name: 'Computer CPU', rate: '₹225/piece' },
    ],
  },
    {
    category: 'Others',
    icon: <FaCar />,
    items: [
      { name: 'Bike', rate: '₹2100/Piece' },
      { name: 'Car', rate: '₹20000/piece' },
    ],
  },
];

const ScrapRate = () => {
  return (
    <>
      <Navbar />
      <div className="rate-page-containerrate">
        <div className="rate-headerrate">
          <h1>Today's Live Scrap Rates</h1>
          <p>Rates may vary based on material quality and location.</p>
        </div>
        
        <div className="rate-gridrate">
          {scrapRatesData.map((category, index) => (
            <div key={index} className="rate-category-cardrs">
              <div className="card-headerrs">
                <div className="card-iconrs">{category.icon}</div>
                <h2 className="card-titlers">{category.category}</h2>
              </div>
              <div className="card-bodyrs">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="rate-itemrs">
                    <div className="item-detailsrs">
                      <span className="item-namers">{item.name}</span>
                      {item.note && <span className="item-noters">{item.note}</span>}
                    </div>
                    <span className="item-raters">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link to="/Login/user" className="btn btn-primary" style={{marginTop: '40px'}}>
          Sell Your Scrap Now
        </Link>
      </div>
    </>
  );
};

export default ScrapRate;