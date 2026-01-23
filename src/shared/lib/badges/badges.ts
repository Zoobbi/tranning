import { Ball } from "@shared/assets/icons";
import {
  Anniversary,
  BallOnFire,
  Marathon,
  Points3,
} from "@shared/assets/icons/badges";

import type { BadgeId, BadgeMeta } from "./types";

export const BADGE_NAMES = {
  disabled: "disabled",
  bronze: "bronze",
  silver: "silver",
  gold: "gold",
  hof: "hof",
  legendary: "legendary",
};

export const BADGE_LABELS = {
  disabled: "Закрыт",
  bronze: "Бронзовый",
  silver: "Серебряный",
  gold: "Золотой",
  hof: "Зал славы",
  legendary: "Легендарный",
};

export const BADGE_LEVEL_PRIORITY: Record<string, number> = {
  [BADGE_NAMES.disabled]: 0,
  [BADGE_NAMES.bronze]: 1,
  [BADGE_NAMES.silver]: 2,
  [BADGE_NAMES.gold]: 3,
  [BADGE_NAMES.hof]: 4,
  [BADGE_NAMES.legendary]: 5,
};

export const BADGE_TYPE = {
  activity: {
    value: "activity",
    label: "Активности",
  },
  progress: {
    value: "progress",
    label: "Прогресс",
  },
  social: {
    value: "social",
    label: "Социальные",
  },
  milestone: {
    value: "milestone",
    label: "Вехи",
  },
  skill: {
    value: "skill",
    label: "Навыки",
  },
};

export const BADGE_IDS = {
  MARATHON: "marathon",
  RECORD_BREAKER: "record_breaker",
  SOCIAL_STAR: "social_star",
  ANNIVERSARY: "anniversary",
  SNIPER: "sniper",
  HOT_HAND: "hot_hand",
} as const;

export const BADGES: Record<BadgeId, BadgeMeta> = {
  [BADGE_IDS.MARATHON]: {
    id: BADGE_IDS.MARATHON,
    title: "Марафонец",
    description: "Награда за регулярные тренировки.",
    type: BADGE_TYPE.activity.value,
    icon: Marathon,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 10,
        description: "Проведено 10 тренировок за месяц.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 20,
        description: "Проведено 20 тренировок за месяц.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 30,
        description: "Проведено 30 тренировок за месяц.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 40,
        description: "Проведено 40 тренировок за месяц.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 50,
        description: "Проведено 50 тренировок за месяц.",
      },
    ],
  },
  [BADGE_IDS.RECORD_BREAKER]: {
    id: BADGE_IDS.RECORD_BREAKER,
    title: "Рекордсмен",
    description: "Награда за побитие личных рекордов.",
    type: BADGE_TYPE.progress.value,
    icon: Ball,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 1,
        description: "Побит личный рекорд 1 раз.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 3,
        description: "Побит личный рекорд 3 раза.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 5,
        description: "Побит личный рекорд 5 раз.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 10,
        description: "Побит личный рекорд 10 раз.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 20,
        description: "Побит личный рекорд 20 раз.",
      },
    ],
  },
  [BADGE_IDS.SOCIAL_STAR]: {
    id: BADGE_IDS.SOCIAL_STAR,
    title: "Социальный лидер",
    description: "Награда за взаимодействие с другими пользователями.",
    type: BADGE_TYPE.social.value,
    icon: Ball,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 5,
        description: "Оставлено 5 лайков или комментариев.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 10,
        description: "Оставлено 10 лайков или комментариев.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 20,
        description: "Оставлено 20 лайков или комментариев.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 50,
        description: "Оставлено 50 лайков или комментариев.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 100,
        description: "Оставлено 100 лайков или комментариев.",
      },
    ],
  },
  [BADGE_IDS.ANNIVERSARY]: {
    id: BADGE_IDS.ANNIVERSARY,
    title: "Юбилей",
    description: "Награда за длительное использование приложения.",
    type: BADGE_TYPE.milestone.value,
    icon: Anniversary,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 30,
        description: "Используете приложение уже 30 дней.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 90,
        description: "Используете приложение уже 90 дней.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 180,
        description: "Используете приложение уже 180 дней.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 365,
        description: "Используете приложение уже 365 дней.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 730,
        description: "Используете приложение уже 2 года.",
      },
    ],
  },
  [BADGE_IDS.SNIPER]: {
    id: BADGE_IDS.SNIPER,
    title: "Снайпер",
    description: "Награда за успешные трехочковые броски на тренировках.",
    type: BADGE_TYPE.skill.value,
    icon: Points3,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 25,
        description: "Забили 25 трехочковых бросков на тренировках.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 100,
        description: "Забили 100 трехочковых бросков на тренировках.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 250,
        description: "Забили 250 трехочковых бросков на тренировках.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 500,
        description: "Забили 500 трехочковых бросков на тренировках.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 1000,
        description: "Забили 1000 трехочковых бросков на тренировках.",
      },
    ],
  },
  [BADGE_IDS.HOT_HAND]: {
    id: BADGE_IDS.HOT_HAND,
    title: "Горячая рука",
    description: "Награда за серию подряд забитых трехочковых бросков.",
    type: BADGE_TYPE.skill.value,
    icon: BallOnFire,
    levels: [
      {
        level: BADGE_NAMES.bronze,
        condition: 3,
        description: "Забили 3 трехочковых подряд.",
      },
      {
        level: BADGE_NAMES.silver,
        condition: 5,
        description: "Забили 5 трехочковых подряд.",
      },
      {
        level: BADGE_NAMES.gold,
        condition: 10,
        description: "Забили 10 трехочковых подряд.",
      },
      {
        level: BADGE_NAMES.hof,
        condition: 15,
        description: "Забили 15 трехочковых подряд.",
      },
      {
        level: BADGE_NAMES.legendary,
        condition: 20,
        description: "Забили 20 трехочковых подряд.",
      },
    ],
  },
};
