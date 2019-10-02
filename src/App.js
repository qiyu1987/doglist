import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DogsList from './components/Dogslist';
import DogsListContainer from './components/DogslistContainer';
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

function App() {
  return (
    <div className="App">
      <main>
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      <Route exact path="/" component={DogsListContainer} />
      </main>
    </div>
  );
}

export default App;
