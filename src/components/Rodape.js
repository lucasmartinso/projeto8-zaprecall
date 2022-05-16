import React from "react"

function RodapeInformation (props) {     

    return(  
        <>  
        {props.contador < 8 ? ( 
        <div className="rodape"> 
           <p>{props.contador}/8 CONCLUÍDOS</p> 

        </div>  
        ) : (
        <div className="rodapeFim"> 
           <a>😥 Putzz!!</a>
           <p>Ainda faltam alguns... Mas não desanime!</p> 
           <p>{props.contador}/8 CONCLUÍDOS</p> 
           <button>REINICIAR REACALL</button> 
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