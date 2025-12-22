import styled from "styled-components";

export const LineStyled = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  margin: 8px 0;
`;

export const FilterListWrapper = styled.div`
  margin-bottom: 16px;
`;
