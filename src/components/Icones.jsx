import play from './../assets/seta_play.png';
import quase from './../assets/icone_quase.png';
import erro from './../assets/icone_erro.png';
import zap from './../assets/icone_certo.png';

export default function Icones(props) {
    const { mostrarPergunta, status } = props;
    return (
        <>
            {status === 'erro' && (<img data-test="erro" onClick={mostrarPergunta} src={erro} alt="" />)}
            {status === 'quase' && (<img data-test="quase" onClick={mostrarPerguntan} src={quase} alt="" />)}
            {status === 'zap' && (<img onClick={mostrarPergunta} src={zap} alt="" />)}
            {status === 'não respondida' && (<img onClick={mostrarPergunta} src={play} alt="" />)}
        </>
    );
}