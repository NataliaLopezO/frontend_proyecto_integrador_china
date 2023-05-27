import { useState } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

export function Cultura() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    className={`contenedor-perfil ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="cultura">
          <h1 className="titulo-cultura">Cultura</h1>
        </div>
        <div className="formulario-settings">
          Cultura
          
        </div>
      </main>
    </>
  );
}
