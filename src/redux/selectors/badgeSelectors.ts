import { last, get } from "lodash";
import { createSelector } from "reselect";

import { BADGE_NAMES, BADGES } from "@shared/lib/badges";
import { BADGE_LEVEL_PRIORITY } from "@shared/lib/badges/badges";
import type { BadgeId } from "@shared/lib/badges/types";
import {
  ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES,
  QUERY_PARAMS,
} from "@shared/lib/queryParams";

import type { State } from "../types";

const selectBadgeProgress = (state: State) => state.badgeProgress;

export const selectBadgeInfo = createSelector(
  [selectBadgeProgress],
  (badgeProgress) => (badgeId: BadgeId) => {
    const badge = BADGES[badgeId];
    if (!badge) {
      throw new Error(`Badge "${badgeId}" not found in BADGES`);
    }

    const progress = badgeProgress[badgeId] || {
      value: 0,
      level: BADGE_NAMES.disabled,
    };

    // === 1. Находим текущий и следующий уровень ===
    // Сортируем уровни по условию на случай, если порядок нарушен
    const sortedLevels = [...badge.levels].sort(
      (a, b) => a.condition - b.condition,
    );

    // Текущий уровень — максимальный, для которого condition <= progress.value
    const unlockedLevels = sortedLevels.filter(
      (l) => progress.value >= l.condition,
    );
    const currentLevel = get(
      last(unlockedLevels),
      QUERY_PARAMS.achievements.level,
      BADGE_NAMES.disabled,
    );
    const currentLevelIndex = sortedLevels.findIndex(
      (l) => l.level === currentLevel,
    );

    const nextLevel = sortedLevels[currentLevelIndex + 1] || null;

    // === 2. Считаем прогресс (между уровнями!) ===
    let progressPercent = 0;
    let remaining = 0;
    let nextThreshold = 0;

    if (!nextLevel) {
      // Достигнут максимальный уровень
      progressPercent = 100;
      remaining = 0;
      nextThreshold = get(last(sortedLevels), "condition", 0);
    } else {
      const from =
        currentLevelIndex >= 0 ? sortedLevels[currentLevelIndex].condition : 0;
      const to = nextLevel.condition;
      const progressInRange = progress.value - from;
      const range = to - from;

      progressPercent = Math.min(
        100,
        Math.max(0, (progressInRange / range) * 100),
      );
      remaining = to - progress.value;
      nextThreshold = to;
    }

    // === 3. Возвращаем всё, что нужно UI ===
    return {
      // Метаданные
      id: badge.id,
      title: badge.title,
      description: badge.description,
      icon: badge.icon,
      type: badge.type,
      levels: badge.levels,

      // Прогресс
      progressValue: progress.value,
      currentLevel, // например: "bronze"
      nextLevel: nextLevel?.level || null, // например: "silver"
      progressPercent, // 0–100
      remaining, // сколько осталось до следующего уровня
      nextThreshold, // абсолютное значение условия следующего уровня
      bronzeLevelCondition: badge.levels[0]?.condition || 0,
      nextLevelCondition: nextThreshold,
    };
  },
);

export const selectFilteredAndSortedBadges = createSelector(
  [
    selectBadgeProgress,
    (state: State, searchParams: URLSearchParams) => searchParams,
  ],
  (badgeProgress, searchParams) => {
    const typeFilters =
      searchParams.get(QUERY_PARAMS.achievements.type)?.split(",") || [];
    const levelFilters =
      searchParams.get(QUERY_PARAMS.achievements.level)?.split(",") || [];
    const sortValue = searchParams.get(QUERY_PARAMS.achievements.sort);

    let badges = Object.values(BADGES);

    // 🔍 Filter by type
    if (typeFilters.length > 0) {
      badges = badges.filter((badge) => typeFilters.includes(badge.type));
    }

    // 🔍 Filter by level (metadata: does badge *have* this level?)
    if (levelFilters.length > 0) {
      badges = badges.filter((badge) =>
        levelFilters.includes(badgeProgress[badge.id]?.level),
      );
    }

    // ⬆️⬇️ Sort by *user’s actual level* (from Redux)
    if (
      sortValue === ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelUp ||
      sortValue === ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelDown
    ) {
      badges = [...badges].sort((a, b) => {
        const progressA = badgeProgress[a.id] || {
          level: BADGE_NAMES.disabled,
        };
        const progressB = badgeProgress[b.id] || {
          level: BADGE_NAMES.disabled,
        };

        const prioA = BADGE_LEVEL_PRIORITY[progressA.level] ?? 0;
        const prioB = BADGE_LEVEL_PRIORITY[progressB.level] ?? 0;

        if (sortValue === ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelUp)
          return prioA - prioB; // disabled → legendary

        return prioB - prioA; // legendary → disabled
      });
    }

    return badges;
  },
);
