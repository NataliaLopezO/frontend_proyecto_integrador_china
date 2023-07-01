import React from "react";
import { useState, useEffect } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";
import axios from "axios";
import { api } from "../api/register_api";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

/**
 * Componente User_profile.
 *
 * Este componente representa la página de perfil de usuario.
 * Permite alternar la apertura y cierre de la barra lateral y muestra
 * el contenido del perfil.
 */

export function User_profile() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");

  const [porcHistoria, setPorcHistoria] = useState(0); // Ahora 'now' es un estado
  const [porcCultura, setPorcCultura] = useState(0);
  const [porcContribuciones, setPorcContribuciones] = useState(0);

  const [aciertosHistoria, setaciertosHistoria] = useState(2);
  const [fallosHistoria, setfallosHistoria] = useState(2);

  const [aciertosCultura, setaciertosCultura] = useState(2);
  const [fallosCultura, setfallosCultura] = useState(2);

  const [aciertosContribuciones, setaciertosContribuciones] = useState(2);
  const [fallosContribuciones, setfallosContribuciones] = useState(2);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * Manejador de clic del botón del quiz de contribuciones.
   *
   * Esta función se ejecuta cuando se hace clic en el botón de quiz de contribuciones. Redirecciona al usuario
   * a la página especificada utilizando la función 'navigate' proporcionada por React Router.
   */

  const handleClick = () => {
    navigate("/quiz-contribuciones"); // Redirecciona a la página especificada en href
  };
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

  useEffect(() => {
    // Realiza una solicitud POST al servidor para obtener el progreso del usuario
    axios;
    api
      .post("/china/get_progreso/", { username })
      .then((response) => {
        const cantidadTotalHistoria = Object.keys(
          response.data.historia
        ).length;
        const historia = sumarValoresDiccionario(response.data.historia);

        const cultura = sumarValoresDiccionario(response.data.cultura);
        const cantidadTotalCultura = Object.keys(response.data.cultura).length;

        const cantidadTotalContribuciones = Object.keys(
          response.data.contribuciones
        ).length;
        const contribuciones = sumarValoresDiccionario(
          response.data.contribuciones
        );

        const nuevoPorcHistoria = (historia / cantidadTotalHistoria) * 100;
        setPorcHistoria(nuevoPorcHistoria); // Actualizar el estado 'now' con el nuevo valor

        const nuevoPorcCultura = (cultura / cantidadTotalCultura) * 100;
        setPorcCultura(nuevoPorcCultura); // Actualizar el estado 'now' con el nuevo valor

        const nuevoPorcContribuciones =
          (contribuciones / cantidadTotalContribuciones) * 100;
        setPorcContribuciones(nuevoPorcContribuciones); // Actualizar el estado 'now' con el nuevo valor
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    // Realiza una solicitud POST al servidor para los aciertos y fallos del quiz de historia
    axios;
    api
      .post("/china/get_valores_historia/", { username })
      .then((response) => {
        setaciertosHistoria(response.data.aciertos_historia);
        setfallosHistoria(response.data.fallos_historia);
        })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    // Realiza una solicitud POST al servidor para los aciertos y fallos del quiz de cultura
    axios;
    api
      .post("/china/get_valores_cultura/", { username })
      .then((response) => {
        setaciertosCultura(response.data.aciertos_cultura);
        setfallosCultura(response.data.fallos_cultura);
        })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    // Realiza una solicitud POST al servidor para los aciertos y fallos del quiz de contribuciones
    axios;
    api
      .post("/china/get_valores_contribuciones/", { username })
      .then((response) => {
        setaciertosContribuciones(response.data.aciertos_contribuciones);
        setfallosContribuciones(response.data.fallos_contribuciones);
        })
      .catch((error) => {
        console.error(error);
      });
  });

  /**
   * Suma los valores de un diccionario.
   *
   * @param {object} diccionario - El diccionario cuyos valores se sumarán.
   * @returns {number} - La suma total de los valores del diccionario.
   */

  function sumarValoresDiccionario(diccionario) {
    let sumaTotal = 0;

    // Recorrer cada clave del diccionario
    for (let clave in diccionario) {
      // Verificar si la clave pertenece al diccionario y no a su prototipo
      if (diccionario.hasOwnProperty(clave)) {
        // Sumar el valor de la clave a la suma total
        sumaTotal += diccionario[clave];
      }
    }

    return sumaTotal;
  }

    /**
  * Maneja el envío del formulario y actualiza la contraseña.
  */
    const handleSubmit3 = () => {
        axios;
        api
          .post('/china/update_valores_historia/', {
            username: sessionStorage.getItem("username"),
            aciertos_historia: 0,
            fallos_historia: 0,
          })
          .then((response) => {
            console.log("Se ha actualizado los fallos y aciertos");
            
            //sessionStorage.removeItem("username");
            //navigate("/inicio");
          })
          .catch((error) => {
            console.error("Error al realizar el update", error);
          });
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

        <div className="container my-2">
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
              <button
                className="bton-quiz historia"
                disabled={porcHistoria < 100}
              >
                Quiz Historia
              </button>
              {porcHistoria >= 100 ? (
                <>
                  <p className="acierto">
                    <img src="/images/comprobado.png" alt="" />
                    Aciertos:
                  </p>
                  <p className="acierto">
                    {aciertosHistoria}
                  </p>
                  <p className="fallos">
                    <img src="/images/cancelar.png" alt="" />
                    Fallos:
                  </p>
                  <p className="fallos">
                    {fallosHistoria}
                  </p>
                  
                </>
              ) : (
                <h2 className="no-disponible">No disponible</h2>
              )}
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcHistoria}
                label={`${porcHistoria.toFixed(2)}%`}
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
            </div>

            <div className="col perfil-column">
              <button
                className="bton-quiz cultura"
                disabled={porcCultura < 100}
              >
                Quiz Cultura
              </button>
              {porcCultura >= 100 ? (
                <>
                  <p className="acierto">
                    <img src="/images/comprobado.png" alt="" />
                    Aciertos:
                  </p>
                  <p className="acierto">
                    {aciertosCultura}
                  </p>
                  <p className="fallos">
                    <img src="/images/cancelar.png" alt="" />
                    Fallos:
                  </p>
                  <p className="fallos">
                    {fallosCultura}
                  </p>
                </>
              ) : (
                <h2 className="no-disponible">No disponible</h2>
              )}
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcCultura}
                label={`${porcCultura.toFixed(2)}%`}
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
            </div>

            <div className="col perfil-column">
              <button
                className="bton-quiz contribuciones"
                disabled={porcContribuciones < 100}
                onClick={() => {handleClick(); }}
              >
                Quiz Contribuciones
              </button>
              {porcContribuciones >= 100 ? (
                <>
                  <p className="acierto">
                    <img src="/images/comprobado.png" alt="" />
                    Aciertos:
                  </p>
                  <p className="acierto">
                    {aciertosContribuciones}
                  </p>
                  <p className="fallos">
                    <img src="/images/cancelar.png" alt="" />
                    Fallos:
                  </p>
                  <p className="fallos">
                    {fallosContribuciones}
                  </p>
                </>
              ) : (
                <h2 className="no-disponible">No disponible</h2>
              )}
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcContribuciones}
                label={`${porcContribuciones.toFixed(2)}%`}
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
