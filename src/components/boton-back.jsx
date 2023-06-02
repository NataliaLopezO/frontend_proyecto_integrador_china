import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../scss/boton-back_style.css";

export function Boton_back({ nombre, imagen, identificador, href }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href); // Redirecciona a la página especificada en href
  };

  return (
    <>
      <div className="back">
        <div className="back-hijo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ color: "#000000", marginRight: "10px"}}
            />
            <h5 className="back">Anterior</h5>
          </div>

          <button className="boton-back" onClick={handleClick}>
            <span className="button-content">
              <img src={imagen} alt="Imagen" className="button-icon" />
            </span>
            {nombre}
          </button>
        </div>
      </div>
    </>
  );
}
