 import React, { useState } from 'react';
import "../Organising_Team/card.css"


const FlippingCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleClick}
      >
        <div className="front p-4 bg-blue-300">
          <h2 className="text-white">Front Side</h2>
        </div>
        <div className="back p-4 bg-green-300">
          <h2 className="text-white">Back Side</h2>
        </div>
      </div>
    </div>
  );
};

 export default FlippingCard;
