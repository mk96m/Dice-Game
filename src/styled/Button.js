import styled from "styled-components";


export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  background: #000000;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;