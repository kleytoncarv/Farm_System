// App.js 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Produzir from './components/Produzir';
import ItensProntos from './components/ItensProntos';
import Upgrades from './components/Upgrades';
import Coletar from './components/Coletar';

function App() {
  return (
    <Router>
      <div className="background">
        <div className="overlay" />
        <div className="App">
        <Container />
        
        <Routes>
            <Route path="/" element={<Navigate to="/Coletar" />} />
            <Route path="/Coletar" element={<Coletar />} />
            <Route path="/Produzir" element={<Produzir />} />
            <Route path="/ItensProntos" element={<ItensProntos />} />
            <Route path="/Upgrades" element={<Upgrades />} />
          </Routes>

        </div>
    </div>
    </Router>
  );
}

export default App;