
// src/components/ItemCard.jsx
import React from 'react';
import './ItemCard.css';
import './Coletar.css';

const ItemCard = ({ nome, peso, imagem, isSpecific }) => {
  return (
    <div className="card-container">
      <div className="item-card">
        <p className="item-name">{nome}</p>
        
        <img 
          src={imagem} 
          alt={nome}
          className={`item-image ${isSpecific ? 'specific-image' : ''}`} />
        
        
        <p className="item-weight">{peso}kg</p>

      </div>
      <div className="card-buttons">
        <button className="route-button">Rotas Norte</button>
        <button className="route-button">Rotas Sul</button>
      </div>
    </div>
  );
};

export default ItemCard;
