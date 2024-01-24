import styled from "styled-components";

type ButtonProps = {
  bg?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #2196f3;
  color: #ffffff;
  transition: box-shadow 0.3s ease-in-out, background-color 0.5s ease;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    color: black;
    background-color: greenyellow;
  }

  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
