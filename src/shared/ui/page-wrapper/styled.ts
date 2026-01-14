import styled from "styled-components";

import { NAVIGATION_MENU_HEIGHT } from "@widgets/navigation-menu";

const NAVIGATION_MENU_MARGIN = 24;

export const PageWrapperStyled = styled.div<{ $isFooter: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ $isFooter }) =>
    $isFooter &&
    `margin-bottom: ${NAVIGATION_MENU_HEIGHT + NAVIGATION_MENU_MARGIN}px;`}
`;
