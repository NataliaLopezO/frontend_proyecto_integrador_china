import { Link } from "react-router-dom";
import "../scss/next_styles.css";

export function Next() {
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");

  console.log(profilePic)

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            {/* Model --
            Aqui podemos agregar un modelo 3D para que quede
            a la izquierda como el diseño Figma
            */}
          </div>

          <div className="col-lg-4 contenedor-next-hijo-cent">
            <div>
              <img
                src={profilePic}
                className="img-fluid img-thumbnail rounded-circle my-2"
                width="200px"
                alt="profile"
              />
            </div>
            <h1 className="titulo-next">Bienvenid@ {username}</h1>

            <p className="parag-next">
              ¡Es hora de iniciar <br />
              nuestro recorrido <br />
              por China antigua!
            </p>

            <div>
              <Link to="/profile">
                <button className="vamos">¡Iniciemos!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
