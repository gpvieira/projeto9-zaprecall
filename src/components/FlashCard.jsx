import { useState } from 'react';
import styled from 'styled-components';
import {cinza, verde, laranja, vermelho} from './../colors.js';
import Icones from './Icones.jsx'
import virar from './../assets/seta_virar.png';

export default function FlashCard(props) {

    const { card, indice, contador, setContador } = props;

    const [started, setStarted] = useState(false);
    const [turned, setTurned] = useState(false);
    const [status, setStatus] = useState('não respondida');

    function mostrarPergunta() {
        if ( status === 'não respondida'){
            setStarted(true);
        }
    }

    function turnedCard(){
        setTurned(true);
    }

    function respondido(resposta){
        setStatus(resposta);
        setStarted(false);

        setContador( contador + 1);
    }   

    return (
        <>
            {!started
                ?
                (
                    <PerguntaFechada status={status}>
                        <p>Pergunta {indice + 1}</p>
                        <Icones mostrarPergunta={mostrarPergunta} status={status}/>                        
                    </PerguntaFechada>
                )
                :
                (
                    <PerguntaAberta>
                        {!turned
                            ?
                            (
                                <>
                                    {card.question}
                                    <img onClick={turnedCard} src={virar} alt="" />
                                </>
                            )
                            :
                            (
                                <>
                                    {card.answer}
                                    <ContainerBotoes>
                                        <BotaoResposta onClick={() => respondido('erro')} background={vermelho}>Não lembrei</BotaoResposta>
                                        <BotaoResposta onClick={() => respondido('quase')} background={laranja}>Quase não lembrei</BotaoResposta>
                                        <BotaoResposta onClick={() => respondido('zap')} background={verde}>Zap!</BotaoResposta>
                                    </ContainerBotoes>
                                </>
                            )
                        }
                    </PerguntaAberta>
                )
            }
        </>

    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    
    background-color: #FFFFFF;
    margin: 12px;
    display: flex;
    padding: 16px;
    justify-content: space-between;
    border-radius: 7px;    
    align-items: center;
    height: 36px;    
    p {
        font-family: 'Recursive';
        font-size: 16px;
        text-decoration: ${ props => props.status === 'não respondida' ? 'none' : 'line-through'} ;
        color: ${ props => {            
            switch (props.status){
                case 'erro':  
                    return vermelho;
                case 'quase': 
                    return amarelo;
                case 'zap': 
                    return verde;
                default : 
                    return cinza;
            }
        }};
    }
`;

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    flex-direction: column;
    padding: 15px;
    background: #FFFFD5;    
    border-radius: 5px;
    font-family: 'Recursive';
    display: flex;
    font-size: 18px;
    color: #333333;
    position: relative;    
    justify-content: space-between;
    img {
        bottom: 10px;
        right: 10px;
        position: absolute;        
    }
`;

const ContainerBotoes = styled.div`
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    
`;

const BotaoResposta = styled.button`
    
    font-family: 'Recursive';
    justify-content: center;   
    font-size: 12px;
    display: flex;    
    text-align: center;
    border-radius: 6px;
    width: 90px;
    color: #FFFFFF;
    background-color: ${ props => props.background };    
    border: 1px solid ${ props => props.background };
    padding: 6px;
    align-items: center;
`;