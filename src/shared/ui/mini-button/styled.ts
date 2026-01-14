import styled from "styled-components";

export const MiniButtonStyled = styled.button<{ $isTextUnderlined: boolean }>`
  border-color: transparent;
  background-color: transparent;
  border-bottom: ${({ $isTextUnderlined, theme }) =>
    $isTextUnderlined ? `1px solid ${theme.colors.text}` : "none"};
`;
