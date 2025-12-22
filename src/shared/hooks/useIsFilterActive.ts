import { useMemo } from "react";

import { useSearchParams } from "react-router-dom";

import { FILTER_KEYS, type FilterKey } from "@shared/lib/filters";

export const useIsFilterActive = (
  filterKeys: readonly FilterKey[] = FILTER_KEYS,
): boolean => {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    return filterKeys.some((key) => searchParams.has(key));
  }, [searchParams, filterKeys]);
};
