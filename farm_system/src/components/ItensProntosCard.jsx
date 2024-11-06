import React, { useState } from 'react';
import './ItensProntosCard.css';
import './ItensProntos.css';
import './ItensProntosList'

const ItensProntosCard = ({ nome, peso, imagem, quantidade, isSpecific, isActive, onSelecionar }) => {

  return (
    <div className="card-container">
      <div className="item-card">
        <p className="item-name">{nome}</p>
        
        <img 
          src={imagem} 
          alt={nome}
          className={`item-image ${isSpecific ? 'specific-image' : ''}`} />
        
        <p className="quantidade">{quantidade}x</p>
        <p className="item-weight">{peso}kg</p>

      </div>
      <div className="card-buttons">
        <button className={`rot-button ${isActive ? 'active' : ''}`}
        onClick={onSelecionar}>Retirar</button>
        
      </div>
    </div>
  );
};


export default ItensProntosCard;