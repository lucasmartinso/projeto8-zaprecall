import React from "react"; 

function Perguntas(props) {  
    const [clicked, setClicked] = React.useState(true);   
    const [clicked2, setClicked2] = React.useState(true);  
    const [clicked3, setClicked3] = React.useState(true); 

    console.log(clicked); 
    console.log(clicked2);

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
            ) : clicked3 ? ( 
            <div className="enunciado">
                <span>{props.resposta}</span>   
                <div className="botoes">
                    <button id="wrong" onClick={() => setClicked3(!clicked3)}>Não Lembrei</button> 
                    <button id="maybe" onClick={() => setClicked3(!clicked3)}>Quase Não Lembrei</button> 
                    <button id="right" onClick={() => setClicked3(!clicked3)}>Zap!</button>
                </div>
            </div>   
            ) : (
                <div className="perguntaRespondida">
                <span>{props.i}</span>  
                <ion-icon name="close-circle"></ion-icon> 
                <ion-icon name="help-circle"></ion-icon>
                <ion-icon name="checkmark-circle"></ion-icon> 
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
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 3", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 4", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 5", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 6", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 7", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }, 
        {
            i:"Pergunta 8", 
            pergunta: "O que é JSX?", 
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        }
    ]; 

    return( 
        <div className="jogo">
            <div className="header"> 
                <img src="./imagens/raio.png" /> 
                <h3>ZapRecall</h3>
            </div>   

            {dados.map((post,index) => (
            <div className="perguntas"> 
                <ul>
                    <Perguntas  
                        key= {index}
                        i = {post.i} 
                        pergunta = {post.pergunta}   
                        resposta = {post.resposta}  
                    /> 
                </ul>
            </div> 
            ))}

            <div className="rodape">0/4 CONCLUÍDOS</div>
        </div>
    )
}