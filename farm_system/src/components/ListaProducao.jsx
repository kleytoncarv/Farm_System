import React from 'react';
import './ListaProducao.css';

const ListaProducao = ({ itemsInProduction }) => {
  return (
    <div className="production-list">
      <h2 className="production-title">Itens em produção</h2>
      <div className="production-items">
        {itemsInProduction.map((item, index) => (
          <div key={index} className="production-item">
            <span className="item-info">{item.quantity}x {item.name} - {item.progress}%</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${item.progress}%`,
                  backgroundColor: `rgba(242, 11, 83, ${item.progress / 100})`, // muda a cor com a progressão
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProducao;
