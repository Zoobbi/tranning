import styled from "styled-components";

import { Button, FlexWrapper } from "@shared/ui";

export const ProgramVideoWrapperStyled = styled(FlexWrapper)`
  background-color: #333333;
  border: 1px solid #a0a0a0;
  border-radius: 12px;
`;

export const CardVideoWrapperStyled = styled(FlexWrapper)`
  min-height: 150px;
  aspect-ratio: 16/9;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const CustomPlayButtonStyled = styled(Button)`
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
