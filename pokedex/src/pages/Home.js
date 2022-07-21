import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PokemonsContext } from "../context/PokemonsContext";
import { PokedexContext } from "../context/PokedexContext";
import styled from 'styled-components';
import Pokebola from '../img/pokeball.png'

const Header = styled.header`
display:flex;
align-items:center;
justify-content:space-between;


`
const H2 = styled.h2`
font-family: 'Pokemon Solid', sans-serif;
font-size:30px;
-webkit-text-stroke: 1.5px #2e3fbd;
letter-spacing:3px;
color: #FFFF00;
line-height:40px;



@media (max-width:800px) {
    display:flex;
    justify-content:center;
    width:100%;
}

`
const Pokeball = styled.div`
background: linear-gradient(56deg, rgba(255,235,0,0.6895133053221288) 0%, rgba(71,58,224,0.7847514005602241) 21%, rgba(71,58,224,0.7175245098039216) 74%, rgba(255,235,0,0.6418942577030813) 94%);

@media (max-width:800px) {
  height:100%;
  width:100%;   
}
`
const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
width:100%;
height:100%;


`
const Pokemons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: rgba(255,255,255,0.2);
backdrop-filter: blur(10px);
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.2);
box-shadow: 2px 2px 2px rgba(255,255,255,0.2);
width:200px;
margin:20px 20px;
    h3 {
        text-transform: uppercase;
        text-align: center;
    }
    img {
        object-fit: cover;
    }
`
const ButtonHeader = styled.button`
width:60px;
border:none;
background:transparent;
cursor: pointer;

img{
    
    width:100%;
   
}
&:hover{
    transform: translateY(-3px);
}
 

@media (max-width: 800px){
  position:fixed;
  bottom:5px;
  right:5px;

}

`

const ButtonBoxes = styled.button`
width:100px;
height:50px;
background: rgba(238,237,174,0.2);
backdrop-filter: blur(10px);
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.2);
cursor: pointer; 

&:hover {
    background: rgba(46,63,189,0.2);

}


`
const BoxesButton = styled.div`
display:flex;
align-items:center;
`


function Home() {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useContext(PokemonsContext);
    const [pokedex, setPokedex] = useContext(PokedexContext);

    //adicionando na pokedex

    const adicionarPokemonPokedex = (pokemonEscolhido) => {
        setPokemons(pokemons.filter(pokemon => pokemon.name !== pokemonEscolhido.name)) // passando os parametros e filtrando para chamar na pokedex
        setPokedex([...pokedex, pokemonEscolhido])// chamando na pokedex
    }


    const listPokemons = pokemons && pokemons.map((pokemon) => {
       
        return <Pokemons key={pokemon.id}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>

            <h3>{pokemon.name}</h3>
            <BoxesButton>
                <ButtonBoxes onClick={() => { { adicionarPokemonPokedex(pokemon) } }}>Adicionar a Pokedex</ButtonBoxes>
                <ButtonBoxes onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBoxes>
            </BoxesButton>
        </Pokemons>
    })

    return (
        <Pokeball>
            <Header>
                <ButtonHeader onClick={() => { navigate('/pokedex') }} ><img src={Pokebola} /></ButtonHeader>

                <H2>Lista de Pokemons</H2>
                <div></div>
            </Header>
            <Card>
                {listPokemons}
            </Card>
        </Pokeball>
    )
}

export default Home