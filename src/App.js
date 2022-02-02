import { useState } from "react";
import "./scss/App.scss";
import Letter from "./components/Letter/Letter";
import GameResult from "./components/GameResult/GameResult";
import UsedLetter from "./components/UsedLetter/UsedLetter";
import GuessedLetters from "./components/GuessedLetters/GuessedLetters";
import Hangman from "./components/Hangman/Hangman";

/* import words from "./data/words"; */

function App() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const word = "acero".toUpperCase().match(/.{1,1}/g);

  const [solutionLetters, setSolutionLetters] = useState(
    word.map((w) => {
      return { letter: w, status: false };
    })
  );

  const [alphabetLetters, setAlphabetLetters] = useState(
    alphabet.map((letter) => {
      return { letter: letter, used: false };
    })
  );

  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const [gameState, setGameState] = useState(undefined);

  const checkIfLost = () => {
    if (numberOfErrors > 10) {
      setGameState("lost");
    }
  };

  const checkIfWon = () => {
    const guessedLetters = solutionLetters.filter((letter) => letter.status);
    if (guessedLetters.length === solutionLetters.length) {
      setGameState("won");
    }
  };

  const letterOnClick = (letter) => {
    const clonedLetters = [...solutionLetters];
    const letterFound = clonedLetters.filter((e) => {
      return e.letter === letter;
    });
    letterFound.forEach((letterObj) => {
      letterObj.status = true;
    });
    setSolutionLetters(clonedLetters);

    if (letterFound.length === 0) {
      setNumberOfErrors(numberOfErrors + 1);
    }
    checkIfWon();
    checkIfLost();
    const cloneAlphabet = [...alphabetLetters];
    const alphabetFound = cloneAlphabet.find((e) => {
      return e.letter === letter;
    });
    alphabetFound.used = true;
    setAlphabetLetters(cloneAlphabet);
  };

  return (
    <>
      <div className="hangman-container">
        <Hangman nOfErrors={numberOfErrors} />
      </div>
      <ul className="guess-letters">
        {solutionLetters.map((letter) => {
          return (
            <GuessedLetters
              letter={letter}
              key={`${letter.letter}-${Date.now().toString()}`}
            ></GuessedLetters>
          );
        })}
      </ul>

      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          {alphabetLetters.map((letter) => {
            return (
              <UsedLetter
                UsedLetter={letter}
                key={`${letter.letter}-${Date.now().toString()}`}
              />
            );
          })}
        </ul>
      </section>
      <GameResult gameState={gameState} />
      <ul className="letters">
        {alphabetLetters.map((letter) => {
          return (
            <Letter
              actionOnClick={letterOnClick}
              letter={letter}
              key={`${letter.letter}-${Date.now().toString()}`}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
