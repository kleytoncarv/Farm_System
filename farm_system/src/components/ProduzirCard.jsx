import React, { useState } from 'react';
import './ProduzirCard.css';
import './Produzir.css';


const ProduzirCard = ({ nome, peso, imagem, onClick, isActive }) => {
  
 
  return (
    <div className={`produzir-container ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className={`produzir-card ${isActive ? 'active' : ''}`}>
        <p className="produzir-name">{nome}</p>
        
        <img 
          src={imagem} 
          alt={nome}
          className={`produzir-image`} />
        
        
        <p className="produzir-weight">{peso}kg</p>

      </div>
     
    </div>
  );
};


export default ProduzirCard;