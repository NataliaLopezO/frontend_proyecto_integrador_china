import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/historia_style.css";
import "../../scss/boton_toggler_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Float, Text, OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Boton_next } from "../../components/boton-next";

import { Modelo } from "../../components/ModeloDragonCute";

export function Cultura() {
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
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
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
          <h1>Cultura</h1>
        </div>

        <div className="contenido-historia">
          <h2 className="titulo-hist">¡Bienvenido al módulo de cultura!</h2>
          <p>
            ¡Bienvenido a conocer sobre las costumbres en la civilización china
            antigua! En este módulo introductorio, exploraremos las fascinantes
            tradiciones y prácticas de la antigua civilización china. Con una
            historia milenaria y una cultura rica y diversa, China ha dejado un
            legado importante en el mundo. Acompáñanos en este viaje para
            descubrir algunas de las costumbres más destacadas que influyeron en
            la vida cotidiana de los antiguos chinos.
          </p>
          <div className="contenedor-hijo-Hist-izq">
            <img src="/images/saludochina.png" alt="" />
            <p>
              1. Los chinos antiguos daban gran importancia a la etiqueta y el
              respeto hacia los demás. El saludo más común era el saludo de
              cortesía, que se realizaba inclinando ligeramente la cabeza.
              También se valoraba mucho el respeto a los ancianos y a los
              líderes comunitarios.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-der">
            <img src="/images/festividad.jpg" alt="" />
            <p>
              2. China es famosa por sus coloridas festividades. Entre las más
              importantes se encuentra el Año Nuevo Chino, una celebración que
              marca el inicio del nuevo año lunar. Durante esta festividad, las
              familias se reúnen para disfrutar de banquetes, danzas del león y
              del dragón, y fuegos artificiales.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-izq">
            <img src="/images/taoismo.png" alt="" />
            <p>
              3. China es el hogar de varias escuelas de pensamiento filosófico,
              como el confucianismo, el taoísmo y el budismo. Estas filosofías
              han influido profundamente en la mentalidad y los valores de los
              antiguos chinos. El confucianismo, en particular, promovía la
              importancia de la moral, la virtud y las relaciones humanas
              armoniosas.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-der">
            <img src="/images/familia.png" alt="" />
            <p>
              4. La familia era el núcleo de la sociedad china antigua. Se
              valoraba la obediencia y el respeto hacia los padres y los
              ancianos. Además, se seguían tradiciones como la reunión familiar
              durante el Festival del Barco Dragón y el cuidado de los padres en
              su vejez.
            </p>
          </div>

          <div style={{ width: "400px", height: "800px" }}>
            <Canvas
              camera={{
                fov: 45,
                near: 0.03,
                far: 800,
                position: [-1, 7, 10],
              }}
            >
              {/*Controles*/}
              <OrbitControls makeDefault />

              {/*Luces*/}
              <directionalLight position={[1, 2, 3]} intensity={1.5} />
              <ambientLight intensity={0.5} />

              {/*Templo Griego*/}
              <Modelo scale={20}></Modelo>

              {/* {/*Piso
              <mesh  position-y={-0.3} rotation-x={- Math.PI*0.5} scale={10}>
              <planeGeometry />
              <meshStandardMaterial/>
              </mesh>
              */}
            </Canvas>
          </div>

          <Boton_next
            nombre="Tradiciones"
            imagen="/images/tradicion-icono.png"
            identificador={123}
            href="/dinastias"
          />

          {/*           <h2
              className="titulo-hist"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              Mas información sobre las dinastias
            </h2> */}
          {/*           <div className="botones-dinasty">
              <button className="dinasty">
                <span className="button-content">
                  <img
                    src="/images/dinastia-icono.png"
                    alt="Imagen"
                    className="button-icon"
                  />
                  XIA
                </span>
              </button>
              <button className="dinasty">
                <span className="button-content">
                  <img
                    src="/images/dinastia-icono.png"
                    alt="Imagen"
                    className="button-icon"
                  />
                  SHANG
                </span>
              </button>
              <button className="dinasty">
                <span className="button-content">
                  <img
                    src="/images/dinastia-icono.png"
                    alt="Imagen"
                    className="button-icon"
                  />
                  ZHOU
                </span>
              </button>
              <button className="dinasty">
                <span className="button-content">
                  <img
                    src="/images/dinastia-icono.png"
                    alt="Imagen"
                    className="button-icon"
                  />
                  QIN
                </span>
              </button>
              <button className="dinasty">
                <span className="button-content">
                  <img
                    src="/images/dinastia-icono.png"
                    alt="Imagen"
                    className="button-icon"
                  />
                  HAN
                </span>
              </button>
            </div> */}
        </div>
      </main>
    </>
  );
}
