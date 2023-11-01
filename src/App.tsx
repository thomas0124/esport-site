// src/App.tsx

import React from 'react';
import TournamentInfo from './components/TournamentInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TournamentInfo />
      </header>
    </div>
  );
}

export default App;
