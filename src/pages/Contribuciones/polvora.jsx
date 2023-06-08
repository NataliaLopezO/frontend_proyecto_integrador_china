import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/user_profile_style.css";
import "../../scss/boton_toggler_style.css";
import "../../scss/contribuciones_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Modelo } from "../../components/ModeloDragonCute";
import { Canvas } from "react-three-fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";

/**
 * Componente de contribuciones.
 *
 * Este componente muestra la interfaz de contribuciones introductoria
 */

export function Polvora() {
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
        <div className="historia-titulo">
          <h1>Inventos y Contribuciones</h1>
        </div>

        <Boton_back
          nombre="Aportes"
          imagen="/images/icono-contribuciones.png"
          identificador={123}
          href="/ver-contribuciones"
        />


      </main>
    </>
  );
}
