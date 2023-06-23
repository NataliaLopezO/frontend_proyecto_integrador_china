import React from "react";
import { Boton_back } from "../components/boton-back";
import {SoupGame} from "../components/sopa-tablero"
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

/**
 * Componente para el juego de Scrabble.
 * Presenta el tablero de juego de búsqueda de palabras.
 * Los usuarios pueden jugar y encontrar palabras ocultas en la cuadrícula.
 */

export function Scrabble() {
  return (
    <>
      <main className="contenedor-perfil">
        <div className="settings">
          <h1 className="titulo-settings">Scrabble</h1>
        </div>

        <div className="text-center">
          <SoupGame />
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
