function Home () {
    
        return (
    <body>
        <header className="cabecalho">
            <img  src="../public/img/porto-seguro-logo.png" alt="Logo da Porto Seguro" />
            <nav id="navbar-cabecalho">
                <ul id="ul-navbar-cabecalho">
                    <li className="lista-cabecalho">
                        <a href="https://www.portoseguro.com.br/conteudo/seguros/bike/?cmph=113&ref=institucional" className="link-cabecalho" >Contratação</a>
                    </li>
                    <li className="lista-cabecalho">
                        <a href="./vistoria.html" className="link-cabecalho">Vistoria</a>
                    </li>
                    <li className="lista-cabecalho">
                        <a href="https://www.portoseguro.com.br/fale-conosco/contatos" className="link-cabecalho">Ajuda</a>
                    </li>
                    <li className="lista-cabecalho">
                        <a  href="https://www.portoseguro.com.br/pdc/login" className="link-cabecalho">Login</a>
                    </li>
                    <li className="lista-cabecalho">
                        <a  href="https://www.portoseguro.com.br/pdc/cadastro" className="link-cabecalho">Cadastro</a>
                    </li>
                </ul>
            </nav>
        </header>

                <section className="conteudo">
                <div className="txt-explicativo">
                    <div className="cont1">
                        <div className="txt-div-conteudo" id="txt-conteudo1">
                            <h1 id="title1">Bem-vindo ao Seguro Bike da Porto!</h1>
                            <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
                        </div>
                        <p><a id="redirBtn" href="https://www.portoseguro.com.br/conteudo/seguros/bike/?cmph=113&ref=institucional">Contrate já!</a></p>
                    </div>
                    <div className="cont2">
                        <div className="txt-div-conteudo">
                            <h2>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar!</h2>
                            <p>O Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros. São garantias e serviços pensados para cada modelo e perfil de cliente, com contratação simples e rápida, sem burocracia.</p>
                        </div>
                        <img id="img-ciclista" src="../public/img/ciclista1.jpg" alt="Imagem de ciclista"/>
                    </div>
                </div>
                <div className="cont3">
                    <h1 id="title2">Conheça as coberturas</h1>
                    <p>Informações resumidas. Para mais detalhes, consulte as condições gerais. As coberturas de responsabilidade civil organizador ou expositor são coberturas básicas e obrigatórias. As coberturas adicionais não poderão ser contratadas isoladamente.</p>
                    <ul className="features">
                        <li className="lista-conteudo">
                            <img src="../public/img/bicycle.png" alt="icone Bike"/>
                            <div className="txtLista-conteudo">
                                <h3>Danos à bike</h3>
                                <p>Cobre os danos causados por incêndio, queda, tentativa de roubo e, ainda, situações em que a bicicleta estiver sendo levada por um veículo transportador.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/thief.png" alt="icone ladrao"/>
                            <div className="txtLista-conteudo">
                                <h3>Subtração da bike</h3>
                                <p>Cobre contra roubo, ou seja, quando há ameaça direta ou uso de violência ao segurado ou arrombamento do local onde a bicicleta estiver guardada.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/injury.png" alt="icone pessoa acidentada"/>
                            <div className="txtLista-conteudo">
                                <h3>Acidentes pessoais individual</h3>
                                <p>Cobre as despesas em casos de morte acidental e invalidez permanente (total ou parcial), decorrente de acidente, além das despesas médicas, hospitalares e odontológicas.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/worldwide.png" alt="icone globo"/>
                            <div className="txtLista-conteudo">
                                <h3>Cobertura internacional</h3>
                                <p>Possibilita a extensão das garantias contratadas para sinistros que ocorrerem fora do Brasil.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/case.png" alt="icone bagagem"/>
                            <div className="txtLista-conteudo">
                                <h3>Bike bagagem</h3>
                                <p>Cobre o extravio da bicicleta em viagens aéreas e/ou rodoviárias, durante o trajeto de ida e volta de viagem do segurado, desde que tenha com o ticket de embarque. Para efeito dessa cobertura, entende-se como bagagem a bicicleta segurada e a mala utilizada para transporte da bicicleta, comprovadamente sob a responsabilidade da companhia aérea ou rodoviária.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/shield.png" alt="icone escudo"/>
                            <div className="txtLista-conteudo">
                                <h3>Danos à terceiros</h3>
                                <p>Cobre os danos materiais e/ou corporais causados a terceiros durante o uso da sua bicicleta.</p>
                            </div>
                        </li>
                        <li className="lista-conteudo">
                            <img src="../public/img/bolt.png" alt="icone raio"/>
                            <div className="txtLista-conteudo">
                                <h3>Danos elétricos</h3>
                                <p>Cobre os danos causados por oscilações de energia, descargas elétricas e curtos-circuitos em bikes elétricas.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <footer className="rodape">
                <div className="contato">
                    <h1 className="left-txticons" id="tit-rodape">Contato</h1>
                    <ul className="left-txticons" id="lista-rodape">
                        <li className="icone-rodape">
                            <a  href="https://www.facebook.com">
                                <img className="img-icon" src="../img/facebook.png" alt="logo facebook"/>
                            </a>
                        </li>
                        <li className="icone-rodape">
                            <a href="https://www.instagram.com">
                                <img className="img-icon" src="../img/instagram.png" alt="logo instagram"/>
                            </a>
                        </li>
                        <li className="icone-rodape">
                            <a  href="https://www.twitter.com">
                                <img className="img-icon" src="../img/twitter.png" alt="logo twitter"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logo-rodape">
                    <img src="../img/porto-seguro-logo2.png" alt="logo da porto"/>
                </div>
            </footer>
    </body>
    )
}

export default Home 
