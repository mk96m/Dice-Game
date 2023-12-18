
import styled from "styled-components";


const RoleDice = ({ currentDice, roleDice }) => {


  return (
    <DiceConatainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to role</p>
    </DiceConatainer>
  );
}

export default RoleDice;


const DiceConatainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
`;
