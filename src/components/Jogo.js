import React from "react";  

import Rodape from "./Rodape";

function Perguntas(props) {  
    const [clicked, setClicked] = React.useState(true);   
    const [clicked2, setClicked2] = React.useState(true);  
    const [clicked3, setClicked3] = React.useState({state: true, opcao: "", contador: 0});  

    let cont=0; 

    function incrementa() {   
        props.incrementaContador();
    } 

    return(  
        <li> 
            {clicked ? (
            <div className="pergunta">
                <span>{props.i}</span> 
                <ion-icon name="play-outline" onClick={() => setClicked(!clicked)}></ion-icon>
            </div>    
            ) : clicked2 ? ( 
            <div className="enunciado">
                <span>{props.pergunta}</span> 
                <ion-icon name="repeat-sharp" onClick = {() => setClicked2(!clicked2)}></ion-icon>
            </div>   
            ) : clicked3.state ? ( 
            <div className="enunciado">
                <span>{props.resposta}</span>   
                <div className="botoes">
                    <button id="wrong" onClick={() => setClicked3({state: !clicked3, opcao: "wrong", contador: incrementa()})}>Não Lembrei</button> 
                    <button id="maybe" onClick={() => setClicked3({state: !clicked3, opcao: "maybe", contador: incrementa()})}>Quase Não Lembrei</button> 
                    <button id="right" onClick={() => setClicked3({state: !clicked3, opcao: "right", contador: incrementa()})}>Zap!</button>
                </div>
            </div>   
            ) : (
                <div className="perguntaRespondida"> 
                {clicked3.opcao === "wrong" ? ( 
                    <>
                    <span id="wrong">{props.i}</span>
                    <ion-icon name="close-circle"></ion-icon>  
                    </> 
                ) : clicked3.opcao === "maybe" ? (  
                    <> 
                    <span id="maybe">{props.i}</span>
                    <ion-icon name="help-circle"></ion-icon>  
                    </>
                ) : ( 
                    <>
                    <span id="right">{props.i}</span>
                    <ion-icon name="checkmark-circle"></ion-icon>   
                    </>
                ) }
            </div> 
            )}
        </li>   
    ) 

}

export default function Jogo() {  

    const dados = [
        {
            i:"Pergunta 1", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        },
        {
            i:"Pergunta 2", 
            pergunta: "O React é __ ", 
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        }, 
        {
            i:"Pergunta 3", 
            pergunta: "Componentes devem iniciar com __", 
            resposta: " letra maiúscula"
        }, 
        {
            i:"Pergunta 4", 
            pergunta: "Podemos colocar __ dentro do JSX", 
            resposta: "expressões"
        }, 
        {
            i:"Pergunta 5", 
            pergunta: "O ReactDOM nos ajuda __ ", 
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        }, 
        {
            i:"Pergunta 6", 
            pergunta: "Usamos o npm para __ ", 
            resposta: "gerenciar os pacotes necessários e suas dependências"
        }, 
        {
            i:"Pergunta 7", 
            pergunta: "Usamos props para __", 
            resposta: "passar diferentes informações para componentes "
        }, 
        {
            i:"Pergunta 8", 
            pergunta: "Usamos estado (state) para __", 
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];  

    const [contador,setContador] = React.useState(0); 

    function incrementaContador() { 
        setContador(() => contador+1); 
    }

    return( 
        <div className="jogo">
            <div className="header"> 
                <img src="./imagens/raio.png" /> 
                <h3>ZapRecall</h3>
            </div>   

            <div className="container">
            {dados.map((post,index) => (
            <div className="perguntas"> 
                <ul>
                    <Perguntas  
                        key= {index}
                        i = {post.i} 
                        pergunta = {post.pergunta} 
                        incrementaContador = {incrementaContador}  
                        resposta = {post.resposta}  
                    /> 
                </ul>
            </div> 
            ))} 
            </div>

           <Rodape contador={contador}/>
        </div>
    )
}