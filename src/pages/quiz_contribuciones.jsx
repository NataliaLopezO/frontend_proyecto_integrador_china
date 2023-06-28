import React from "react";
import { useState, useEffect } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";
import "../scss/quiz_contribuciones_style.css";
import "../scss/quices_style.css";
import { api } from "../api/register_api";
import { Button, Modal } from "react-bootstrap";
/**
 * Componente del quiz de contribuciones.
 *
 * Este componente muestra la interfaz del quiz de contribuciones con sus respectivas preguntas.
 */

export function Quiz_contribuciones() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [preguntas, setPreguntas] = useState([]);
  const [opcion, setOpcion] = useState("");
  const [mensajeVisible, setMensajeVisible] = useState(false);

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

  /**
   * Alternar la variable opcion entre "correcta" y "incorrecta".
   *
   * Esta función cambia el estado de la variable 'opcion' para controlar
   * si la opcion seleccionada en una respectiva pregunta es la correcta o no.
   */

  const selectOption = (esCorrecta) => {
    if (esCorrecta) {
      setOpcion("correcta");
    } else {
      setOpcion("incorrecta");
    }
  };

  /**
   * Verifica si la opcion que selecciono es la correcta o no.
   *
   * Activa un boton para mostrar un mensaje en la pantalla que indica si la respuesta fue correcta o no
   */

  const verificarRespuesta = () => {
    setMensajeVisible(true);
  };

  /**
   *  Hook de React que permite ejecutar efectos secundarios en componentes funcionales
   *
   * En este caso, se está utilizando para llamar a la función fetchData una vez, cuando el
   * componente se monta por primera vez (debido al arreglo vacío como segundo argumento [])
   */

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Realiza una solicitud HTTP para obtener datos desde el endpoint "/china/preguntas_aportes/".
   *
   * Hace una llamada a una API para obtener datos desde el endpoint "/china/preguntas_aportes/".
   * Una vez que se recibe la respuesta exitosa, se llama a la función selectPreguntas con los datos
   * recibidos y el número 2 como argumentos. En caso de error, muestra un mensaje de error en la consola.
   */

  const fetchData = () => {
    api
      .get("/china/preguntas_aportes/")
      .then((response) => {
        selectPreguntas(response.data, 2);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /**
   * Selecciona un número específico de preguntas al azar de la lista de datos recibidos.
   *
   * Selecciona un número específico de preguntas al azar de una lista de datos de preguntas.
   * La función toma dos parámetros: "data", que representa la lista de datos de preguntas, y "cant",
   * que indica la cantidad de preguntas a seleccionar. La función actualiza el estado de las preguntas
   * seleccionadas y garantiza que no se repitan preguntas en la selección. No devuelve ningún valor.
   */

  const selectPreguntas = (data, cant) => {
    const listaClonada = data;
    const elementosAlAzar = [];
    setData(data);
    while (elementosAlAzar.length < cant && listaClonada.length > 0) {
      // Generar un índice aleatorio
      const indice = Math.floor(Math.random() * listaClonada.length);

      // Agregar el elemento correspondiente al índice aleatorio a la lista de elementos al azar
      elementosAlAzar.push(listaClonada[indice]);
      setPreguntas(elementosAlAzar);

      // Eliminar el elemento seleccionado de la lista clonada
      listaClonada.splice(indice, 1);
    }
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
          <h1 className="titulo-settings">Quiz Contribuciones</h1>
        </div>

        <div className="centered-div">
          {preguntas.map((item) => (
            <div key={item.id} className="quiz-options text-center">
              {/* Pregunta */}

              <header>
                <p className="centered-div">{item.pregunta}</p>
              </header>

              {/* Respuestas */}

              {/* Opcion 1 */}
              <div>
                <input
                  type="radio"
                  className="input-radio"
                  id="one-a"
                  name="yes-1"
                  onChange={() => {
                    selectOption(item.opcion1.es_respuesta_correcta);
                  }}
                  required
                />
                <label className="radio-label" for="one-a">
                  <span className="alphabet">A</span>{" "}
                  {item.opcion1.texto_opcion}
                </label>

                {/* Opcion 2 */}

                <input
                  type="radio"
                  className="input-radio"
                  id="one-b"
                  name="yes-1"
                  onChange={() => {
                    selectOption(item.opcion2.es_respuesta_correcta);
                  }}
                />
                <label className="radio-label" for="one-b">
                  <span className="alphabet">B</span>{" "}
                  {item.opcion2.texto_opcion}
                </label>

                {/* Opcion 3 */}

                <input
                  type="radio"
                  className="input-radio"
                  id="one-c"
                  name="yes-1"
                  onChange={() => {
                    selectOption(item.opcion3.es_respuesta_correcta);
                  }}
                />
                <label className="radio-label" for="one-c">
                  <span className="alphabet">C</span>{" "}
                  {item.opcion3.texto_opcion}
                </label>
              </div>

              {/* Verificar respuesta */}

              <a id="btn" type="submit" onClick={verificarRespuesta}>
                Verificar
              </a>
            </div>
          ))}

          <Modal show={mensajeVisible} onHide={() => setMensajeVisible(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Tu respuesta</Modal.Title>
            </Modal.Header>
            <Modal.Body>Tu respuesta es {opcion}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setMensajeVisible(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </main>
    </>
  );
}
