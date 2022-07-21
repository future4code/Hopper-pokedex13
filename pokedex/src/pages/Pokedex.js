import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokedexContext } from "../context/PokedexContext";
import Pokebola from '../img/pokeball.png'
import { PokemonsContext } from "../context/PokemonsContext";



const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
justify-content:space-between;
align-items:center;

`
const H2 = styled.h2`
display:flex;
font-family: 'Pokemon Solid', sans-serif;
font-size:40px;
letter-spacing:3px;
-webkit-text-stroke: 1.5px #2e3fbd;
color: #FFFF00;
line-height:40px;


img{
    width:50px;
}

@media (max-width:800px) {
    display:flex;
    justify-content:center;
    width:100%;

    img{
    width:40px;
    height:40px;
    
        
    }
}

`
const Pokeball = styled.div`

background: linear-gradient(56deg, rgba(255,235,0,0.6895133053221288) 0%, rgba(71,58,224,0.7847514005602241) 21%, rgba(71,58,224,0.7175245098039216) 74%, rgba(255,235,0,0.6418942577030813) 94%);
`
const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
width:100%;
height:100vh;

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
height:320px;
margin:20px 20px;
h3 {
        text-transform: uppercase;
        text-align: center;
    }
    img {
        width:200px;
        object-fit: cover;
    }
`
const ButtonHeader = styled.button`
height:40px;
width:80px;
border-radius:5px;
margin:30px 20px;
border:0.5px solid #e0aa34;
background:none;

&:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(46,63,189,0.2);
    background-color:rgba(46,63,189,0.2);
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

function Pokedex() {
   
    const [pokedex, setPokedex] = useContext(PokedexContext);
    const [pokemons, setPokemons] = useContext(PokemonsContext);
    const navigate = useNavigate();
     

    const removePokemonPokedex = (pokemonEscolhido) => {
       console.log("removerPokemon")
       setPokedex(pokedex.filter(pokemon => pokemonEscolhido.name !== pokemon.name))
       setPokemons([pokemonEscolhido,...pokemons])
       console.log(pokemons)
      
          
       }

    const listPokemons = pokedex && pokedex.map((pokemon) => {
        return (
            <Pokemons key={pokemon.id}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                <h3>{pokemon.name}</h3>
                <BoxesButton>
                    <ButtonBoxes onClick={() =>{removePokemonPokedex(pokemon)}}>Remover</ButtonBoxes>
                    <ButtonBoxes onClick={() => { navigate(`/${pokemon.name}`) }}>Detalhes</ButtonBoxes>
                </BoxesButton>
            </Pokemons>
        )     
    })

   

    return (
        < Pokeball>
            <Header>
                <H2>
                    P<img src={Pokebola}/>kedex
                </H2>

                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
            </Header>
            <Card>
                {listPokemons}
               
            </Card>
        </ Pokeball>



    )

}
export default Pokedex