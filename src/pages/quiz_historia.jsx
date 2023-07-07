import React, { useState, useEffect } from "react";
import { api } from "../api/register_api";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../scss/quices_style.css";

/**
 * Componente de React que representa un cuestionario de historia.
 * Proporciona una serie de preguntas con opciones de respuesta, permite al usuario seleccionar una opción
 * y verifica si la respuesta es correcta. Al finalizar el cuestionario, muestra los resultados al usuario.
 */

export function Quiz_historia() {
  // Definición de estados utilizando el hook useState
  const username = sessionStorage.getItem("username");
  const [data, setData] = useState([]);
  const [preguntas, setPreguntas] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [opcion, setOpcion] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const [aciertosHistoria, setaciertosHistoria] = useState(2);
  const [fallosHistoria, setfallosHistoria] = useState(2);

  /**
   * Efecto secundario que se ejecuta al montar el componente.
   * Realiza una solicitud POST al servidor para obtener los aciertos y fallos del quiz de historia.
   */

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

  /**
   * Función que se encarga de enviar los aciertos y fallos al servidor.
   * Actualiza los valores de aciertos y fallos en el estado y realiza una solicitud POST al servidor
   * para guardar los cambios en la base de datos.
   */

  const envioAciertoFallos = () => {
    let aciertos = aciertosHistoria;
    let fallos = fallosHistoria;

    if (correctAnswersCount === 4) {
      aciertos += 1;
    } else {
      fallos += 1;
    }

    axios;
    api
      .post("/china/update_valores_historia/", {
        username: username,
        aciertos_historia: aciertos,
        fallos_historia: fallos,
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

  /**
   * Función que baraja el orden de los elementos en un array.
   * Utiliza el algoritmo de Fisher-Yates para mezclar aleatoriamente los elementos del array.
   * @param {Array} array - El array que se desea barajar.
   * @returns {Array} - El array barajado.
   */

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /**
   * Efecto secundario que se ejecuta al montar el componente.
   * Realiza una solicitud al servidor para obtener las preguntas de historia.
   */

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Función que realiza una solicitud al servidor para obtener las preguntas de historia.
   * Actualiza el estado 'preguntas' con las preguntas seleccionadas y barajadas.
   */

  const fetchData = () => {
    api
      .get("/china/preguntas_historia/")
      .then((response) => {
        setData(response.data);
        const shuffledPreguntas = shuffle(response.data);
        const selectedPreguntas = shuffledPreguntas.slice(0, 5);
        setPreguntas(selectedPreguntas);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /**
   * Función que se ejecuta al seleccionar una opción de respuesta.
   * Actualiza el estado 'opcion' con la categoría de la opción seleccionada ('correcta' o 'incorrecta').
   * Actualiza el estado 'opcionSeleccionada' con la opción seleccionada por el usuario ('a', 'b', o 'c').
   * @param {boolean} esCorrecta - Indica si la opción seleccionada es la correcta.
   * @param {string} opcionSeleccionada - La opción seleccionada por el usuario.
   */

  const selectOption = (esCorrecta, opcionSeleccionada) => {
    if (esCorrecta) {
      setOpcion("correcta");
    } else {
      setOpcion("incorrecta");
    }
    setOpcionSeleccionada(opcionSeleccionada);
  };

  /**
   * Función que se ejecuta al verificar la respuesta seleccionada por el usuario.
   * Muestra el mensaje de respuesta durante un tiempo determinado.
   * Si la respuesta es correcta, incrementa el contador de respuestas correctas.
   * Si es la última pregunta, muestra los resultados y envía los aciertos y fallos al servidor.
   * En caso contrario, avanza a la siguiente pregunta.
   */

  const verificarRespuesta = () => {
    setMensajeVisible(true);

    setTimeout(() => {
      setMensajeVisible(false);
    }, 2000); // Cierra el modal después de 2000 milisegundos (2 segundos)

    if (opcion === "correcta") {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
      console.log(correctAnswersCount);
    }

    if (currentQuestionIndex === preguntas.length - 1) {
      // Última pregunta, mostrar resultados
      setTimeout(() => {
        envioAciertoFallos();
        showResults();
      }, 2000);
    } else {
      // Avanzar a la siguiente pregunta
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setOpcion("");
        setOpcionSeleccionada("");
      }, 2000);
    }
  };

  /**
   * Función que reinicia el cuestionario.
   * Restablece los estados y redirige al perfil del usuario.
   */

  const restartQuiz = () => {
    setQuizCompleted(false);
    setPreguntas([]);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
    navigate("/profile");
  };

  /**
   * Función que muestra los resultados del cuestionario completado.
   * Establece el estado 'quizCompleted' a true.
   */

  const showResults = () => {
    setQuizCompleted(true);
  };

  return (
    <>
      <main className="contenedor-perfil page-quiz">
        <div className="settings">
          <h1 className="titulo-settings">Quiz Historia</h1>
        </div>

        {quizCompleted ? (
          <>
          <div className="parent-mostrar-resultados">
            <div className="mostrar-resultados ">
              <p>
                Quiz completado. Has respondido correctamente{" "}
                <span
                    style={{
                      color:
                      correctAnswersCount === 5
                          ? "green"
                          : "red",
                    }}
                  >
                    {correctAnswersCount}{" "}
                  </span> preguntas.
              </p>
            </div>
            <button
              className="volver-Perfil"
              onClick={() => {
                restartQuiz();
              }}
            >
              Volver al perfil
            </button>
          </div>
        </>
        ) : (
          <div className="tarjeta-preguntas mt-5">
            <h2>Pregunta {currentQuestionIndex + 1}/5</h2>
            {preguntas.length > 0 &&
              currentQuestionIndex < preguntas.length && (
                <>
                  <div className="tarjeta-header">
                    <header>
                      <p className="titulo-pregunta">
                        {preguntas[currentQuestionIndex].pregunta}
                      </p>
                    </header>
                  </div>
                  <div className="tarjeta-body">
                    <div className="radio-container">
                      <input
                        type="radio"
                        className="input-radio"
                        id="one-a"
                        name="yes-1"
                        onChange={() =>
                          selectOption(
                            preguntas[currentQuestionIndex].opcion1
                              .es_respuesta_correcta,
                            "a"
                          )
                        }
                        checked={opcionSeleccionada === "a"}
                        required
                      />
                      <label
                        className={`radio ${
                          opcionSeleccionada === "a" ? "selected" : ""
                        }`}
                        htmlFor="one-a"
                      >
                        <span className="alphabet">A.</span>{" "}
                        {preguntas[currentQuestionIndex].opcion1.texto_opcion}
                      </label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        className="input-radio"
                        id="one-b"
                        name="yes-1"
                        onChange={() =>
                          selectOption(
                            preguntas[currentQuestionIndex].opcion2
                              .es_respuesta_correcta,
                            "b"
                          )
                        }
                        checked={opcionSeleccionada === "b"}
                      />
                      <label
                        className={`radio ${
                          opcionSeleccionada === "b" ? "selected" : ""
                        }`}
                        htmlFor="one-b"
                      >
                        <span className="alphabet">B.</span>{" "}
                        {preguntas[currentQuestionIndex].opcion2.texto_opcion}
                      </label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        className="input-radio"
                        id="one-c"
                        name="yes-1"
                        onChange={() =>
                          selectOption(
                            preguntas[currentQuestionIndex].opcion3
                              .es_respuesta_correcta,
                            "c"
                          )
                        }
                        checked={opcionSeleccionada === "c"}
                      />
                      <label
                        className={`radio ${
                          opcionSeleccionada === "c" ? "selected" : ""
                        }`}
                        htmlFor="one-c"
                      >
                        <span className="alphabet">C.</span>{" "}
                        {preguntas[currentQuestionIndex].opcion3.texto_opcion}
                      </label>
                    </div>
                  </div>

                  <a
                    className="btn-verificar mt-3"
                    id="btn"
                    type="submit"
                    onClick={verificarRespuesta}
                  >
                    Verificar
                  </a>
                </>
              )}
          </div>
        )}
        <Modal show={mensajeVisible} onHide={() => setMensajeVisible(false)}>
          <Modal.Header>
            <Modal.Title>
              Tu respuesta es{" "}
              <span style={{ textTransform: "uppercase" }}>
                {opcionSeleccionada}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tu respuesta es{" "}
            <span
              style={{
                textTransform: "uppercase",
                color:
                  opcion === "correcta"
                    ? "green"
                    : opcion === "incorrecta"
                    ? "red"
                    : "inherit",
              }}
            >
              {opcion}
            </span>
          </Modal.Body>
        </Modal>
      </main>
    </>
  );
}
