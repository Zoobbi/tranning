import styled from "styled-components";

export const ProgressBarContainerStyled = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBarFillStyled = styled.div<{
  percentage: number;
  color: string;
}>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: ${({ color }) => color};
  transition: width 0.3s ease;
`;

export const ProgressBarTextStyled = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: bold;
`;
