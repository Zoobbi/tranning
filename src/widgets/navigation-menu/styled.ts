import { Link } from "react-router-dom";
import styled from "styled-components";

import { NAVIGATION_MENU_HEIGHT } from "./constants";

export const MenuWrapper = styled.nav`
  box-sizing: border-box;
  position: fixed;
  bottom: -1px;
  left: 0;
  right: 0;
  height: ${NAVIGATION_MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  z-index: 400;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const MenuItem = styled(Link)`
  display: flex;
  color: white;
  font-size: ${({ theme }) => theme.fonts.size.s};
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
