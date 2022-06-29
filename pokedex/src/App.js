import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/pokedex'} element={<Pokedex/>}/>
        <Route path={'/details'} element={<Details/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
