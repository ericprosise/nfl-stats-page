import React from 'react';
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

    </div>
  );
}

export default App;
