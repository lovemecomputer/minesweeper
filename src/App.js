import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard'


function App() {
  return (
    <div className="app-wrapper">
      <header>
        <h1>minesweeper</h1>
      </header>
      <GameBoard/>
    </div>
  );
}

export default App;
