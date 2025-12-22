import type { Dispatch, SetStateAction } from "react";

import type { INPUT_TYPES } from "@shared/ui/inputs/constants";
import type {
  FiltersOnApply,
  SortOnApply,
} from "@widgets/filter-sorting-panel/types";

export interface CommonFiltersBottomSheetProps {
  filterHeader: string;
  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
}

export interface FiltersBottomSheetProps extends CommonFiltersBottomSheetProps {
  isTwoLevelFilter?: boolean;
  onApply: FiltersOnApply | SortOnApply;
  filterType?: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
  initialOptions: Array<
    InitialOptionsFiltersProps | InitialOptionsTwoLevelsFiltersState
  >;
}

export interface OneLevelFilterProps extends CommonFiltersBottomSheetProps {
  initialOptions: Array<InitialOptionsFiltersProps>;
  filterType: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
  onApply: SortOnApply;
}

export interface TwoLevelFilterProps extends CommonFiltersBottomSheetProps {
  initialCategories: Array<InitialOptionsTwoLevelsFiltersState>;
  onApply: FiltersOnApply;
}

export interface InitialOptionsFiltersProps {
  id: string;
  label: string;
  isChecked: boolean;
  value: string;
}

export interface InitialOptionsTwoLevelsFiltersState {
  id: string;
  label: string;
  type: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
  options: Array<InitialOptionsFiltersProps>;
}

/*
*  isTwoLevelFilter?: boolean;
  initialOptions: Array<
    InitialOptionsFiltersProps | InitialOptionsTwoLevelsFiltersState
  >;*/
