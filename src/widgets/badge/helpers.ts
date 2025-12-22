import { BADGE_NAMES } from "@shared/lib/badges";

export const getProgressBarColor = (currentBadgeColor: string) => {
  const allColors = Object.values(BADGE_NAMES);
  const currentColorIndex = allColors.findIndex(
    (color) => currentBadgeColor === color,
  );

  if (currentColorIndex + 1 >= allColors.length) {
    return BADGE_NAMES.legendary;
  }

  return allColors[currentColorIndex + 1] || BADGE_NAMES.bronze;
};
