import styled, { css } from "styled-components";

import { ADAPTIVE } from "@shared/ui/screen";
import { FONTS } from "@theme/";

import { getTextStyles } from "./styles";

interface HeadingCommonProps {
  color?: string;
  textAlign?: "left" | "center" | "right";
}

interface RegularTextProps {
  weight?: number;
  color?: string;
  isUppercase?: boolean;
  isDisplayFlex?: boolean;
  isLineThrough?: boolean;
  alignItems?: string;
  className?: string;
  textDecoration?: string;
  textAlign?: string;
  isUserSelectDisabled?: boolean;
  as?: string;
}

const typographyTextShadow = "0 0 95px rgba(0, 0, 0, 0.07)";

// Fonts
export const RobotoFontFamily = css`
  font-family: Roboto, sans-serif;
`;

// letter Spacings
export const letterSpacingS = css`
  letter-spacing: 0.03em;
`;

export const letterSpacingXS = css`
  letter-spacing: 0.02em;
`;

// Text Transforms
export const textUpperCase = css`
  text-transform: uppercase;
`;

// Box reset
const boxReset = css`
  box-sizing: border-box;
  margin: 0;
`;

// Heading styles
const HeadingStylesCommon = css<HeadingCommonProps>`
  ${letterSpacingXS}
  ${textUpperCase}
  ${boxReset}

  color: ${({ color }) => color};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;

export const HeadingLevel1 = styled.h1<HeadingCommonProps>`
  ${getTextStyles(
    "Roboto",
    FONTS.fontWeight.bold,
    FONTS.size.xxxl,
    FONTS.lineHeight.xxl,
  )}

  ${HeadingStylesCommon}

  text-shadow: ${typographyTextShadow};
`;

export const HeadingLevel2 = styled.h2<HeadingCommonProps>`
  ${getTextStyles(
    "Roboto",
    FONTS.fontWeight.bold,
    FONTS.size.l,
    FONTS.lineHeight.xl,
  )}

  ${HeadingStylesCommon}

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, FONTS.size.xxxxl, FONTS.lineHeight.xxxl)}

    text-shadow: ${typographyTextShadow};
  }
`;

export const HeadingLevel3 = styled.h3<HeadingCommonProps>`
  ${getTextStyles(
    "Roboto",
    FONTS.fontWeight.bold,
    FONTS.size.l,
    FONTS.lineHeight.l,
  )}

  ${HeadingStylesCommon}

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, FONTS.size.xxl, FONTS.lineHeight.xl)}

    text-shadow: ${typographyTextShadow};
  }
`;

export const HeadingLevel4 = styled.h4<{
  color?: string;
  alignSelf?: string;
  whiteSpace?: string;
}>`
  ${getTextStyles(
    "Roboto",
    FONTS.fontWeight.bold,
    FONTS.size.s,
    FONTS.lineHeight.s,
  )}

  align-self: ${({ alignSelf = "flex-start" }) => alignSelf};

  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}

  ${HeadingStylesCommon}

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles(null, null, FONTS.size.l, FONTS.lineHeight.l)}
  }
`;

const RegularTextStylesCommon = css<RegularTextProps>`
  font-weight: ${({ weight = FONTS.fontWeight.normal }) => weight};

  ${({ isDisplayFlex }) => isDisplayFlex && "display: flex;"}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ isUppercase = false }) => isUppercase && "text-transform: uppercase;"}
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ isLineThrough }) => isLineThrough && "text-decoration: line-through;"}
  
  ${({ isUserSelectDisabled }) => isUserSelectDisabled && "user-select: none;"}

  ${boxReset}
  
  color: ${({ color, theme }) => color ?? theme.colors.text};
`;

// Regular text | paragraph (p) | Body 18
export const RegularTextLevel2 = styled.p<RegularTextProps>`
  ${getTextStyles("Roboto", null, FONTS.size.l, FONTS.lineHeight.xl)}

  ${RegularTextStylesCommon}
`;

// Regular text | paragraph (p) | Body 16
export const RegularTextLevel3 = styled.p<RegularTextProps>`
  ${getTextStyles("Roboto", null, FONTS.size.m, FONTS.lineHeight.l)}

  ${RegularTextStylesCommon}
`;

// Regular text | text (span) | UI 14 (Body 14)
export const RegularTextLevel4 = styled.span<RegularTextProps>`
  ${getTextStyles("Roboto", null, FONTS.size.s, FONTS.lineHeight.m)}

  ${RegularTextStylesCommon}
`;

// Regular text | text (span) | Label 12 (Body 12)
export const RegularTextLevel5 = styled.span<RegularTextProps>`
  ${getTextStyles("Roboto", null, FONTS.size.xs, FONTS.lineHeight.s)}

  ${RegularTextStylesCommon}
`;
