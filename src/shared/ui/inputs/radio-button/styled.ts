import styled from "styled-components";

export const RadioWrapperStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover svg {
    opacity: 0.8;
  }
`;

export const HiddenRadioStyled = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SvgWrapperStyled = styled.div<{ $isChecked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-right: 16px;
`;

export const CheckedRadioStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
