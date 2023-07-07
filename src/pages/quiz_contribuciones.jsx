import React, { useState, useEffect } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import { api } from "../api/register_api";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../scss/quices_style.css";

export function Quiz_contribuciones() {
  const [data, setData] = useState([]);
  const [preguntas, setPreguntas] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [opcion, setOpcion] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

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

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api
      .get("/china/preguntas_aportes/")
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

  const selectOption = (esCorrecta, opcionSeleccionada) => {
    if (esCorrecta) {
      setOpcion("correcta");
    } else {
      setOpcion("incorrecta");
    }
    setOpcionSeleccionada(opcionSeleccionada);
  };

  const verificarRespuesta = () => {
    setMensajeVisible(true);

    if (opcion === "correcta") {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }

    if (currentQuestionIndex === preguntas.length - 1) {
      // Última pregunta, mostrar resultados
      setTimeout(() => {
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

  const restartQuiz = () => {
    setQuizCompleted(false);
    setPreguntas([]);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
    navigate('/profile');
  };

  const showResults = () => {
    alert(`Respondiste correctamente ${correctAnswersCount} preguntas.`);
    setQuizCompleted(true);
    console.log(correctAnswersCount)
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

        {quizCompleted ? (
          <div className="text-center">
            <p>
              Quiz completado. Has respondido correctamente{" "}
              {correctAnswersCount} preguntas.
            </p>
            <button onClick={restartQuiz}>Volver al perfil</button>
          </div>
        ) : (
          <div className="tarjeta-preguntas mt-5">
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
          <Modal.Header closeButton>
            <Modal.Title>Tu respuesta</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tu respuesta es {opcion} </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setMensajeVisible(false)}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}
