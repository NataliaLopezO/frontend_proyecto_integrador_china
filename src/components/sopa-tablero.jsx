import React, { useState, useEffect } from "react";
import "../scss/sopa_styles.css";

/**
 * Componente para el juego de búsqueda de palabras.
 * Presenta una cuadrícula de letras en la que los usuarios deben encontrar palabras ocultas.
 * El juego se basa en la temática de la antigua civilización china.
 */

export const SoupGame = () => {
  /**
   * Estado del juego.
   * Contiene las palabras, la cuadrícula, las letras seleccionadas, las palabras encontradas,
   * las letras resaltadas, la palabra seleccionada, el temporizador y el estado del juego.
   */

  const [gameState, setGameState] = useState({
    words: [
      "CHINA",
      "EMPERADOR",
      "MURALLA",
      "CONFUCIO",
      "BUDISMO",
      "PAPEL",
      "TINTA",
      "PANDA",
      "DRAGON",
      "TAOISMO",
    ],
    grid: [],
    selectedLetters: [],
    foundWords: [],
    highlightedLetters: {},
    selectedWord: "",
    timer: 180, // 2 minutos en segundos
    gameEnded: false,
  });

  /**
   * Genera la cuadrícula de letras al cargar el componente.
   */

  useEffect(() => {
    const generateGrid = () => {
      const gridSize = 17;
      const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];

      const newGrid = [];
      for (let i = 0; i < gridSize; i++) {
        const row = [];
        for (let j = 0; j < gridSize; j++) {
          const randomIndex = Math.floor(Math.random() * letters.length);
          const letter = {
            value: letters[randomIndex],
            row: i,
            col: j,
          };
          row.push(letter);
        }
        newGrid.push(row);
      }

      setGameState((prevState) => ({
        ...prevState,
        grid: newGrid,
      }));
    };

    generateGrid();
  }, []);

  /**
   * Maneja el temporizador del juego y actualiza el estado del juego.
   */

  useEffect(() => {
    let timerId;

    if (gameState.timer > 0 && !gameState.gameEnded) {
      timerId = setTimeout(() => {
        setGameState((prevState) => ({
          ...prevState,
          timer: prevState.timer - 1,
        }));
      }, 1000);
    } else if (gameState.timer === 0 && !gameState.gameEnded) {
      setGameState((prevState) => ({
        ...prevState,
        gameEnded: true,
      }));
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [gameState.timer, gameState.gameEnded]);

  /**
   * Reinicia la palabra seleccionada.
   */

  const handleRestartWord = () => {
    setGameState((prevState) => ({
      ...prevState,
      selectedLetters: [],
      selectedWord: "",
    }));
  };

  /**
   * Maneja el clic en una letra de la cuadrícula.
   * Actualiza el estado del juego según la letra seleccionada.
   * @param {number} row - Fila de la letra seleccionada.
   * @param {number} col - Columna de la letra seleccionada.
   */

  const handleLetterClick = (row, col) => {
    const selectedLetterKey = `${row}-${col}`;

    if (gameState.selectedLetters.includes(selectedLetterKey)) {
      return;
    }

    const updatedSelectedLetters = [
      ...gameState.selectedLetters,
      selectedLetterKey,
    ];

    const selectedWord = updatedSelectedLetters
      .map((letterKey) => {
        const [selectedRow, selectedCol] = letterKey.split("-");
        return gameState.grid[selectedRow][selectedCol].value;
      })
      .join("");

    if (
      selectedWord.length > 1 &&
      !gameState.words.some((word) => word.startsWith(selectedWord))
    ) {
      return;
    }

    if (gameState.words.includes(selectedWord)) {
      const updatedHighlightedLetters = { ...gameState.highlightedLetters };
      updatedSelectedLetters.forEach((letterKey) => {
        updatedHighlightedLetters[letterKey] = true;
      });

      const updatedFoundWords = [...gameState.foundWords, selectedWord];

      setGameState((prevState) => ({
        ...prevState,
        selectedLetters: [],
        foundWords: updatedFoundWords,
        highlightedLetters: updatedHighlightedLetters,
        selectedWord: "",
        gameEnded: updatedFoundWords.length === gameState.words.length,
      }));
    } else {
      setGameState((prevState) => ({
        ...prevState,
        selectedLetters: updatedSelectedLetters,
        selectedWord: selectedWord,
      }));
    }
  };

  const {
    grid,
    selectedLetters,
    foundWords,
    highlightedLetters,
    words,
    selectedWord,
    timer,
    gameEnded,
  } = gameState;

  return (
    <div className="cuadricula-sopa">
      <h1>Encuentra las palabras - Civilización Antigua China</h1>
      <p style={{fontSize:"1.19rem"}}>
        Encuentra las palabras escondidas. <br />
        Haz clic en las letras para formar una palabra. <br />
        Las letras no necesariamente estarán seguidas. <br />
        Las letras pueden estar en cualquier lugar, ¡busca bien!.
      </p>
      <div>
        <h2>Palabras encontradas:</h2>
        <ul className="word-list">
          {words.map((word, index) => (
            <li
              key={index}
              className={foundWords.includes(word) ? "found" : ""}
            >
              {word}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {timer > 0 && !gameEnded && (
          <p>
            Tiempo restante: {Math.floor(timer / 60)}:
            {timer % 60 < 10 ? "0" : ""}
            {timer % 60}
          </p>
        )}
      </div>
      {gameEnded ? (
        <div>
          <h2>{timer === 0 ? "¡Perdiste!" : "¡Ganaste!"}</h2>
          <p>
            {timer === 0
              ? "Se acabó el tiempo."
              : "¡Encontraste todas las palabras!"}
          </p>
        </div>
      ) : (
        <div>
          <button className="reiniciar-sopa mb-3" onClick={handleRestartWord}>
            Reiniciar palabra
          </button>
          <div>
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((letter, colIndex) => {
                  const { value, row: letterRow, col: letterCol } = letter;
                  const letterKey = `${letterRow}-${letterCol}`;
                  const isSelected = selectedLetters.includes(letterKey);
                  const isFound = highlightedLetters[letterKey];
                  const isDisabled =
                    isFound && !selectedLetters.includes(letterKey);

                  return (
                    <div
                      key={letterKey}
                      className={`letter ${isSelected ? "selected" : ""} ${
                        isFound ? "found" : ""
                      } ${isDisabled ? "disabled" : ""}`}
                      onClick={() => handleLetterClick(letterRow, letterCol)}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
