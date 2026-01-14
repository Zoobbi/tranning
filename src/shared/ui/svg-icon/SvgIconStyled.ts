import styled, { css } from "styled-components";

import type { Breakpoint, SizeType, SvgIconProps } from "./types";

const getWidth = (size: number) => css`
  width: ${size}px;
`;

const getHeight = (size: number) => css`
  height: ${size}px;
`;

const getSimpleSize = (size: SizeType) => css`
  ${getWidth(size)}
  ${getHeight(size)}
`;

const getSizes = ({
  size,
  sizes,
}: {
  size?: SizeType;
  sizes?: { [K in Breakpoint]?: SizeType };
}) => {
  if (size) {
    return css`
      ${getSimpleSize(size)}
    `;
  }

  if (sizes) {
    return css``;
  }

  return css``;
};

export const SVGIconStyled = styled.span<SvgIconProps>`
  display: flex;

  ${({ order }) => order && `order: ${order};`}
  ${({ iconRotate }) => iconRotate && `transform: rotate(${iconRotate}deg);`};
  ${({ $isButton }) => $isButton && "cursor: pointer;"}
  ${getSizes}  
  & path {
    ${({ $pathFill }) => $pathFill && `fill: ${$pathFill};`}
    ${({ stroke }) => stroke && `stroke: ${stroke};`}
  }
  ${({ $rectFill }) =>
    $rectFill &&
    `
    & > svg > rect {
      fill: ${$rectFill};
    }
  `}
`;
