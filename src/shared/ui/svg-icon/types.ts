import type { ReactNode, KeyboardEvent, SyntheticEvent } from "react";

import type { Noop } from "@shared/lib/common";
import type { ADAPTIVE } from "@shared/ui/screen";

export type SizeType =
  | 4
  | 6
  | 16
  | 20
  | 24
  | 32
  | 36
  | 40
  | 48
  | 56
  | 64
  | 82
  | 96
  | 120
  | 128;

export type IconSize =
  | "size4"
  | "size6"
  | "size16"
  | "size20"
  | "size24"
  | "size32"
  | "size36"
  | "size40"
  | "size48"
  | "size56"
  | "size64"
  | "size82"
  | "size96"
  | "size120"
  | "size128";

export type Breakpoint = keyof typeof ADAPTIVE.minWidth;

export type IconSizes<T> = { [K in Breakpoint]?: T };

export type IconProps = {
  type?: ReactNode;
  fill?: string;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  size?: SizeType;
  loader?: ReactNode;
  dataIconType?: string;
  className?: string;
  children?: ReactNode;
  order?: number;
  iconRotate?: number;
  title?: string;
  tabIndex?: number;
  isHoverEffect?: boolean;
  isActive?: boolean;
  keyDownHandler?: (event: KeyboardEvent<HTMLElement>) => void | Noop;
  onClick?: (e: SyntheticEvent) => void;
};

export type SvgIconProps = {
  className?: string;
  order?: number;
  size?: SizeType;
  sizes?: IconSizes<SizeType>;
  iconRotate?: number;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  isButton?: boolean;
  isHoverEffect?: boolean;
  isActive?: boolean;
};

export type SizeProps = SizeType | IconSizes<SizeType>;

export type CorrectSizeProps = {
  correctSize?: SizeType;
  correctSizes?: IconSizes<SizeType>;
};
