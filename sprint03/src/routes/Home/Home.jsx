export default function Home () {

        return (
            <body>
        <header class="cabecalho">
            <h1>Projeto: Challenge Porto Seguro - Bikes</h1> 
        </header>

        <section class="conteudo">
            <h2 id="tit-sec">Descrição da solução proposta:</h2>
            <div class="cards">
                <div class="card1">
                    <p>Queremos propor a ideia de uma IA (inteligência artificial) que possa ajudar na analise de fotos de bikes, dispensando a necessidade de uma pessoa.</p>
                    <p>Além disso, há outros pontos que serão alterados e melhorados com essa automação, sendo eles:</p>
                </div>
                <div class="card2">
                    <ol class="lista-propostas">
                        <li class="item">Cliente e ChatBot</li>
                        <li class="item">Redução da quantidade de fotos; </li>
                        <li class="item">Problema com a qualidade das fotos;</li>
                        <li class="item">Auxílio ao cliente no momento da fotografia;</li>
                        <li class="item">Construção de uma melhora de interface;</li>
                        <li class="item">Criação da vistoria completamente digital;</li>
                        <li class="item">Evitar fraudes;</li>
                    </ol>
                </div>
            </div>
        </section>

        <footer class="rodape">
            <h2>Páginas do projeto: </h2>
            <ul class="lista-paginas">
                    <li><a target="_blank" href="./pages/home.html">Home</a></li>
                    <li><a target="_blank" href="./pages/vistoria.html">Vistoria</a></li>
                    <li><a href="./membros.html">Lista dos Membros</a></li>
            </ul> 
        </footer>
</body>
    )
}