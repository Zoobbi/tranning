import type { Dispatch, SetStateAction } from "react";

import type {
  InitialOptionsFiltersProps,
  InitialOptionsTwoLevelsFiltersState,
} from "@widgets/filters/types";

export type FiltersOnApply = (
  categories: InitialOptionsTwoLevelsFiltersState[],
) => void;
export type SortOnApply = (options: InitialOptionsFiltersProps[]) => void;

export interface FilterSortingPanelProps {
  initialFilterOptions: Array<InitialOptionsTwoLevelsFiltersState>;
  initialSortOptions: Array<InitialOptionsFiltersProps>;
  isActiveFilters: boolean;
  onFilterApply: FiltersOnApply;
  onSortApply: SortOnApply;
  onCloseFilter: () => void;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
}
