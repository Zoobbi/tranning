import styled from "styled-components";

import { FlexWrapper } from "@shared/ui";

export const FlexWrapperStyled = styled(FlexWrapper)`
  background-color: ${({ theme }) => theme.colors.border};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 8px;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
`;
