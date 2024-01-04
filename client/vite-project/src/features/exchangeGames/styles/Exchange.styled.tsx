import styled from "styled-components";

export const Select = styled.select`
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 5px;
  margin: 17px;
  height: 30px;
  width: 100px;
`;
export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;
`;
export const Checkbox = styled.input`
  margin: 0 10px 0 30px;
`;

export const FlexButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const FlexSelectAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
