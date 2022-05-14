import  ReactDOM from "react-dom";   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./components/TelaInicial"; 
import Jogo from "./components/Jogo";

function App() {  
    return(  
        <BrowserRouter> 
            <Routes> 
                <Route path="/" element={<TelaInicial />} /> 
                <Route path="/jogo" element={<Jogo />} />  
            </Routes>
        </BrowserRouter>
    )
} 

ReactDOM.render(<App />,document.querySelector(".root"));