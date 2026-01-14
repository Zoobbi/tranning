import { useCallback, useState } from "react";

import { Close, Filter, Sort } from "@shared/assets/icons";
import { TEXTS } from "@shared/lib/texts";
import { Button, FlexWrapper, MiniButton } from "@shared/ui";
import { BUTTON_VARIANTS } from "@shared/ui/button";
import { INPUT_TYPES } from "@shared/ui/inputs/constants";
import { useTheme } from "@theme/";
import { FiltersBottomSheet } from "@widgets/filters";

import { FlexWrapperStyled } from "./styled";
import type { FilterSortingPanelProps } from "./types";

export const FilterSortingPanel = ({
  initialFilterOptions,
  initialSortOptions,
  isActiveFilters,
  onFilterApply,
  onSortApply,
  onCloseFilter,
  isReset,
  setIsReset,
}: FilterSortingPanelProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const { theme } = useTheme();

  const filterOpenHandler = useCallback(() => {
    setIsFilterOpen(true);
  }, []);

  const sortOpenHandler = useCallback(() => {
    setIsSortOpen(true);
  }, []);

  return (
    <>
      <FlexWrapperStyled
        mb="8px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button iconForText={Filter} onClick={filterOpenHandler}>
          {TEXTS.filters.filter}
        </Button>
        <Button
          variant={BUTTON_VARIANTS.shadow}
          iconForText={Sort}
          onClick={sortOpenHandler}
        >
          {TEXTS.filters.sort}
        </Button>
      </FlexWrapperStyled>
      {isActiveFilters && (
        <FlexWrapper mb="16px" justifyContent="center" alignItems="center">
          <MiniButton
            label={TEXTS.filters.removeFilters}
            textColor={theme.colors.textSecondary}
            icon={Close}
            isIconFirst
            onClick={onCloseFilter}
          />
        </FlexWrapper>
      )}
      <FiltersBottomSheet
        filterHeader={TEXTS.filters.filter}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        isTwoLevelFilter
        initialOptions={initialFilterOptions}
        onApply={onFilterApply}
        isReset={isReset}
        setIsReset={setIsReset}
      />
      <FiltersBottomSheet
        filterHeader={TEXTS.filters.sort}
        isFilterOpen={isSortOpen}
        setIsFilterOpen={setIsSortOpen}
        filterType={INPUT_TYPES.radio}
        initialOptions={initialSortOptions}
        onApply={onSortApply}
        isReset={isReset}
        setIsReset={setIsReset}
      />
    </>
  );
};
