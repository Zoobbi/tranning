import styled from "styled-components";

import { ADAPTIVE, BREAKPOINT } from "@shared/ui/screen";

const TOTAL_COLUMNS = 12;
const GUTTER = "15px";

// === Container ===
export const Container = styled.div<{ height?: string }>`
  width: 100%;
  max-width: 1200px;
  min-width: ${BREAKPOINT.xs}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${GUTTER};
  padding-right: ${GUTTER};
  box-sizing: border-box;

  ${({ height }) => height && `height: ${height};`}
`;

// === Row ===
export const Row = styled.div<{ height?: string; mb?: string }>`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(-1 * ${GUTTER});
  margin-right: calc(-1 * ${GUTTER});

  ${({ height }) => height && `height: ${height};`}
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
`;

// === Col ===
interface ColProps {
  span?: number; // column quantity (1–12)
  xs?: number; // Extra small (screen from 320px)
  sm?: number; // Small (screen from 576px)
  md?: number; // Medium (screen from 768px)
  lg?: number; // Large (screen from 992px)
  xl?: number; // Extra Large (screen from 1200px)
}

export const Col = styled.div<ColProps>`
  padding-left: ${GUTTER};
  padding-right: ${GUTTER};
  box-sizing: border-box;
  flex: 0 0
    ${({ span }) => (span ? `${(span / TOTAL_COLUMNS) * 100}%` : "100%")};
  max-width: ${({ span }) =>
    span ? `${(span / TOTAL_COLUMNS) * 100}%` : "100%"};

  /* Extra small (xs: from 320px) */
  ${({ xs }) =>
    xs !== undefined &&
    `
      ${ADAPTIVE.minWidth.mobileXs} {
        flex: 0 0 ${(xs / TOTAL_COLUMNS) * 100}%;
        max-width: ${(xs / TOTAL_COLUMNS) * 100}%;
      }
    `}

  /* Small (sm: from 360px) */
  ${({ sm }) =>
    sm !== undefined &&
    `
      ${ADAPTIVE.minWidth.mobile} {
        flex: 0 0 ${(sm / TOTAL_COLUMNS) * 100}%;
        max-width: ${(sm / TOTAL_COLUMNS) * 100}%;
      }
    `}

    /* Medium (md: from 768px) */
  ${({ md }) =>
    md !== undefined &&
    `
      ${ADAPTIVE.minWidth.tablet} {
        flex: 0 0 ${(md / TOTAL_COLUMNS) * 100}%;
        max-width: ${(md / TOTAL_COLUMNS) * 100}%;
      }
    `}

    /* Large (lg: from 1025px) */
  ${({ lg }) =>
    lg !== undefined &&
    `
      ${ADAPTIVE.minWidth.desktop} {
        flex: 0 0 ${(lg / TOTAL_COLUMNS) * 100}%;
        max-width: ${(lg / TOTAL_COLUMNS) * 100}%;
      }
    `}
`;
