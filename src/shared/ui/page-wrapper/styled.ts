import styled from "styled-components";

import { NAVIGATION_MENU_HEIGHT } from "@widgets/navigation-menu";

export const PageWrapperStyled = styled.div<{ isFooter: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ isFooter }) =>
    isFooter && `margin-bottom: ${NAVIGATION_MENU_HEIGHT + 24}px;`}
`;
