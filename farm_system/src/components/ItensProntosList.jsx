import React, { useState } from 'react';
import ItensProntosCard from './ItensProntosCard';

const ItensProntosList = ({ items }) => {
  const [idAtiva, setIdAtiva] = useState(null);

  const handleSelecionar = (id) => {
    setIdAtiva(id);
  };

  return (
    <div>
      {items.map((item) => (
        <ItensProntosCard 
          key={item.id} 
          {...item} 
          isAtivo={idAtiva === item.id}
          onSelecionar={() => handleSelecionar(item.id)}
        />
      ))}
    </div>
  );
};

export default ItensProntosList;
