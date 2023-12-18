import styled from "styled-components";
import StartGame from './components/StartGame';
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const toggleGamePLay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {
        gameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePLay} />
      }

    </>
  )
}

export default App;



