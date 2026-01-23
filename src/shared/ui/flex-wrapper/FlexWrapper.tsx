import { forwardRef } from "react";

import { FlexWrapperStyled } from "./styled";
import type { FlexWrapperProps } from "./types";

export const FlexWrapper = forwardRef<HTMLDivElement, FlexWrapperProps>(
  (
    {
      children,
      pd,
      pr,
      pl,
      mb,
      mt,
      gap,
      alignSelf,
      alignItems,
      flexDirection,
      justifyContent,
      flexWrap,
      flexShrink,
      position,
      bg,
      height,
      minHeight,
      width,
      minWidth,
      isFullWidth,
      aspectRatio,
      flex,
      textAlign,
      as,
      className,
    },
    ref,
  ) => {
    return (
      <FlexWrapperStyled
        ref={ref}
        className={className}
        pd={pd}
        pr={pr}
        pl={pl}
        mb={mb}
        mt={mt}
        gap={gap}
        alignSelf={alignSelf}
        alignItems={alignItems}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        flexShrink={flexShrink}
        position={position}
        bg={bg}
        height={height}
        minHeight={minHeight}
        minWidth={minWidth}
        width={width}
        isFullWidth={isFullWidth}
        aspectRatio={aspectRatio}
        flex={flex}
        textAlign={textAlign}
        as={as}
      >
        {children}
      </FlexWrapperStyled>
    );
  },
);

FlexWrapper.displayName = "FlexWrapper";
