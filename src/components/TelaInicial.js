import { Link } from "react-router-dom";  

export default function TelaInicial() {
    return( 
        <div className="containerInicio">
            <img src="./imagens/raio.png"/>  
            <h2>ZapRecall</h2> 
            <Link to="/jogo"><button>Iniciar Recall!</button></Link>
        </div>
    )
}