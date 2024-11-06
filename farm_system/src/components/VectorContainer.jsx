import React from 'react';
import Vector from '../assets/Vector.png'; // Ajuste o caminho da imagem conforme necessário
import './VectorContainer.css'; // CSS para o contêiner

const VectorContainer = () => {
  const handleReload = () => {
    window.location.reload
  }

  return (
    <div className="vector-container" onClick={handleReload} style={{ cursor: 'pointer'}}>
      <img
        src={Vector}
        alt="Vector Icon"
        style={{
          width: '15px',
          height: '14px',
          margin: '0', // Margem interna se necessário
        }}
      />
    </div>
  );
};

export default VectorContainer;
