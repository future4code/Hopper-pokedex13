import { createContext, useState } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({children}) => {
  const [pokedex, setPokedex] = useState([])
  
  return (
    <PokedexContext.Provider value={[pokedex, setPokedex]}>
      {children}
    </PokedexContext.Provider>
  )
}

