import styled from "styled-components";

import type { BackgroundImageStyledProps } from "./types";

export const BackgroundImageStyled = styled.div<BackgroundImageStyledProps>`
  width: ${({ width = "100%" }) =>
    typeof width === "number" ? `${width}px` : width};
  height: ${({ height = "160px" }) =>
    typeof height === "number" ? `${height}px` : height};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-position: ${({ $backgroundPosition = "center center" }) =>
    $backgroundPosition};
  background-repeat: ${({ backgroundRepeat = "no-repeat" }) =>
    backgroundRepeat};
  border-radius: ${({ borderRadius = "none" }) => borderRadius};
  background-size: ${({ backgroundSize = "cover" }) => backgroundSize};
  position: relative;
`;

export const QuestionMarkStyled = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
