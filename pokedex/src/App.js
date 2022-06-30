import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PokemonsContext} from "./context/PokemonsContext";
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';

function App() {
  const [pokemons, setPokemons] = useState([{name: "buba"}])
  return (
    <div className="App">
      <PokemonsContext.Provider value={pokemons}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/pokedex'} element={<Pokedex/>}/>
            <Route path={'/details'} element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </PokemonsContext.Provider>
    </div>
  );
}

export default App;
