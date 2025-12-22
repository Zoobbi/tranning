/**
 * @param sm - small | Mobile: (360px - 767px)
 * @param md - medium | Tablet: (768px - 1024px)
 * @param lg - large | Desktop: (1025px+) -> Default option for desktop
 */
type GridNameBreakpoints = "sm" | "md" | "lg";

/**
 * @param xs - extra small | Mobile: >= 320
 * @param sm - small | Mobile: (360px - 767px) | from GridNameBreakpoints type
 * @param md - medium | Tablet: (768px - 1024px) | from GridNameBreakpoints type
 * @param lg - large | Desktop: (1025px+) -> Default option for desktop | from GridNameBreakpoints type
 * @param xlg - extra large | Desktop: <= 1440px
 */
type AliasBreakpoints = GridNameBreakpoints | "xs" | "xlg";

type SizesBreakpoints = 320 | 360 | 768 | 1025 | 1440;

export const BREAKPOINT: Record<AliasBreakpoints, SizesBreakpoints> = {
  xs: 320,
  sm: 360,
  md: 768,
  lg: 1025,
  xlg: 1440,
};

type AdaptiveKeys = "minWidth" | "maxWidth";
type AdaptiveCommonOptions = "mobileXs" | "mobile" | "tablet" | "desktop";

type AdaptiveOptionsMinWidth = AdaptiveCommonOptions | "desktopLg";

/**
 * _Mobile First_ - ADAPTIVE.minWidth
 * @param mobileXs  min-width = 320
 * @param mobile  min-width = 360
 * @param tablet  min-width = 768
 * @param desktop  min-width = 1025
 * @param desktopLg  min-width = 1440
 *
 * _Desktop First_ - ADAPTIVE.maxWidth
 * @param mobileXs  max-width = 359
 * @param mobile  max-width = 767
 * @param tablet  max-width = 1024
 * @param desktop  max-width = 1439
 */
export const ADAPTIVE: Record<
  AdaptiveKeys,
  { [K in AdaptiveOptionsMinWidth]?: string }
> = {
  minWidth: {
    mobileXs: `@media only screen and (min-width: ${BREAKPOINT.xs}px)`,
    mobile: `@media only screen and (min-width: ${BREAKPOINT.sm}px)`,
    tablet: `@media only screen and (min-width: ${BREAKPOINT.md}px)`,
    desktop: `@media only screen and (min-width: ${BREAKPOINT.lg}px)`,
    desktopLg: `@media only screen and (min-width: ${BREAKPOINT.xlg}px)`,
  },
  maxWidth: {
    mobileXs: `@media only screen and (max-width: ${BREAKPOINT.sm - 1}px)`,
    mobile: `@media only screen and (max-width: ${BREAKPOINT.md - 1}px)`,
    tablet: `@media only screen and (max-width: ${BREAKPOINT.lg - 1}px)`,
    desktop: `@media only screen and (max-width: ${BREAKPOINT.xlg - 1}px)`,
  },
};
