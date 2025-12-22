import styled from "styled-components";

export const TextWithToggleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
`;
