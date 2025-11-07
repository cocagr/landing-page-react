import "./styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark akatsuki-navbar">
            <div className="container-fluid px-5">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <span className="fw-bold text-akatsuki">Uchiha Clan</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link active-link fw-semibold" aria-current="page" href="#">
                                Konohagakure
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fw-semibold" href="https://naruto.fandom.com/es/wiki/Policía_Militar_de_Konoha" target="_blank" rel="noopener noreferrer">
                                Servicios Policiales
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary fw-semibold"
                                href="https://naruto.fandom.com/es/wiki/Itachi_Uchiha"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Servicios Akatsuki
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary fw-semibold"
                                href="https://naruto.fandom.com/es/wiki/Madara_Uchiha"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Domar Bijus
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
