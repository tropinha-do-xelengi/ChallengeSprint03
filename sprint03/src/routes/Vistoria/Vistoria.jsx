function Vistoria() {

    return (
    <body>
        <header className="cabecalho">
            <img src="../public/img/porto-seguro-logo2.png" alt="Logo Porto-Seguro" />
            <a id="retorna-pg" href="./home.html">Clique para voltar para a home</a>
        </header>
        <section className="conteudo">
            <h2>Bem-vindo(a) à sua vistoria!</h2>
            <p>Apartir daqui, você será guiado(a) pela nossa interface personalizada durante as fotografias da sua bike, mas antes, por favor preencha os dados a seguir:</p>
            <form action="#" className="form">
                <fieldset className="form-holder">
                    <h3>Sua bike</h3>
                    <div className="input-holder">
                        <input className="input-form" type="number" min="1" step=".1" name="txtValor" id="idValor" placeholder="Qual o valor da sua Bike?"/>
                    </div>
                    <div className="input-holder">
                        <input className="input-form" type="text" name="txtModelo" id="idModelo" placeholder="Qual o modelo da sua Bike?"/>
                    </div>
                    <div className="input-holder">
                        <input className="input-form" type="text" name="txtSNumber" id="idSNumber" placeholder="Qual o número de série?"/>
                    </div>
                    <div className="input-holder">
                        <label  id="lblData">Qual a data da compra da sua bike?</label>
                        <input className="input-form" type="date" name="txtDataCompra" id="idDataCompra" placeholder="Qual a data da compra?"/>
                    </div>
                    <div className="input-holder">
                        <button type="submit" className="submitBtn">Iniciar Vistoria</button>
                    </div>
                </fieldset>
            </form>
        </section>


        <footer className="rodape">
            <div className="contato">
                <h1 className="left-txticons" id="tit-rodape">Contato</h1>
                <ul className="left-txticons" id="lista-rodape">
                    <li className="icone-rodape">
                        <a href="https://www.facebook.com">
                            <img className="img-icon" src="../public/img/facebook.png" alt="logo facebook"/>
                        </a>
                    </li>
                    <li className="icone-rodape">
                        <a  href="https://www.instagram.com">
                            <img className="img-icon" src="../public/img/instagram.png" alt="logo instagram"/>
                        </a>
                    </li>
                    <li className="icone-rodape">
                        <a  href="https://www.twitter.com">
                            <img className="img-icon" src="../public/img/twitter.png" alt="logo twitter"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo-rodape">
                <img src="../public/img/porto-seguro-logo2.png" alt="logo da porto" />
            </div>
        </footer>
    </body>
    )
}

export default Vistoria