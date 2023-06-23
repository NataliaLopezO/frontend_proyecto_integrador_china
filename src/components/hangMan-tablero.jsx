import React, { useState, useEffect } from "react";
import "../scss/hangMan_style.css";

/**
 * Componente que representa el juego del Ahorcado basado en la civilización antigua de China.
 * El objetivo del juego es adivinar una palabra oculta antes de quedarse sin intentos.
 */

export const Ahorcado = () => {
  const [palabra, setPalabra] = useState("");
  const [palabraOculta, setPalabraOculta] = useState("");
  const [letrasAdivinadas, setLetrasAdivinadas] = useState([]);
  const [intentosRestantes, setIntentosRestantes] = useState(6);
  const [estadoJuego, setEstadoJuego] = useState("");

  const palabras = [
    "emperador",
    "mural",
    "porcelana",
    "seda",
    "dinastia",
    "confucio",
    "arroz",
    "buda",
    "dragón",
  ];

  /**
   * Selecciona una palabra aleatoria del arreglo de palabras disponibles.
   * @returns {string} Palabra aleatoria seleccionada.
   */

  const seleccionarPalabraAleatoria = () => {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
  };

  /**
   * Inicializa el juego estableciendo una nueva palabra oculta, letras adivinadas,
   * intentos restantes y estado del juego.
   */

  const inicializarJuego = () => {
    const palabraAleatoria = seleccionarPalabraAleatoria();
    setPalabra(palabraAleatoria);
    setPalabraOculta("_".repeat(palabraAleatoria.length));
    setLetrasAdivinadas([]);
    setIntentosRestantes(4);
    setEstadoJuego("");
  };

  /**
   * Maneja el evento de selección de una letra.
   * Actualiza la palabra oculta, las letras adivinadas, los intentos restantes y el estado del juego.
   * @param {string} letra - Letra seleccionada.
   */

  const manejarLetra = (letra) => {
    if (estadoJuego === "ganado" || estadoJuego === "perdido") {
      return;
    }

    if (letrasAdivinadas.includes(letra)) {
      return;
    }

    const nuevaPalabraOculta = palabra
      .split("")
      .map((letraPalabra, index) =>
        letraPalabra === letra ? letra : palabraOculta[index]
      )
      .join("");

    setPalabraOculta(nuevaPalabraOculta);

    if (!palabra.includes(letra)) {
      setIntentosRestantes(intentosRestantes - 1);
    }

    const nuevasLetrasAdivinadas = [...letrasAdivinadas, letra];
    setLetrasAdivinadas(nuevasLetrasAdivinadas);

    if (nuevaPalabraOculta === palabra) {
      setEstadoJuego("ganado");
    } else if (intentosRestantes === 0) {
      setEstadoJuego("perdido");
    }
  };

  /**
   * Reinicia el juego llamando a la función de inicialización del juego.
   */

  const reiniciarJuego = () => {
    inicializarJuego();
  };

  useEffect(() => {
    inicializarJuego();
  }, []);

  /**
   * Componente que muestra las opciones de letras para seleccionar.
   * @returns {JSX.Element} Componente de teclado.
   */

  const Teclado = () => {
    const letras = "abcdefghijklmnopqrstuvwxyz";

    return (
      <div>
        <p className="text-center"> Selecciona una letra:</p>
        <div>
          {letras.split("").map((letra) => (
            <button
              className="boton-letra"
              key={letra}
              disabled={letrasAdivinadas.includes(letra)}
              onClick={() => manejarLetra(letra)}
            >
              {letra}
            </button>
          ))}
        </div>
      </div>
    );
  };

  /**
   * Componente que muestra la imagen del Ahorcado según los intentos restantes.
   * @returns {JSX.Element} Componente de la imagen del Ahorcado.
   */

  const AhorcadoImagen = () => {
    const imagenes = [
      "/images/hangMan-img/ahorcado0.png",
      "/images/hangMan-img/ahorcado1.png",
      "/images/hangMan-img/ahorcado2.png",
      "/images/hangMan-img/ahorcado3.png",
      "/images/hangMan-img/ahorcado4.png",
      "/images/hangMan-img/ahorcado5.png",
    ];
    const imagenAhorcado = imagenes[4 - intentosRestantes];

    return <img style={{height:"300px", width:"300px"}} src={imagenAhorcado} alt="Ahorcado" />;
  };

  /**
   * Componente que muestra el historial de letras adivinadas.
   * @returns {JSX.Element} Componente de historial de letras.
   */

  const HistorialLetras = () => {
    return (
      <div className="text-center">
        <p>Letras adivinadas:</p>
        <div>{letrasAdivinadas.join(", ")}</div>
      </div>
    );
  };

  /**
   * Componente que muestra el puntaje actual del jugador.
   * @returns {JSX.Element} Componente de puntaje.
   */

  const Puntaje = () => {
    const puntaje = palabraOculta
      .split("")
      .filter((letra) => letra !== "_").length;

    return <div>Puntaje: {puntaje}</div>;
  };

  return (
    <div className="juego-ahorcado">
      <h1>Juego del Ahorcado - Civilización Antigua China</h1>
      <div>Palabra: {palabraOculta}</div>
      <div>Intentos restantes: {intentosRestantes}</div>
      {estadoJuego === "ganado" && <p>¡Felicidades! Has ganado el juego.</p>}
      {estadoJuego === "perdido" && (
        <p>¡Oh no! Has perdido el juego. La palabra era: {palabra}</p>
      )}
      {estadoJuego !== "ganado" && estadoJuego !== "perdido" && <Teclado />}
      <AhorcadoImagen />
      <HistorialLetras />
      <Puntaje />
      {(estadoJuego === "ganado" || estadoJuego === "perdido") && (
        <button className="reiniciar-ahorcado mt-4" onClick={reiniciarJuego}>Reiniciar juego</button>
      )}
    </div>
  );
};
