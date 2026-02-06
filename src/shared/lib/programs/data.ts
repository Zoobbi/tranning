import type { ReactNode } from "react";

import {
  Ball,
  BasketballRim,
  Cone,
  JumpingRope,
  TennisBall,
} from "@shared/assets/icons";

export const DIFFICULT_LEVELS = {
  beginner: {
    id: "beginner",
    label: "начинающий",
  },
  amateur: {
    id: "amateur",
    label: "любитель",
  },
  semiPro: {
    id: "semiPro",
    label: "полу-про",
  },
  professional: {
    id: "professional",
    label: "профессионал",
  },
  legend: {
    id: "legend",
    label: "легенда",
  },
};

export const COURSE_CATEGORY = {
  basketball: {
    id: "basketball",
    label: "баскетбол",
    subcategories: {
      ballControl: {
        id: "ball_control",
        label: "контроль мяча",
      },
      shooting: {
        id: "shooting",
        label: "бросок",
      },
    },
  },
  ggp: {
    id: "ggp",
    label: "ОФП",
  },
};

export const EQUIPMENTS: {
  [key: string]: { id: string; icon: ReactNode; title: string };
} = {
  ball: {
    id: "ball",
    icon: Ball,
    title: "баскетбольный мяч",
  },
  tennisBall: {
    id: "tennisBall",
    icon: TennisBall,
    title: "теннисный мяч",
  },
  jumpingRope: {
    id: "jumpingRope",
    icon: JumpingRope,
    title: "скакалка",
  },
  cone: {
    id: "cone",
    icon: Cone,
    title: "конусы",
  },
  basketballRim: {
    id: "basketballRim",
    icon: BasketballRim,
    title: "баскетбольное кольцо",
  },
};
