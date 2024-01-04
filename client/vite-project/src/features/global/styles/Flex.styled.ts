import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div,
  & > ul {
    flex: 1;
  }
`;