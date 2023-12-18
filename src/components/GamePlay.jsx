import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };


  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum} />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice} />
      <div className="btns">
        <Button className="btn-reset" onClick={resetScore} >
          Reset Score
        </Button>
        <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;



const MainContainer = styled.main`
  /* max-width: 1280px; */
  margin: auto;
  padding-top: 70px;
  /* border: 1px solid black; */
  .top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: auto;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .btn-reset{
    background: white !important;
    color: black;
    border: 1px solid black;
    font-weight: 600;
    transition: 0.4s background ease-in;
  }
  .btn-reset:hover{
    background-color: black !important;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;