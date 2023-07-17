import { useState } from 'react';
import logo from './../assets/logo.png';
import FlashCard from './FlashCard';
import Footer from './Footer'
import styled from 'styled-components';

export default function DeckScreen(props) {
    
    const {cards} = props;

    const [contador, setContador] = useState(0);

    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={logo} alt="Logo do ZapRecall" />
                <h1>ZapRecall</h1>  
            </LogoContainer>

            {cards.map( (card, indice) => (
                <FlashCard 
                    key={card.question} 
                    indice={indice} 
                    card={card} 
                    contador={contador}
                    setContador={setContador}
                />)
            )}

            <Footer cards={cards} contador={contador}/>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;