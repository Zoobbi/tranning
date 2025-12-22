import type { ReactNode } from "react";

import type { BADGE_IDS } from "./badges";

export type BadgeId = (typeof BADGE_IDS)[keyof typeof BADGE_IDS];

export interface BadgeMeta {
  id: BadgeId;
  title: string;
  description: string;
  type: string;
  icon: ReactNode;
  levels: {
    level: string;
    condition: number;
    description: string;
  }[];
}
