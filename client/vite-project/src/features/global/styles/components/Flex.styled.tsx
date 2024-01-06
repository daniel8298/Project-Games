import styled from "styled-components";
type Container = {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  display?: string;
  flexdirection?: string;
  alignitems?: string;
  justifycontent?: string;
  flexwrap?: string;
};

export const ContainerWithFlex = styled.div<Container>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: ${({ flexdirection }) => flexdirection};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  flex-wrap: ${({ flexwrap }) => flexwrap};

  /* & > div,
  & > ul {
    flex: 1;
  } */
`;
