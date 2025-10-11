function Card(){
    return(
        <div className="row cards d-flex flex-row gap-5 me-0 ms-0 justify-content-center">
        <div className="card col-xl-2 col-lg-3 col-md-3 col-xs-12 b-1 p-0">
            <img className="w-100" src="https://i.redd.it/x1921zpqc7y21.jpg"/>
            <div className="card-body">
                <h5 className="card-title">Madara Uchiha</h5>
                <p className="card-text">Gente diciendo que es un villano, seamos realistas… Es como Naruto en cierto modo, buscando la verdadera paz pero a SU manera estratégica.</p>
            </div>
            <div className="card-footer">
                <a href="https://www.youtube.com/shorts/qlMYRPWCB6Y" className="btn btn-primary">Conoce mas de Madara</a>
            </div>
        </div>

        <div className="card col-xl-2 col-lg-3 col-md-3 col-xs-12 b-1 p-0">
            <img className="w-100" src="https://i.redd.it/pb1fsfpj8gpd1.jpeg"/>
            <div className="card-body">
                <h5 className="card-title">Shisui Uchiha</h5>
                <p className="card-text">Considerado un prodigio más grande que Itachi, una amenaza de nivel "corre y escóndete" para las naciones enemigas.</p>
            </div>
            <div className="card-footer">
                <a href="https://www.youtube.com/shorts/o5RV9EXVWhw" className="btn btn-primary">Conoce mas de Shisui</a>
            </div>
        </div>

        <div className="card col-xl-2 col-lg-3 col-md-3 col-xs-12 b-1 p-0">
            <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMCWKNl7ahKCFywvQ0CaHA45DyKER1SIPHQ&s"/>
            <div className="card-body">
                <h5 className="card-title">Itachi Uchiha</h5>
                <p className="card-text">Un niño soldado manipulado y obligado a cometer una masacre y a vivir una existencia miserable por haber sido abandonado por todos a su alrededor.</p>
            </div>
            <div className="card-footer">
                <a href="https://www.youtube.com/shorts/c15oEjz6exM" className="btn btn-primary">Conoce mas de Itachi</a>
            </div>
        </div>

        <div className="card col-xl-2 col-lg-3 col-md-3 col-xs-12 b-1 p-0">
            <img className="w-100" src="https://preview.redd.it/say-something-nice-about-sasuke-uchiha-v0-ei8iafnftnme1.jpeg?auto=webp&s=495623b7181aad1c40b8d4019ccae48ac036cf09"/>
            <div className="card-body">
                <h5 className="card-title">Sasuke Uchiha</h5>
                <p className="card-text">La mayoría de sus acciones están justificadas, aunque a veces puede ser un poco intenso.</p>
            </div>
            <div className="card-footer">
                <a href="https://www.youtube.com/shorts/5n1RB5E8fzo" className="btn btn-primary">Conoce mas de Sasuke</a>
            </div>
        </div>
        </div>
    )
}

export default Card