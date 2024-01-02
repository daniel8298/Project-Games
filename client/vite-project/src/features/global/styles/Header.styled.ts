import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px 0;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
