import { Link } from "react-router-dom"

export default function Erro404() { 
    return ( 
        <div>
            <h1>ESTÁ PAGINA <strong> NÃO EXISTE </strong></h1>
            <p> Retorne para o ínicio <span> <Link to="/">INÍCIO</Link></span> </p>

        </div>
    )
}