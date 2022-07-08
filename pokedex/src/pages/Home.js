import React, { useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { PokemonsContext } from "../context/PokemonsContext";
import { PokedexContext } from "../context/PokedexContext";
import styled from 'styled-components';

const Header = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
background: linear-gradient(180deg, rgba(212,99,66,1) 17%, rgba(255,25,0,0.9360119047619048) 78%);
height:100px;
`
const H2 = styled.h2`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
font-size:30px;
margin-right:550px;
justify-content:center;
-webkit-text-stroke: 0.5px #1E90FF;
color: #FFFF00;

`
const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
width:100%;
height:100%;
background-color:#fff5ee;
`
const Pokemons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:#d3d3d3;
border:2px solid;
border-color:black;
border-radius:5px;
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
height:40px;
margin:30px 20px;
`
const ButtonBoxes = styled.button`
width:100px;
height:50px;
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
                <ButtonBoxes onClick={() => {{adicionarPokemonPokedex(pokemon)}}}>Adicionar a Pokedex</ButtonBoxes>
                <ButtonBoxes onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBoxes>
            </BoxesButton>
        </Pokemons>
    })

    return (
        <div>
            <Header>
                <ButtonHeader onClick={() => { navigate('/pokedex') }}>Ir para a Pokedex</ButtonHeader>
                <H2>Lista de Pokemons</H2>
            </Header>
            <Card>
                {listPokemons}
            </Card>
        </div>
    )
}

export default Home