import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
justify-content:space-between;
background: linear-gradient(180deg, rgba(229,241,21,1) 6%, rgba(0,5,255,1) 78%);
height:100px;
h2 {
    text-transform: uppercase;
    letter-spacing: 0.3em;
}
`
const ButtonHeader = styled.button`
height:40px;
margin:30px 20px;

`

const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: start;
width:100%;
background-color:#fff5ee;
`
const BoxImagens = styled.div`
width: 200px;
margin: 20px;
padding: 0;
img {
    width: 100%;
    object-fit: cover;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 0 0 3px #888;
}
`

const BoxStats = styled.div`
margin: 20px;
width: 200px;
border: 1px solid #ccc;
padding: 10px;
text-transform: capitalize;
box-shadow: 0 0 3px #888;
h3 {
    text-align: center;
    margin: 0;
}
`

const BoxTypesMoves = styled.div`
margin: 20px 20px 20px 0px;
width: 200px;
h3 {
    text-align: center;
    margin: 0;
}
.type, .move {
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #888;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .list {
        display: flex;
        justify-content: center;
    }
    span, p {
        text-transform: capitalize;
        margin: 10px;
    }
}
`

function Details() {
    const navigate = useNavigate()
    const { name } = useParams();
    const [stats, setStats] = useState([])
    const [imagens, setImagens] = useState({})
    const [types, setTypes] = useState([])
    const [moves, setMoves] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            console.log(res.data)
            setImagens(res.data.sprites)
            setStats(res.data.stats)
            setTypes(res.data.types)
            setMoves(res.data.moves)
        }).catch(() => {
        })
    }, [])

    const listStats = stats.map((stat, index) => {
        return <p key={index}>{stat.stat.name}: {stat.base_stat}</p>
    })

    const listType = types.map((type, index) => {
        return <span key={index}>{type.type.name}</span>
    })

    const listMove = moves.map((move, index) => {
        return <p key={index}>{index + 1} - {move.move.name}</p>
    })

    return (
        <div>
            <Header>
                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
                <h2>{name}</h2>
                <ButtonHeader onClick={() => { navigate('/pokedex') }}>Ir para Pokedex</ButtonHeader>
            </Header>

            <Card>
                <BoxImagens>
                    <img src={imagens.front_default}/>
                    <img src={imagens.back_default}/>
                </BoxImagens>

                <BoxStats>
                    <h3>Stats</h3>
                    {listStats}
                </BoxStats>

                <BoxTypesMoves>
                    <div className="type">
                        <h3>Types</h3>
                        <div className="list">{listType}</div>
                    </div>

                    <div className="move">
                        <h3>Moves</h3>
                        {listMove}
                    </div>
                </BoxTypesMoves>
            </Card>
        </div>

    )

}

export default Details