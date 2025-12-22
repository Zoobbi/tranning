import { useCallback } from "react";

import { useSearchParams } from "react-router-dom";

import { FILTER_KEYS } from "@shared/lib/filters";

export const useClearFilters = (
  filterKeys: readonly string[] = FILTER_KEYS,
) => {
  const [, setSearchParams] = useSearchParams();

  const clearFilters = useCallback(() => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);

        filterKeys.forEach((key) => newParams.delete(key));

        return newParams;
      },
      {
        replace: true,
      },
    );
  }, [setSearchParams, filterKeys]);

  return clearFilters;
};
