import './componets/home.css';

export const HeaderCabecalho = () => {
    return (
        <div className="HEADER-cabecalho">
            <div className="overlap-group">
            <div className="text-wrapper">Área Cliente</div>
        </div>
            <div className="navbar">
                <div className="div">SOBRE NÓS</div>
                <div className="text-wrapper-2">AJUDA</div>
                <div className="text-wrapper-3">VISTORIA</div>
                <div className="text-wrapper-4">CONTRATAÇÃO</div>
                <div className="header" />
            </div>
                <img className="logo-porto" alt="Logo porto" src="logo-porto.png" />
        </div>
        );
    };
