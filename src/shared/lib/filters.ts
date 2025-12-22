import { QUERY_PARAMS } from "@shared/lib/queryParams";

export type FilterKey = keyof typeof QUERY_PARAMS.achievements;

export const FILTER_KEYS: readonly FilterKey[] = [
  QUERY_PARAMS.achievements.sort,
  QUERY_PARAMS.achievements.type,
  QUERY_PARAMS.achievements.level,
] as readonly FilterKey[];
