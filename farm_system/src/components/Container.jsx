import React, {useState} from 'react';
import './Container.css'; 
import CraftIcon from '../assets/CraftIcon.png';
import VectorContainer from './VectorContainer';
import { Link, useLocation } from 'react-router-dom';


const Container = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="custom-container">
      <p className='system-text'>SYSTEM</p>
      <p className='farm-text'>FARM</p> 
      <div className='farm-container'>
        <img src={CraftIcon} alt="Craft Icon" className="craft-icon" />
      </div>   
      <div className="navbar">

        <Link 
          to="/Coletar" 
          className={`nav-item ${currentPath === '/Coletar' ? 'active' : ''}`}
          >
            Coletar</Link>

        <Link 
        to="/Produzir" 
        className={`nav-item ${currentPath === '/Produzir' ? 'active' : ''}`}
        >
          Produzir</Link>

        <Link to="/ItensProntos"
         className={`nav-item ${currentPath === '/ItensProntos' ? 'active' : ''}`}
         >
          Itens Prontos</Link>

        <Link to="/Upgrades"
         className={`nav-item ${currentPath === '/Upgrades' ? 'active' : ''}`}
         >
          Upgrades</Link>

      </div> 
      
      <VectorContainer />  
    </div>
  );
};

export default Container;
