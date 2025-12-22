import { useState, useEffect, useCallback } from "react";

import { useSearchParams } from "react-router-dom";

import { useClearFilters, useIsFilterActive } from "@shared/hooks";
import type { FilterKey } from "@shared/lib/filters";
import { QUERY_PARAMS } from "@shared/lib/queryParams";
import type {
  InitialOptionsFiltersProps,
  InitialOptionsTwoLevelsFiltersState,
} from "@widgets/filters/types";

import { initialFilterOptions, initialSortingOptions } from "./constants";
import {
  parseFiltersFromUrl,
  buildUrlFromFilters,
  parseSortFromUrl,
  buildUrlWithSort,
} from "./helpres";

export const useAchievementsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isReset, setIsReset] = useState(false);
  const [filterCategories, setFilterCategories] = useState<
    InitialOptionsTwoLevelsFiltersState[]
  >(() => parseFiltersFromUrl(searchParams, initialFilterOptions));
  const [sortOptions, setSortOptions] = useState<InitialOptionsFiltersProps[]>(
    () => parseSortFromUrl(searchParams, initialSortingOptions),
  );

  const filterQueryParams = Object.values(
    QUERY_PARAMS.achievements,
  ) as readonly FilterKey[];

  const isActiveFilters = useIsFilterActive(filterQueryParams);

  const clearAllFilters = useClearFilters(filterQueryParams);

  useEffect(() => {
    setFilterCategories(
      parseFiltersFromUrl(searchParams, initialFilterOptions),
    );
    setSortOptions(parseSortFromUrl(searchParams, initialSortingOptions));
  }, [searchParams]);

  const handleFilterApply = useCallback(
    (categories: InitialOptionsTwoLevelsFiltersState[]) => {
      setFilterCategories(categories);
      const newParams = buildUrlFromFilters(categories, searchParams);
      setSearchParams(newParams, {
        replace: true,
      });
    },
    [searchParams, setSearchParams],
  );

  const handleSortApply = useCallback(
    (options: InitialOptionsFiltersProps[]) => {
      setSortOptions(options);
      const selectedOption = options.find((opt) => opt.isChecked);
      const sortValue = selectedOption?.value ?? null;
      const newParams = buildUrlWithSort(sortValue, searchParams);
      setSearchParams(newParams, {
        replace: true,
      });
    },
    [searchParams, setSearchParams],
  );

  const clearAllFilterHandler = useCallback(() => {
    clearAllFilters();
    setFilterCategories(initialFilterOptions);
    setSortOptions(initialSortingOptions);
    setIsReset(true);
  }, [clearAllFilters]);

  return {
    filterCategories,
    sortOptions,
    handleFilterApply,
    handleSortApply,
    clearAllFilterHandler,
    isReset,
    setIsReset,
    isActiveFilters,
  };
};
