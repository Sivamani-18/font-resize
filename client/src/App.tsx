import React, { useState } from 'react';
import './App.css';
import FontResizer from './components/FontResizer';
import { Card } from './components/Card';
import { Approute } from './routes/Approute';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/ionicons.min.css';

function App() {
  const [showCard, setshowCard] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <FontResizer />
      </header>
      <Approute />
      <button
        className='btn btn-outline-primary btn-lg'
        type='button'
        onClick={() => setshowCard(true)}
      >
        Show Card
      </button>
      {showCard && <Card />}
    </div>
  );
}

export default App;
