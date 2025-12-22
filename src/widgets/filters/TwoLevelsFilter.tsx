import { useCallback, useEffect, useMemo, useState } from "react";

import { ModalSheet } from "@features/modal-sheet";
import { TEXTS } from "@shared/lib/texts";
import {
  Button,
  CheckboxGroup,
  FlexWrapper,
  MiniButton,
  RadioButtonGroup,
} from "@shared/ui";
import { INPUT_TYPES } from "@shared/ui/inputs/constants";
import type { OptionsSetter } from "@shared/ui/inputs/types";
import { TextWithIcon } from "@shared/ui/text-with-icon";
import { HeadingLevel3 } from "@shared/ui/typography";

import { FilterListWrapper, LineStyled } from "./styled";
import type {
  InitialOptionsFiltersProps,
  InitialOptionsTwoLevelsFiltersState,
  TwoLevelFilterProps,
} from "./types";

export const TwoLevelFilter = ({
  initialCategories,
  filterHeader,
  isFilterOpen,
  setIsFilterOpen,
  onApply,
  isReset,
  setIsReset,
}: TwoLevelFilterProps) => {
  const [categories, setCategories] =
    useState<Array<InitialOptionsTwoLevelsFiltersState>>(initialCategories);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [optionsList, setOptionsList] =
    useState<Array<InitialOptionsFiltersProps> | null>(null);

  const currentCategory = useMemo(() => {
    return activeCategory
      ? categories.find((cat) => cat.id === activeCategory)
      : null;
  }, [activeCategory, categories]);

  useEffect(() => {
    if (optionsList && currentCategory) {
      const updatedCategories = categories.map((cat) =>
        cat.id === currentCategory.id
          ? {
              ...cat,
              options: optionsList,
            }
          : cat,
      );

      setCategories(updatedCategories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsList]);

  useEffect(() => {
    if (isReset) {
      setCategories(initialCategories);
      setOptionsList(null);
      setActiveCategory(null);

      setIsReset(false);
    }
  }, [initialCategories, isReset, setIsReset]);

  const setActiveCategoryHandler = useCallback(
    (category: InitialOptionsTwoLevelsFiltersState) => {
      setOptionsList(category.options);
      setActiveCategory(category.id);
    },
    [setOptionsList, setActiveCategory],
  );

  const isSomeOptionsChecked = currentCategory
    ? currentCategory.options.some((opt) => opt.isChecked)
    : false;

  const onClearHandler = useCallback(() => {
    if (optionsList) {
      setOptionsList((prevState) => {
        if (!prevState) {
          return null;
        }

        return prevState.map((prev) => ({
          ...prev,
          isChecked: false,
        }));
      });
    }
  }, [optionsList]);

  const onCloseHandler = useCallback(() => {
    setIsFilterOpen(false);
    onApply?.(categories);
  }, [categories, onApply, setIsFilterOpen]);

  const onUnsetActiveCategories = useCallback(() => {
    setActiveCategory(null);
  }, []);

  const handleCategoryClick = useCallback(
    (category: InitialOptionsTwoLevelsFiltersState) => () => {
      setActiveCategoryHandler(category);
    },
    [setActiveCategoryHandler],
  );

  const CategoriesList = categories.map((category) => (
    <FilterListWrapper key={category.id}>
      <TextWithIcon
        label={category.label}
        onClick={handleCategoryClick(category)}
      />
    </FilterListWrapper>
  ));

  return (
    <ModalSheet isOpen={isFilterOpen} onClose={onCloseHandler}>
      <FlexWrapper
        height="30px"
        alignItems="center"
        justifyContent="space-between"
      >
        <HeadingLevel3>{filterHeader}</HeadingLevel3>
        {isSomeOptionsChecked &&
          currentCategory &&
          currentCategory.type !== INPUT_TYPES.radio && (
            <MiniButton
              isTextUnderlined
              onClick={onClearHandler}
              label={TEXTS.filters.clear}
            />
          )}
      </FlexWrapper>

      <LineStyled />

      {currentCategory && optionsList ? (
        <>
          {currentCategory.type === INPUT_TYPES.radio && optionsList && (
            <RadioButtonGroup
              options={optionsList}
              setOptions={setOptionsList as OptionsSetter}
            />
          )}
          {currentCategory.type === INPUT_TYPES.checkbox && optionsList && (
            <CheckboxGroup
              options={optionsList}
              setOptions={setOptionsList as OptionsSetter}
            />
          )}
          <FlexWrapper justifyContent="center">
            <Button onClick={onUnsetActiveCategories}>
              {TEXTS.common.confirm}
            </Button>
          </FlexWrapper>
        </>
      ) : (
        <>
          {CategoriesList}
          <FlexWrapper justifyContent="center">
            <Button onClick={onCloseHandler}>{TEXTS.common.confirm}</Button>
          </FlexWrapper>
        </>
      )}
    </ModalSheet>
  );
};
