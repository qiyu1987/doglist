import React from 'react';
import './App.css';
import DogsList from './components/Dogslist';
import DogsListContainer from './components/DogslistContainer';

function App() {
  return (
    <div className="App">
      <main>
        <DogsListContainer />
      </main>
    </div>
  );
}

export default App;
