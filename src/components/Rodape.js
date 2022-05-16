import React from "react"; 

import { Link } from "react-router-dom";  

function RodapeInformation (props) {     

    return(  
        <>  
        {props.contador < 8 ? ( 
        <div className="rodape"> 
           <p>{props.contador}/8 CONCLUÍDOS</p> 

        </div>  
        ) : (
        <div className="rodapeFim"> 
           <a>🥳 Parabéns!!</a>
           <p>Você não esqueceu de nenhum flashcard!</p> 
           <p>{props.contador}/8 CONCLUÍDOS</p> 
           <Link to="/"><button>REINICIAR REACALL</button></Link>
        </div>  
        ) }
        </>
    )
}



export default function Rodape(props) { 
    return(  
        <RodapeInformation  
            contador= {props.contador}
        />
    )
}