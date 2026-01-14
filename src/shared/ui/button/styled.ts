import styled, { css } from "styled-components";

import { BUTTON_VARIANTS } from "./Button";
import type { ButtonStyledProps } from "./types";

export const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  /* Primary Variant */
  ${(props) =>
    props.$variant === BUTTON_VARIANTS.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};

      &:active {
        transform: scale(0.98);
      }
    `}

  /* Secondary Variant */
  ${(props) =>
    props.$variant === BUTTON_VARIANTS.action &&
    css`
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};

      &:active {
        transform: scale(0.98);
      }
    `}

    /* Shadow Variant */
  ${(props) =>
    props.$variant === BUTTON_VARIANTS.shadow &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};

      &:active {
        transform: scale(0.98);
      }
    `}

    /* cancel Variant */
  ${(props) =>
    props.$variant === BUTTON_VARIANTS.cancel &&
    css`
      background-color: ${({ theme }) => theme.colors.background};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};

      &:active {
        transform: scale(0.98);
      }
    `}
  /* Danger Variant */

  ${(props) =>
    props.$variant === BUTTON_VARIANTS.icon &&
    css`
      background-color: transparent;
      color: transparent;
      padding: 4px;

      &:active {
        transform: scale(0.98);
      }
    `}
  
  /* Disabled State */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBtnBg};
    color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

export const IconOnlyButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`;

export const LabelWrapperStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;
