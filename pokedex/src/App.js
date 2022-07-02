import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonsContext } from "./context/PokemonsContext";
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([])
  useState(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((res) => {
      setPokemons(res.data.results)
    }).catch(() => {

    })
  }, [])
  return (
    <div className="App">
      {pokemons.length&&<PokemonsContext.Provider value={pokemons}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/pokedex'} element={<Pokedex/>}/>
            <Route path={'/:name'} element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </PokemonsContext.Provider>}
    </div>
  );
}

export default App;
