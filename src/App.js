import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>  
    </div>
  );
}

export default App;
