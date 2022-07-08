import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokedexContext } from "../context/PokedexContext";



const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
padding-left:20px;
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(212,99,66,1) 17%, rgba(255,25,0,0.9360119047619048) 78%);
height:100px;
`
const H2 = styled.h2`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
font-size:30px;
margin-left:550px;
align-items:center;
justify-content:center;
-webkit-text-stroke: 0.5px #1E90FF;
color: #FFFF00;
`
const Card = styled.main`
display:flex;
width:100%;
height:100vh;
background-color:#fff5ee;
`
const Pokemons = styled.div`
display:grid;
background-color:#d3d3d3;
border:2px solid;
border-color:black;
height:300px;
width:200px;
margin:20px 20px;
    img {
        width:200px;
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
margin-top:50px;
display:flex;
align-items:center;
`

function Pokedex() {
   
    const [pokedex, setPokedex] = useContext(PokedexContext);
    const navigate = useNavigate();
     

    const removerPokemonPokedex = (pokemonEscolhido) => {
       console.log("removerPokemon")
       setPokedex(pokedex.filter(pokemon => pokemonEscolhido.name !== pokemon.name))
      
       }

    const listPokemons = pokedex.map((pokemon) => {
        return (
            <Pokemons key={pokemon.id}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                <h3>{pokemon.name}</h3>
                <BoxesButton>
                    <ButtonBoxes onClick={() =>{removerPokemonPokedex(pokemon)}}>Remover</ButtonBoxes>
                    <ButtonBoxes onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBoxes>
                </BoxesButton>
            </Pokemons>
        )     
    })

   

    return (
        <div>
            <Header>
                <H2>
                    Pokedex
                </H2>

                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
            </Header>
            <Card>
                {listPokemons}
               
            </Card>
        </div>



    )

}
export default Pokedex