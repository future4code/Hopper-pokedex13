import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { PokemonsContext }  from "../context/PokemonsContext";
import styled from 'styled-components';

const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
background: linear-gradient(180deg, rgba(229,241,21,1) 6%, rgba(0,5,255,1) 78%);
height:100px;
`
const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
width:100%;
height:100vh;
background-color:#fff5ee;
`
const Pokemons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:#d3d3d3;
border:2px solid;
border-color:black;
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
    const pokemons = useContext(PokemonsContext);

    const listPokemons = pokemons.map((pokemon, index) => {
        return <Pokemons key={index}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                <h3>{pokemon.name}</h3>
                <BoxesButton>
                    <ButtonBoxes>Adicionar a Pokedex</ButtonBoxes>
                    <ButtonBoxes onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBoxes>
                </BoxesButton>    
            </Pokemons>
    })

    return (
        <div>
            <Header>
                <ButtonHeader onClick={() => { navigate('/pokedex') }}>Ir para a Pokedex</ButtonHeader>
                <h2>Lista de Pokemons</h2>
            </Header>
            <Card>
                {listPokemons}
            </Card>
        </div>
    )
}

export default Home