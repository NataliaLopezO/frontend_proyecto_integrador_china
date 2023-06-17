import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

/**
 * Componente User_profile.
 *
 * Este componente representa la página de perfil de usuario.
 * Permite alternar la apertura y cierre de la barra lateral y muestra
 * el contenido del perfil.
 */

export function User_profile() {
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");
  const now = 50;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  /**
   * Alternar la apertura y cierre de la barra lateral.
   *
   * Esta función cambia el estado de la variable 'isSidebarOpen' para controlar
   * si la barra lateral está abierta o cerrada. Si la barra lateral está abierta,
   * la función la cerrará y viceversa.
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className={`boton-toggler ${isSidebarOpen ? "open" : ""}`}
        style={{ marginLeft: isSidebarOpen ? "310px" : "5px" }}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isSidebarOpen && (
        <div>
          <Nav_bar_perfil />
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        </div>
      )}
      <main
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
        className={`contenedor-perfil ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="settings">
          <h1 className="titulo-settings">Perfil</h1>
        </div>

        <div className="container my-5">
          <div className="row" style={{ borderBottom: "5px solid" }}>
            <div className="col text-center">
              <p className="nombre-user">
                <img
                  src={profilePic}
                  className="foto-user my-3"
                  width="100px"
                  alt="profile"
                />
                <br />
                {username}
              </p>
            </div>
            <div className="col my-3">
              <p className="info-profile">
                Aquí encontrarás información actualizada sobre el progreso de
                tus sesiones y los quizzes realizados, así como tus puntuaciones
                correspondientes. Te mantendremos al tanto de tus logros y
                avances en cada una de las actividades que realices.
                <br />
                <br />
                Nuestra plataforma está diseñada para brindarte un seguimiento
                detallado de tu rendimiento, permitiéndote evaluar tus
                conocimientos y medir tu progreso a lo largo del tiempo. Podrás
                ver tus puntuaciones obtenidas en cada sesión y quiz, y comparar
                tus resultados con sesiones anteriores.
              </p>
            </div>
          </div>
          <div
            className="row my-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Historia</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={now}
                label={`${now}%`}
                style={{ width: "300px",  height:"35px", fontSize:"1.4rem", marginTop:"50px"}}
              />
              ;
            </div>
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Cultura</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={now}
                label={`${now}%`}
                style={{ width: "300px",  height:"35px", fontSize:"1.4rem", marginTop:"50px"}}
              />
              ;
            </div>
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Contribuciones</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={now}
                label={`${now}%`}
                style={{ width: "300px",  height:"35px", fontSize:"1.4rem", marginTop:"50px"}}
              />
              ;
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
