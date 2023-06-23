import React from "react";
import { Boton_back } from "../components/boton-back";
import { Ahorcado } from "../components/hangMan-tablero";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

export function Hang_man() {
  return (
    <>
      <main className="contenedor-perfil">
        <div className="settings">
          <h1 className="titulo-settings">Hang Man</h1>
        </div>

        <div className="contenedor-ahorcado my-5" style = {{display:"flex", justifyContent:"center"}}>
          <Ahorcado />
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Minijuegos"
            imagen="/images/dinastia-icono.png"
            identificador={123}
            href="/minijuegos"
          />
        </div>
      </main>
    </>
  );
}
