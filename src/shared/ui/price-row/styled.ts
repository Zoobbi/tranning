import styled from "styled-components";

export const CurrentPrice = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.quarter};
  margin: 0;
`;

export const OriginalPrice = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeight.oneAndHalf};
  text-decoration: line-through;
  margin: 0;
`;
