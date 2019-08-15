import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Stats from './components/Stats';
import { default as player } from './statOutput';

function App() {
  console.log('player', player);
  return (
    <div className="App">
      <Header
        playerInformation={player.playerInformation}
      />
      <Stats
        stats={player.passingStats}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
