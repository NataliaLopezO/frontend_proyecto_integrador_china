import React, { useState, useEffect } from "react";
import "../scss/hangMan_style.css";

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

  const seleccionarPalabraAleatoria = () => {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
  };

  const inicializarJuego = () => {
    const palabraAleatoria = seleccionarPalabraAleatoria();
    setPalabra(palabraAleatoria);
    setPalabraOculta("_".repeat(palabraAleatoria.length));
    setLetrasAdivinadas([]);
    setIntentosRestantes(4);
    setEstadoJuego("");
  };

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

  const reiniciarJuego = () => {
    inicializarJuego();
  };

  useEffect(() => {
    inicializarJuego();
  }, []);

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

  const HistorialLetras = () => {
    return (
      <div>
        <p>Letras adivinadas:</p>
        <div>{letrasAdivinadas.join(", ")}</div>
      </div>
    );
  };

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
