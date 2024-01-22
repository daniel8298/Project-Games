import styled from "styled-components";

export const StyledCard = styled.div`
  /* min-width: 200px;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 50px; */

  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(84, 84, 173, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  margin: 20px;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 30px;
`;
