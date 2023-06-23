import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import { NavLink } from "react-router-dom";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";
import "../scss/minijuegos_style.css";

/**
 * Componente que muestra la página de Minijuegos.
 * Permite al usuario acceder a diferentes juegos como MemoCard, Ahorcado y Scrabble.
 */

export function Minijuegos() {
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
          <h1 className="titulo-settings">Minijuegos</h1>
        </div>

        <div className="ola">
          <div className="contenedor-botones-juegos my-5">
            <NavLink
              exact="true"
              to="/memoCard"
              className="nav-link"
              activeclassname="active"
            >
              <button className="memoGame text-center">
                <img src="/images/memoIcon.png" alt="" />
                MemoCard
              </button>
            </NavLink>

            <NavLink
              exact="true"
              to="/hangman"
              className="nav-link"
              activeclassname="active"
            >
              <button className="memoGame text-center">
                <img src="/images/horcaIcon.png" alt="" />
                Ahorcado
              </button>
            </NavLink>

            <NavLink
              exact="true"
              to="/scrabble"
              className="nav-link"
              activeclassname="active"
            >
              <button className="memoGame text-center">
                <img src="/images/scrabbleIcon.png" alt="" />
                Scrabble
              </button>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
