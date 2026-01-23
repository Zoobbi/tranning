import styled from "styled-components";

import type { FlexWrapperProps } from "./types";

export const FlexWrapperStyled = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "pd",
      "pr",
      "pl",
      "mb",
      "mt",
      "gap",
      "alignSelf",
      "alignItems",
      "flexDirection",
      "justifyContent",
      "flexWrap",
      "flexShrink",
      "position",
      "bg",
      "height",
      "minHeight",
      "minWidth",
      "width",
      "isFullWidth",
      "aspectRatio",
      "flex",
      "textAlign",
    ].includes(prop),
})<FlexWrapperProps>`
  display: flex;
  ${({ pr }) => pr && `padding-right: ${pr};`}
  ${({ pd }) => pd && `padding: ${pd};`}
  ${({ pl }) => pl && `padding-left: ${pl};`}
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ mt }) => mt && `margin-top: ${mt};`}

  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`}

  ${({ position }) => position && `position: ${position};`}

  ${({ bg }) => bg && `background-color: ${bg};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`} 
  ${({ width }) => width && `width: ${width};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}

  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`}
  ${({ flex }) => flex && `flex: ${flex};`}

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;
