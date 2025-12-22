import { FilterSortingPanel } from "@widgets/filter-sorting-panel";

import { useAchievementsFilters } from "./useFliterAchivmentsPage";

export const FiltersAchievementsPage = () => {
  const {
    filterCategories,
    sortOptions,
    handleFilterApply,
    handleSortApply,
    clearAllFilterHandler,
    isActiveFilters,
    isReset,
    setIsReset,
  } = useAchievementsFilters();

  return (
    <FilterSortingPanel
      initialFilterOptions={filterCategories}
      initialSortOptions={sortOptions}
      onFilterApply={handleFilterApply}
      onSortApply={handleSortApply}
      isActiveFilters={isActiveFilters}
      onCloseFilter={clearAllFilterHandler}
      isReset={isReset}
      setIsReset={setIsReset}
    />
  );
};
