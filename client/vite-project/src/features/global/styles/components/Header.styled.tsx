import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 50px;
  padding: 0 100px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const StyleHeaderMobile = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 50px;
  padding: 0 10px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
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
export const Icon = styled.img`
  width: 25px;
`;
