function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex">
                <div className="d-flex align-self-start justify-self-start ms-5">
                    <a className="navbar-brand text-white">Uchiha Clan</a>
                </div>
                <div className="d-flex" id="nav">
                    <div className="nav-items d-flex align-self-end justify-content-end me-5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Konohagakure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-secondary" href="https://naruto.fandom.com/es/wiki/Policía_Militar_de_Konoha">Servicios Policiales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-secondary" href="https://naruto.fandom.com/es/wiki/Itachi_Uchiha">Servicios Akatsuki</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-secondary" aria-disabled="true" href="https://naruto.fandom.com/es/wiki/Madara_Uchiha">Domar Bijus</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;