import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
padding-left:20px;
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(229,241,21,1) 6%, rgba(0,5,255,1) 78%);
height:100px;
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
margin-top:145px;
display:flex;
align-items:center;




`



function Pokedex() {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <h2>
                    Aqui é a pokedex
                </h2>

                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
            </Header>
            <Card>
                <Pokemons>
                <h2>Imagem pokemon</h2>
                    <BoxesButton>
                        
                        <ButtonBoxes>Remover</ButtonBoxes>
                        <ButtonBoxes onClick={() => { navigate('/details') }}>Detalhes</ButtonBoxes>
                    </BoxesButton>
                </Pokemons>
            </Card>
        </div>



    )

}
export default Pokedex