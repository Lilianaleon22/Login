import React from 'react';
import './App.css';
import BarraLateral from './Components/Barralateral.';
import ContenidoPrincipal from './components/Contenidoprincipal.';

function App() {
  return (
    <div className="dashboard">
      <BarraLateral />
      <ContenidoPrincipal />
    </div>
  );
}

export default App;