import './cabecalho.css'

function Rodape() {
    return(
        <footer className="rodape">
            <h2>Páginas do projeto: </h2>
            <ul className="lista-paginas">
                    <li><a target="_blank" href="./pages/home.html">Home</a></li>
                    <li><a target="_blank" href="./pages/vistoria.html">Vistoria</a></li>

                    <li className="item">Felipe Moraes Silva - RM 98455</li>
                    <li className="item">Gustavo Moreira Golçalves - RM 97999</li>
                    <li className="item">Mariana Neugebauer Dourado - RM 550494</li>
                    <li className="item">Matheus Giusto Lopes - RM 99969</li>
                    <li className="item">Vinícius de Alencar Chagas - RM 550167</li>
            </ul> 
        </footer>
    )
    }

export default Rodape