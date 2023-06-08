import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Button, Modal } from "react-bootstrap";
import "../../scss/contribuciones_style.css";
import "../../scss/boton_toggler_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Canvas } from "react-three-fiber";
import { Modelo_dinastia } from "../../components/Modelo_dinastia";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Float, Text, OrbitControls } from "@react-three/drei";


/**
* 
*Componente de detalle de contribuciones.
*Este componente muestra la interfaz donde se van a presentrar las contribuciones u aportes
*
**/

export function Detalle() {
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

  const [showModal, setShowModal] = useState(false);

  /**
   * Abre el modal.
   * Actualiza el estado 'showModal' a true para mostrar el modal.
   */

  const handleModalOpen = () => {
    setShowModal(true);
  };

  /**
   * Cierra el modal.
   * Actualiza el estado 'showModal' a false para ocultar el modal.
   */
  const handleModalClose = () => {
    setShowModal(false);
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
        className={`contenedor-historia ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="historia-titulo">
          <h1>Inventos y Contribuciones</h1>
        </div>

        <div className="contenido-dinastias">
          <div className="dinastias-parrafo">
            <p>
                ¡Bienvenido a conocer sobre los inventos y contribuciones de la
                civilización china antigua!. Los cuatro grandes inventos de la
                Antigua China, la brújula, la pólvora, el papel y la imprenta,
                además de otras contribuciones como la tinta y la acupuntura, se 
                encuentran entre los avances tecnológicos más importantes. En particular, 
                la época de la Dinastía Tang (618-906) fue de gran innovación. En este módulo
                introductorio, nuestro objetivo es sumergirnos en el rico legado
                de la antigua civilización china, proporcionando información
                clara y accesible sobre estos temas fascinantes. Acompáñanos en
                este viaje a través del tiempo y el espacio, mientras exploramos
                los aportes tecnológicos y lingüísticos de la antigua China y su
                influencia en la historia y la cultura de la humanidad.
                ¡Empecemos este emocionante viaje de descubrimiento juntos!
            </p>
          </div>
        </div>

        <div className="botones-dinastias">
          <NavLink
            exact="true"
            to="/brujula"
            className="nav-link"
            activeclassname="active"
          >
            <button>BRÚJULA</button>
          </NavLink>

          <NavLink
            exact="true"
            to="/polvora"
            className="nav-link"
            activeclassname="active"
          >
            <button>POLVORA</button>
          </NavLink>

          <NavLink
            exact="true"
            to="/papel"
            className="nav-link"
            activeclassname="active"
          >
            <button>PAPEL & TINTA</button>
          </NavLink>
          
          <NavLink
            exact="true"
            to="/imprenta"
            className="nav-link"
            activeclassname="active"
          >
            <button>IMPRENTA</button>
          </NavLink>
          
          <NavLink
            exact="true"
            to="/acupuntura"
            className="nav-link"
            activeclassname="active"
          >
            <button>ACUPUNTURA</button>
          </NavLink>
        </div>

        {/*<div className="boton-modelo">
          <Button
            type="button"
            className="boton-dinastia btn btn-danger my-5 mx-5"
            size="md"
            onClick={handleModalOpen}
            variant="primary"
          >
            Guerrero de Terracota
          </Button>
      </div>

        <Modal
          show={showModal}
          onHide={handleModalClose}
          centered
          backdrop="static"
        >
          <Modal.Header>
            <Modal.Title>Guerrero Chino</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="modelo-dinastia"
              style={{
                width: "100%",
                height: "500px",
                marginBottom: "0",
              }}
            >
              <Canvas
                camera={{
                  fov: 45,
                  near: 0.005,
                  far: 800,
                  position: [300, 5, -150],
                }}
              >
              
                <OrbitControls makeDefault />

                <directionalLight position={[5, 1, 6]} intensity={0.7} />
                <ambientLight intensity={0.5} />

                <Modelo_dinastia
                  position={[-10, -50, 10]}
                  scale={20}
                ></Modelo_dinastia>
              </Canvas>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="secondary"
              onClick={() => {
                handleModalClose();
              }}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>*/}

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
            
          <Boton_back
            nombre="Introducción"
            imagen="/images/icono-contribuciones.png"
            identificador={123}
            href="/contribuciones"
          />
       
          
          
        </div>
      </main>
    </>
  );
  
}
