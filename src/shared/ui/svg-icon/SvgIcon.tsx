import type { JSX, SyntheticEvent } from "react";
import React, { useCallback } from "react";

import { EmptySvg } from "@shared/assets/icons";
import { noop } from "@shared/lib/common";

import { SVGIconStyled } from "./SvgIconStyled";
import { ICON_SIZE } from "./constants";
import { getCorrectSize } from "./helpers";
import { SVG } from "./svgInline";
import type { SizeType, IconProps } from "./types";

export function SVGIcon(props: IconProps): JSX.Element {
  const {
    type = EmptySvg,
    fill = "none",
    pathFill,
    rectFill,
    stroke,
    size = ICON_SIZE.size24,
    className = "wrap-svg",
    onClick,
    dataIconType,
    children,
    order,
    iconRotate,
    title,
    isHoverEffect,
    tabIndex,
    isActive,
    keyDownHandler = noop,
    ...rest
  } = props;

  const { correctSize, correctSizes } = getCorrectSize(size as SizeType);

  const svgSize = correctSizes ? undefined : correctSize;
  const svgKey = `${type}-${fill}-${svgSize}-${dataIconType}`;

  const onClickHandler = useCallback(
    (e: SyntheticEvent): void => {
      onClick && onClick(e);
    },
    [onClick],
  );

  return (
    <SVGIconStyled
      size={correctSize}
      sizes={correctSizes}
      onClick={onClickHandler}
      className={className}
      iconRotate={iconRotate}
      order={order}
      title={title}
      tabIndex={tabIndex}
      onKeyDown={keyDownHandler}
      $pathFill={pathFill}
      $rectFill={rectFill}
      stroke={stroke}
      role={onClick ? "button" : undefined}
      $isButton={Boolean(onClick)}
      isHoverEffect={isHoverEffect}
      isActive={isActive}
    >
      {type ? (
        <>
          <SVG
            key={svgKey}
            src={`${type}`}
            height={svgSize}
            className="icon-svg"
            width={svgSize}
            cacheRequests
            {...rest}
          />
          {children && <span>{children}</span>}
        </>
      ) : (
        <SVGIconStyled size={correctSize} sizes={correctSizes} />
      )}
    </SVGIconStyled>
  );
}
