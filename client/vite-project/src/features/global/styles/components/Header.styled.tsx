import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 50px;
  padding: 0 100px;
`;
export const Nav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
