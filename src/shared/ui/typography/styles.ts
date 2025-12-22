import { css } from "styled-components";

export function getTextStyles(
  font: string | null,
  weight: number | null,
  size: string | null,
  lineHeight: number | null,
) {
  return css`
    ${font &&
    `
      font-family: ${font};
      font-style: normal;
    `}
    ${weight && `font-weight: ${weight};`}
    ${size && `font-size: ${size};`}
    ${lineHeight && `line-height: ${lineHeight}px;`}
  `;
}
