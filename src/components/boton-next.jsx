import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import "../scss/boton-next_style.css";

export function Boton_next({ nombre, imagen, identificador, href }) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(href); // Redirecciona a la página especificada en href
    };

  return (
    <>
      <div className="siguiente">
        <div className="siguiente-hijo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h5 className="next">Siguiente</h5>
            <FontAwesomeIcon
              icon={faHandPointRight}
              style={{ color: "#000000", marginLeft: "10px" }}
            />
          </div>

          <button className="boton-siguiente" onClick={handleClick}>
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
