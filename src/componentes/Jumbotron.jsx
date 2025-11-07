import "./styles/Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron-akatsuki text-light rounded-3 py-5 px-4 text-center">
            <div className="container py-5">
                <h1 className="display-5 fw-bold text-akatsuki">
                    Aprende sobre el Clan Uchiha
                </h1>
                <p className="lead mx-auto mt-3 mb-4" style={{ maxWidth: "700px" }}>
                    El Clan Uchiha es uno de los cuatro clanes nobles de Konohagakure.
                    Fue considerado uno de los dos clanes más poderosos del mundo,
                    portadores del Sharingan y herederos de una voluntad ardiente.
                </p>
                <a
                    href="https://naruto.fandom.com/es/wiki/Clan_Uchiha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn akatsuki-btn btn-lg"
                >
                    Aprende más sobre el clan
                </a>
            </div>
        </div>
    );
}

export default Jumbotron;
