import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { BADGE_NAMES, BADGES } from "@shared/lib/badges";
import type { BadgeId } from "@shared/lib/badges/types";

import type { BadgeProgressState } from "../types";

const initialState: BadgeProgressState = {
  marathon: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
  record_breaker: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
  social_star: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
  anniversary: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
  sniper: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
  hot_hand: {
    value: 0,
    level: BADGE_NAMES.disabled,
  },
};

const getBadgeLevel = (badgeId: BadgeId, currentProgress: number): string => {
  const badge = BADGES[badgeId];
  if (!badge) return BADGE_NAMES.disabled;

  // Находим максимальный уровень, для которого condition ≤ currentProgress
  const unlockedLevels = badge.levels
    .filter((level) => currentProgress >= level.condition)
    .sort((a, b) => b.condition - a.condition); // от большего к меньшему

  return unlockedLevels.length > 0
    ? unlockedLevels[0].level
    : BADGE_NAMES.disabled;
};

const badgeSlice = createSlice({
  name: "badgeProgress",
  initialState,
  reducers: {
    updateProgress: (
      state,
      action: PayloadAction<{ badgeId: BadgeId; progress: number }>,
    ) => {
      const { badgeId, progress } = action.payload;
      const current = state[badgeId];

      if (!current) return; // или инициализируй, если нужно

      const newValue = (current.value || 0) + progress;
      const newLevel = getBadgeLevel(badgeId, newValue);

      state[badgeId] = {
        value: newValue,
        level: newLevel,
      };
    },
    resetProgress: () => initialState,
  },
});

export const { updateProgress, resetProgress } = badgeSlice.actions;
export const badgeReducer = badgeSlice.reducer;
