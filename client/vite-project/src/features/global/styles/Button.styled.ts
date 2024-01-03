import styled from "styled-components";

type ButtonProps = {
  bg?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  margin: 10px;
  background-color: ${({ bg }) => bg || "skyblue"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.9);
    background-color: blue;
  }
`;
