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
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 30px;
`;

export const CardStyle = styled.div`
  margin: 25px 0;
  background-color: #d8d4d4;
  min-height: 500px;
  height: auto;
  width: 550px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: transform 0.3s ease-in-out; // Add a smooth transition for the transform property
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.03); // Increase the scale on hover
  }

  @media (max-width: 768px) {
    width: 350px;
  }
`;
