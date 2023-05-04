import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FontResizer from './components/FontResizer';
import { Card } from './components/Card';

function App() {
  const [showCard, setshowCard] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <FontResizer id='font-resizer' />
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='wel-css'>Welcome</h1>
        <h1>Why is this awesome?</h1>
        <h3> There are many reasons. Here are two:</h3>
        <p>
          There is a such thing as a comfortable line length for reading text on
          screens. I don’t want to kick a hornet’s nest, but let’s say its
          around 80 characters. These units allow you to get it feeling perfect
          and then have that experience scale to any size screen. They allow you
          to tightly couple the size relationship of, say, a typographic header
          and the content it goes with. Like your classic Trent Walton style
          blog post.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>{' '}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button type='button' onClick={() => setshowCard(true)}>
          Show Card
        </button>
        {showCard && <Card />}
      </header>
    </div>
  );
}

export default App;
