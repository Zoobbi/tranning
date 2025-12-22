import { INPUT_TYPES } from "@shared/ui/inputs/constants";
import type {
  FiltersOnApply,
  SortOnApply,
} from "@widgets/filter-sorting-panel/types";

import { OneLevelFilter } from "./OneLevelFilter";
import { TwoLevelFilter } from "./TwoLevelsFilter";
import type {
  FiltersBottomSheetProps,
  InitialOptionsFiltersProps,
  InitialOptionsTwoLevelsFiltersState,
} from "./types";

export const FiltersBottomSheet = ({
  filterHeader,
  isFilterOpen,
  setIsFilterOpen,
  filterType = INPUT_TYPES.checkbox,
  initialOptions,
  isTwoLevelFilter = false,
  onApply,
  isReset,
  setIsReset,
}: FiltersBottomSheetProps) => {
  return isTwoLevelFilter ? (
    <TwoLevelFilter
      filterHeader={filterHeader}
      initialCategories={
        initialOptions as Array<InitialOptionsTwoLevelsFiltersState>
      }
      isFilterOpen={isFilterOpen}
      setIsFilterOpen={setIsFilterOpen}
      onApply={onApply as FiltersOnApply}
      isReset={isReset}
      setIsReset={setIsReset}
    />
  ) : (
    <OneLevelFilter
      filterHeader={filterHeader}
      isFilterOpen={isFilterOpen}
      setIsFilterOpen={setIsFilterOpen}
      filterType={filterType}
      initialOptions={initialOptions as Array<InitialOptionsFiltersProps>}
      onApply={onApply as SortOnApply}
      isReset={isReset}
      setIsReset={setIsReset}
    />
  );
};
