import React from 'react';
import './BlockCard.css'
import './ItensProntos.css'

const BlockCard = ({ imagem }) => {
  return (
    <div className="card-container">
      <div className="item-card">
    
        <img 
          src={imagem} 
          className="item-image2" />
        

      </div>
      <div className="card-buttons">
        <button className="rout-button">Bloqueado</button>
        
      </div>
    </div>
  );
};

export default BlockCard;