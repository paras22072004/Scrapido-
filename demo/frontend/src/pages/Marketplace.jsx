import React from 'react';
import Navbar from '../components/Navbar';
import './Marketplace.css'; // Create this new CSS file

const ProductCard = ({ name, artisan, price, scrapType, imageUrl }) => (
  <div className="product-cardeco">
    <div className="eco-badgeeco">Eco-friendly</div>
    <img src={imageUrl} alt={name} />
    <h4>{name}</h4>
    <p><strong>Artisan:</strong> {artisan}</p>
    <p><strong>Price:</strong> ₹{price}</p>
    <p className="scrap-tageco">Made from {scrapType}</p>
    <button className="btn btn-primaryeco">Add to Cart</button>
  </div>
);


const Marketplace = () => {
  const products = [
    { name: 'Handmade Tote Bag', artisan: 'Sunita Devi', price: 499, scrapType: 'Scrap Fabric', imageUrl: 'https://vrittidesigns.com/wp-content/uploads/2018/04/nettle-cotton-bag-2...jpg' },
    { name: 'Wooden Wall Decor', artisan: 'Ramesh Singh', price: 799, scrapType: 'Scrap Wood', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDxIcLGE852LAbMHnOgH_LjHfyW_jnMKvzw&s' },
    { name: 'Tyre Seating Stool', artisan: 'Anita Creations', price: 999, scrapType: 'Old Tyres', imageUrl: 'https://m.media-amazon.com/images/I/61rINKE1NWL._UF894,1000_QL80_.jpg' }
  ];

  return (
    <>
      <Navbar />
      <div className="containereco">
        <h1>Upcycled Eco Bazaar</h1>
        <div className="stat-cardeco"> {/* Search and Filter */}
            <input type="search" placeholder="Search for products..." style={{ width: '100%', boxSizing: 'border-box' }}/>
        </div>
        <div className="product-grideco"> {/* Product Grid */}
          {products.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </div>
    </>
  );
};

export default Marketplace;