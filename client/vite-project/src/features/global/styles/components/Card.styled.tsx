import styled from "styled-components";

type StyledCard = {
  background?: string;
};

export const StyledCard = styled.div<StyledCard>`
  overflow: hidden;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  margin: 15px 50px;
  background-color: ${({ background }) => background};

  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 30px;
`;
