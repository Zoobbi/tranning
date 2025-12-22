import { ICON_SIZE } from "./constants";
import type { SizeType, IconSizes, SizeProps, CorrectSizeProps } from "./types";

export const getCorrectSize = (size: SizeProps): CorrectSizeProps => {
  if (typeof size === "object" && Object.keys(size).length > 0) {
    return {
      correctSize: undefined,
      correctSizes: size as IconSizes<SizeType>,
    } as const;
  }

  return {
    correctSize: Object.values(ICON_SIZE).includes(size as SizeType)
      ? (size as SizeType)
      : ICON_SIZE.size20,
    correctSizes: undefined,
  } as const;
};
