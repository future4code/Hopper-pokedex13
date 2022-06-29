import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(229,241,21,1) 6%, rgba(0,5,255,1) 78%);
height:100px;
`
const ButtonHeader = styled.button`
height:40px;
margin:30px 20px;

`

const Card = styled.main`
display:flex;
width:100%;
height:100vh;
background-color:#fff5ee;

`
function Details() {
    const navigate = useNavigate()
    return (
        <div>
            <Header>
                        
            <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
            <h2>Pokemon Detalhes</h2>
            <ButtonHeader onClick={() => { navigate('/pokedex') }}>Ir para Pokedex</ButtonHeader>
            </Header>

            <Card>

            </Card>
        </div>

    )

}

export default Details