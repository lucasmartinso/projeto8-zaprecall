import React from "react";

function Perguntas(props) { 
    return( 
        <div className="pergunta">
            <span>{props.i}</span> 
            <ion-icon name="play-outline"></ion-icon>
        </div>     
    )
}

export default function Jogo() {  

    const dados = [
        {i:"Pergunta 1"},
        {i:"Pergunta 2"}, 
        {i:"Pergunta 3"}, 
        {i:"Pergunta 4"}, 
        {i:"Pergunta 5"}, 
        {i:"Pergunta 6"}, 
        {i:"Pergunta 7"}, 
        {i:"Pergunta 8"}
    ];

    return( 
        <div className="jogo">
            <div className="header"> 
                <img src="./imagens/raio.png" /> 
                <h3>ZapRecall</h3>
            </div>   

            {dados.map((post) => (
            <div className="perguntas">
                <Perguntas 
                    i = {post.i}    
                />
            </div> 
            ))}

            <div className="rodape">0/4 CONCLUÍDOS</div>
        </div>
    )
}