import { BADGE_LABELS, BADGE_NAMES, BADGE_TYPE } from "@shared/lib/badges";
import {
  ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES,
  QUERY_PARAMS,
} from "@shared/lib/queryParams";
import { TEXTS } from "@shared/lib/texts";
import { INPUT_TYPES } from "@shared/ui/inputs/constants";

export const initialFilterOptions = [
  {
    id: QUERY_PARAMS.achievements.type,
    label: TEXTS.filters.badgeType,
    type: INPUT_TYPES.checkbox,
    options: [
      {
        id: BADGE_TYPE.skill.value,
        label: BADGE_TYPE.skill.label,
        value: BADGE_TYPE.skill.value,
        isChecked: false,
      },
      {
        id: BADGE_TYPE.activity.value,
        label: BADGE_TYPE.activity.label,
        value: BADGE_TYPE.activity.value,
        isChecked: false,
      },
      {
        id: BADGE_TYPE.social.value,
        label: BADGE_TYPE.social.label,
        value: BADGE_TYPE.social.value,
        isChecked: false,
      },
      {
        id: BADGE_TYPE.progress.value,
        label: BADGE_TYPE.progress.label,
        value: BADGE_TYPE.progress.value,
        isChecked: false,
      },
      {
        id: BADGE_TYPE.milestone.value,
        label: BADGE_TYPE.milestone.label,
        value: BADGE_TYPE.milestone.value,
        isChecked: false,
      },
    ],
  },
  {
    id: QUERY_PARAMS.achievements.level,
    label: TEXTS.filters.badgeLevel,
    type: INPUT_TYPES.checkbox,
    options: [
      {
        id: BADGE_NAMES.disabled,
        label: BADGE_LABELS.disabled,
        value: BADGE_NAMES.disabled,
        isChecked: false,
      },
      {
        id: BADGE_NAMES.bronze,
        label: BADGE_LABELS.bronze,
        value: BADGE_NAMES.bronze,
        isChecked: false,
      },
      {
        id: BADGE_NAMES.silver,
        label: BADGE_LABELS.silver,
        value: BADGE_NAMES.silver,
        isChecked: false,
      },
      {
        id: BADGE_NAMES.gold,
        label: BADGE_LABELS.gold,
        value: BADGE_NAMES.gold,
        isChecked: false,
      },
      {
        id: BADGE_NAMES.hof,
        label: BADGE_LABELS.hof,
        value: BADGE_NAMES.hof,
        isChecked: false,
      },
      {
        id: BADGE_NAMES.legendary,
        label: BADGE_LABELS.legendary,
        value: BADGE_NAMES.legendary,
        isChecked: false,
      },
    ],
  },
];

export const initialSortingOptions = [
  {
    id: ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelDown,
    label: TEXTS.filters.badgeSortLevelDown,
    value: ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelDown,
    isChecked: true,
  },
  {
    id: ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelUp,
    label: TEXTS.filters.badgeSortLevelUp,
    value: ACHIEVEMENTS_QUERY_PARAMS_SORT_VALUES.levelUp,
    isChecked: false,
  },
];
