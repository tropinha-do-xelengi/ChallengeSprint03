import Rodape from './components/Rodape'
import Conteudo from './components/Conteudo'
import { Porto } from 'react-router-dom'; 

export default function App() { 
    return (
        <>
            <Conteudo /> 
                <Porto /> 
            <Rodape /> 
        </>
    )

}