import './conteudo.css'

function Conteudo() {
    return(
        <section className="conteudo">
        <h2 id="tit-sec">Descrição da solução proposta:</h2>
        <div className="cards">
            <div className="card1">
                <p>Queremos propor a ideia de uma IA (inteligência artificial) que possa ajudar na analise de fotos de bikes, dispensando a necessidade de uma pessoa.</p>
                <p>Além disso, há outros pontos que serão alterados e melhorados com essa automação, sendo eles:</p>
            </div>
            <div className="card2">
                <ol className="lista-propostas">
                    <li className="item">Cliente e ChatBot</li>
                    <li className="item">Redução da quantidade de fotos; </li>
                    <li className="item">Problema com a qualidade das fotos;</li>
                    <li className="item">Auxílio ao cliente no momento da fotografia;</li>
                    <li className="item">Construção de uma melhora de interface;</li>
                    <li className="item">Criação da vistoria completamente digital;</li>
                    <li className="item">Evitar fraudes;</li>
                </ol>
            </div>
        </div>
    </section>
    )
    }

export default Conteudo