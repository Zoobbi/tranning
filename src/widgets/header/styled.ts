import styled from "styled-components";

import { HeadingLevel2 } from "@shared/ui/typography";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 48px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const HeadingLevel2Styled = styled(HeadingLevel2)`
  width: calc(100% - 24px);
  text-align: center;
`;
