import { QUERY_PARAMS } from "@shared/lib/queryParams";
import type {
  InitialOptionsFiltersProps,
  InitialOptionsTwoLevelsFiltersState,
} from "@widgets/filters/types";

export const parseFiltersFromUrl = (
  searchParams: URLSearchParams,
  initialCategories: InitialOptionsTwoLevelsFiltersState[],
): InitialOptionsTwoLevelsFiltersState[] => {
  return initialCategories.map((category) => {
    const paramValue = searchParams.get(category.id);
    const selectedValues = paramValue ? paramValue.split(",") : [];

    return {
      ...category,
      options: category.options.map((option) => ({
        ...option,
        isChecked: selectedValues.includes(option.value),
      })),
    };
  });
};

export const buildUrlFromFilters = (
  categories: InitialOptionsTwoLevelsFiltersState[],
  currentParams: URLSearchParams,
): URLSearchParams => {
  const newParams = new URLSearchParams();

  for (const [key, value] of currentParams.entries()) {
    if (!categories.some((cat) => cat.id === key)) {
      newParams.set(key, value);
    }
  }

  categories.forEach((category) => {
    const selectedValues = category.options
      .filter((opt) => opt.isChecked)
      .map((opt) => opt.value);
    if (selectedValues.length > 0) {
      newParams.set(category.id, selectedValues.join(","));
    }
  });

  return newParams;
};

export const parseSortFromUrl = (
  searchParams: URLSearchParams,
  initialSortOptions: InitialOptionsFiltersProps[],
): InitialOptionsFiltersProps[] => {
  const sortParam = searchParams.get(QUERY_PARAMS.achievements.sort);

  return initialSortOptions.map((option) => ({
    ...option,
    isChecked: option.value === sortParam,
  }));
};

export const buildUrlWithSort = (
  selectedSortValue: string | null,
  currentParams: URLSearchParams,
): URLSearchParams => {
  const newParams = new URLSearchParams(currentParams);
  if (selectedSortValue) {
    newParams.set(QUERY_PARAMS.achievements.sort, selectedSortValue);
  } else {
    newParams.delete(QUERY_PARAMS.achievements.sort);
  }

  return newParams;
};
