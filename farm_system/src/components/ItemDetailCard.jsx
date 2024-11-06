import React, { useState } from 'react';
import './ItemDetailCard.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import CraftIcon from '../assets/CraftIcon.png';

const ItemDetailCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="item-detail-card">
      <h2 className="item-detail-name">{item.name}</h2>

      {item.image && (
        <img src={item.image} alt={item.name} className="item-detail-image" />
      )}

      <ul className="materials-list">
        {item.materials.map((material, index) => (
          <li key={index}>{material}</li>
        ))}
      </ul>
      <div className="quantity-control">
        <button onClick={handleDecrease}><FaMinus /></button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        />
        <button onClick={handleIncrease}><FaPlus /></button>
      </div>
      <button className="produce-button">
        <img src={CraftIcon} alt="Produzir" className="button-icon" />Produzir - 15 seg</button>
    </div>
  );
};

export default ItemDetailCard;
