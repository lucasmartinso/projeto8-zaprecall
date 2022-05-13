import  ReactDOM from "react-dom";  

import TelaInicial from "./components/TelaInicial"; 
import Jogo from "./components/Jogo";

function App() {  
    return( 
        <Jogo />
    )
} 

ReactDOM.render(<App />,document.querySelector(".root"));