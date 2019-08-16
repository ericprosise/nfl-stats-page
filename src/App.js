import React from 'react';
import './App.css';
import Header from "./components/Header";
import Stats from './components/Stats';
import { default as player } from './statOutput';
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  console.log('player', player);
  return (
    <div className="App">
      <Header
        playerInformation={player.playerInformation}
      />
      <Stats
        passingStats={player.passingStats}
        rushingReceivingStats={player.rushingReceivingStats}
      />

    </div>
  );
}

export default App;
