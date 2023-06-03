import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/historia_style.css";
import "../../scss/boton_toggler_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";

export function Arquitectura() {
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
          <h1>Arquitectura</h1>
        </div>

        <div className="contenido-tradiciones">
          <div className="cultura-parrafo">
            <p>
             AQUI HABRÁ INFORMACION SOBRE LA ARQUITECTURA USADA POR LA CULTURA ANTIGUA CHINA
            </p>
          </div>
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Dinastias"
            imagen="/images/dinastia-icono.png"
            identificador={123}
            href="/dinastias"
          />

          <Boton_next
            nombre="Historia"
            imagen="/images/historia-icono.png"
            identificador={123}
            href="/historia"
          />
        </div>
      </main>
    </>
  );
}
