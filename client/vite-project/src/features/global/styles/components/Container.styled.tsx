import styled from "styled-components";

type Container = {
  maxHeight?: string;
  height?: string;
};

export const Container = styled.div<Container>`
  width: 1500px;
  max-width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  height: ${({ height }) => height};
  padding: 0 100px;
  margin: 0 auto;
`;
