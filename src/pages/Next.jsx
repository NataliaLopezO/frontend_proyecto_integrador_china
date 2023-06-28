import React from "react";
import { Link } from "react-router-dom";
import "../scss/next_styles.css";

/**
 * Componente Next.
 *
 * Este componente muestra una sección de bienvenida y preparación para comenzar
 * un recorrido por China antigua. Muestra una imagen de perfil, el nombre de usuario
 * y un mensaje de bienvenida. Además, incluye un botón que redirige al usuario a la
 * página de perfil cuando se hace clic en él.
 */

export function Next() {
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");

  console.log(profilePic);

  return (
    <>
      <main className="contenedor-next">
        <div className="container">
          <div className="row init-next">
            <img
              src={profilePic}
              className="img-fluid  rounded-circle my-2"
              style={{ height: "200px", width: "auto" }}
              alt="profile"
            />
            <h1 className="titulo-next">Bienvenid@ {username}</h1>
          </div>
          <div className="row centro-next">
            <p className="parag-next">
              ¡Es hora de iniciar 
              nuestro recorrido 
              por China antigua!
            </p>
          </div>
          <div className="row text-center">
            <Link to="/profile">
              <button className="vamos">¡Iniciemos!</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
