import React from 'react';
import './App.css';
import Header from "./components/Header";
import Stats from './components/Stats';
import { default as player } from './statOutput';
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
      <Header
        playerInformation={player.playerInformation}
        careerPassingStats={player.careerPassingStats}
      />
      <Stats
        passingStats={player.passingStats}
        rushingReceivingStats={player.rushingReceivingStats}
        careerPassingStats={player.careerPassingStats}
      />

    </div>
  );
}

export default App;
