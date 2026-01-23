export interface FlexWrapperProps {
  children?: React.ReactNode;
  pd?: string | number;
  pr?: string | number;
  pl?: string | number;
  mb?: string | number;
  mt?: string | number;
  gap?: string | number;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexShrink?: 0 | 1 | 2;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  bg?: string;
  height?: string | number;
  minHeight?: string | number;
  width?: string | number;
  minWidth?: string | number;
  isFullWidth?: boolean;
  aspectRatio?: string | number;
  flex?: string | number;
  textAlign?: string;
  as?: string;
  className?: string;
}
