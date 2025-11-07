import Card from "./Card";

function CardList() {
  const personajes = [
    {
      nombre: "Madara Uchiha",
      descripcion:
        "Gente diciendo que es un villano, seamos realistas… Es como Naruto en cierto modo, buscando la verdadera paz pero a SU manera estratégica.",
      imagen: "https://i.redd.it/x1921zpqc7y21.jpg",
      enlace: "https://www.youtube.com/shorts/qlMYRPWCB6Y",
    },
    {
      nombre: "Shisui Uchiha",
      descripcion:
        "Considerado un prodigio más grande que Itachi, una amenaza de nivel 'corre y escóndete' para las naciones enemigas.",
      imagen: "https://i.redd.it/pb1fsfpj8gpd1.jpeg",
      enlace: "https://www.youtube.com/shorts/o5RV9EXVWhw",
    },
    {
      nombre: "Itachi Uchiha",
      descripcion:
        "Un niño soldado manipulado y obligado a cometer una masacre y a vivir una existencia miserable por haber sido abandonado por todos a su alrededor.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMCWKNl7ahKCFywvQ0CaHA45DyKER1SIPHQ&s",
      enlace: "https://www.youtube.com/shorts/c15oEjz6exM",
    },
    {
      nombre: "Sasuke Uchiha",
      descripcion:
        "La mayoría de sus acciones están justificadas, aunque a veces puede ser un poco intenso.",
      imagen:
        "https://preview.redd.it/say-something-nice-about-sasuke-uchiha-v0-ei8iafnftnme1.jpeg?auto=webp&s=495623b7181aad1c40b8d4019ccae48ac036cf09",
      enlace: "https://www.youtube.com/shorts/5n1RB5E8fzo",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row justify-content-center g-4">
        {personajes.map((p, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center"
          >
            <Card
              nombre={p.nombre}
              descripcion={p.descripcion}
              imagen={p.imagen}
              enlace={p.enlace}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
