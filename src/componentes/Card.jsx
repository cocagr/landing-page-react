import "./styles/Card.css";

function Card({ nombre, descripcion, imagen, enlace }) {
  return (
    <div className="card shadow-sm w-100 akatsuki-card" style={{ maxWidth: "320px" }}>
      <div style={{ height: "250px", overflow: "hidden" }}>
        <img
          src={imagen}
          alt={nombre}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
      <div className="card-footer text-center">
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="btn akatsuki-btn"
        >
          Conoce más de {nombre.split(" ")[0]}
        </a>
      </div>
    </div>
  );
}

export default Card;
