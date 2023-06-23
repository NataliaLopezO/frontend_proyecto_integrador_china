import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Modelo_dinastia } from "../../components/Modelo_dinastia";
import { Canvas } from "react-three-fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import "../../scss/artesanias_style.css";

/**
 * Página principal de la sección de artesanías.
 *
 * Muestra información sobre diferentes formas de artesanía en la antigua China,
 * como la pintura china, la cerámica y la porcelana.
 */

export function Artesanias() {
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

  const [showModal2, setShowModal2] = useState(false);

  const handleModalOpen2 = () => {
    setShowModal2(true);
  };

  /**
   * Cierra el modal.
   * Actualiza el estado 'showModal' a false para ocultar el modal.
   */
  const handleModalClose2 = () => {
    setShowModal2(false);
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
          <h1>Artesanias</h1>
        </div>

        <div
          className="container cont-artesanias"
          style={{ marginTop: "1rem", padding: "1rem" }}
        >
          <div className="row">
            <div className="col cont-img-pint">
              <img
                className="img-pint"
                src="/images/pintura-china.jpg"
                alt=""
              />
            </div>
            <div className="col cont-pintu">
              <h2 className="titulo-artesa">Pintura China</h2>
              <p className="parraf-artesa">
                Otra de las formas más destacadas de artesanía en la antigua
                China era la cerámica y la porcelana. Estas artesanías se
                desarrollaron durante la dinastía Han y alcanzaron su apogeo
                durante la dinastía Tang y la dinastía Song. Los antiguos
                alfareros chinos creaban delicados utensilios de cerámica y
                elegantes vasijas decorativas, utilizando técnicas como el
                modelado a mano, el torno de alfarero y el vidriado. Los objetos
                de cerámica y porcelana chinos eran famosos en todo el mundo y
                aún hoy en día son apreciados por su calidad y belleza.
              </p>
            </div>
            <div className="cont-mod-pintura">
              <Button
                type="button"
                className="boton-pint"
                size="md"
                onClick={handleModalOpen}
                variant="primary"
              >
                VER
              </Button>
            </div>
          </div>
        </div>

        <div className="container cont-imagenes-row2">
          <div className="row">
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/pintura-china2.jpg"
                  alt=""
                />
                Pintura china en la dinastia Tang
              </a>
            </div>
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/pintura-china3.jpg"
                  alt=""
                />
                Paisaje Pintura china
              </a>
            </div>
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/pintura-china4.jpg"
                  alt=""
                />
                Magnolias, pintura china
              </a>
            </div>
          </div>
        </div>

        <div
          className="container cont-cerami"
          style={{ marginTop: "1rem", padding: "1rem" }}
        >
          <div className="row">
            <div className="col cont-cerami-2">
              <h2 className="titulo-cerami">Cerámica y porcelana</h2>
              <p className="parraf-cerami">
                Otra de las formas más destacadas de artesanía en la antigua
                China era la cerámica y la porcelana. Estas artesanías se
                desarrollaron durante la dinastía Han y alcanzaron su apogeo
                durante la dinastía Tang y la dinastía Song. Los antiguos
                alfareros chinos creaban delicados utensilios de cerámica y
                elegantes vasijas decorativas, utilizando técnicas como el
                modelado a mano, el torno de alfarero y el vidriado. Los objetos
                de cerámica y porcelana chinos eran famosos en todo el mundo y
                aún hoy en día son apreciados por su calidad y belleza.
              </p>
            </div>
            <div className="col cont-img-pint">
              <img
                className="img-cer"
                src="/images/ceramica-china.jpg"
                alt=""
              />
            </div>
            <div className="cont-mod-cerami">
              <Button
                type="button"
                className="boton-pint"
                size="md"
                onClick={handleModalOpen2}
                variant="primary"
              >
                VER
              </Button>
            </div>
          </div>
        </div>

        <div className="container cont-imagenes-row2">
          <div className="row">
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/ceramica-china2.jpg"
                  alt=""
                />
                Vasijas, Neolítico medio y tardío (5000-2050 a.C.) Culturas
                Yangshao y Majiayao
              </a>
            </div>
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/ceramica-china3.jpg"
                  alt=""
                />
                Jarrón pintado de la cultura Majiayao, final del período
                neolítico (3300 a 2200 a. C.)
              </a>
            </div>
            <div className="col">
              <a>
                <img
                  className="img-pint-2"
                  src="/images/ceramica-china4.jpg"
                  alt=""
                />
                Porcelana azul y blanca de la dinastía Ming (1368-1644 d.C.).
                Del reinado de Chenghua, 1465-1487 d.C. (Museo Británico,
                Londres)
              </a>
            </div>
          </div>
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
                {/* Controles */}
                <OrbitControls makeDefault />

                {/* Luces */}
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
        </Modal>

        <Modal
          show={showModal2}
          onHide={handleModalClose2}
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
                {/* Controles */}
                <OrbitControls makeDefault />

                {/* Luces */}
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
                handleModalClose2();
              }}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Tradiciones"
            imagen="/images/tradicion-icono.png"
            identificador={123}
            href="/tradiciones"
          />

          <Boton_next
            nombre="Festividades"
            imagen="/images/festividades-icono.png"
            identificador="cultura"
            href="/festividades"
            categoria="artesanias"
          />
        </div>
      </main>
    </>
  );
}
