import styled, { css } from "styled-components";

export const ToggleStyled = styled.div<{
  $on: boolean;
  $disabled: boolean;
}>`
  width: 42px;
  height: 20px;

  border-radius: 9999px;
  padding: 4px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: background 0.3s ease;
  display: inline-flex;
  align-items: center; /* Центрируем thumb по вертикали */
  position: relative;
  background: ${(props) =>
    props.$on ? props.theme.colors.primary : props.theme.colors.cardBackground};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.cardBackground};
    outline-offset: 2px;
  }

  ${(props) =>
    !props.$disabled &&
    css`
      &:hover {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
      }
    `}
`;

export const ThumbStyled = styled.div<{
  $on: boolean;
}>`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
  transform: ${(props) => (props.$on ? "translateX(22px)" : "translateX(0)")};
`;
