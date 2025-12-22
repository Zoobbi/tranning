import styled from "styled-components";

export const CheckboxWrapperStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover svg {
    opacity: 0.8;
  }
`;

export const SvgWrapperStyled = styled.div<{ isChecked: boolean }>`
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : "transparent"};
  padding: 2px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const HiddenCheckboxStyled = styled.input.attrs({
 type: "checkbox" 
})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
