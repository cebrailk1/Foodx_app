import React from 'react';
import './home.css'; 

function Home() {
  return (
    <div className="container">
      <div className="section">
        <h2 className="section-title">Welcome to FoodX</h2>
        <p>This is the right thinking of Food.</p>
      </div>

      <div className="container">
        <div className="section">
          <h2 className="section-title">Section 2</h2>
          <p>2.</p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <h2 className="section-title">Section 3</h2>
          <p>3
          </p>
        </div>
      </div>
      
      {/* Add more containers and sections as needed */}
    </div>
  );
}

export default Home;
