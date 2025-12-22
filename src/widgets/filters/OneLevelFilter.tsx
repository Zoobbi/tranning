import { useCallback, useEffect, useState } from "react";

import { ModalSheet } from "@features/modal-sheet";
import { TEXTS } from "@shared/lib/texts";
import {
  Button,
  CheckboxGroup,
  FlexWrapper,
  RadioButtonGroup,
} from "@shared/ui";
import { INPUT_TYPES } from "@shared/ui/inputs/constants";
import { HeadingLevel3 } from "@shared/ui/typography";

import { LineStyled } from "./styled";
import type { OneLevelFilterProps } from "./types";

export const OneLevelFilter = ({
  filterHeader,
  isFilterOpen,
  setIsFilterOpen,
  filterType = INPUT_TYPES.checkbox,
  initialOptions,
  onApply,
  isReset,
  setIsReset,
}: OneLevelFilterProps) => {
  const [options, setOptions] = useState(initialOptions);

  const onCloseHandler = useCallback(() => {
    setIsFilterOpen(false);
    onApply?.(options);
  }, [options, onApply, setIsFilterOpen]);

  let onCloseWithoutApproveHandler: () => void;
  onCloseWithoutApproveHandler = useCallback(() => {
    setIsFilterOpen(false);
  }, [setIsFilterOpen]);

  useEffect(() => {
    if (isReset) {
      setOptions(initialOptions);

      setIsReset(false);
    }
  }, [initialOptions, isReset, setIsReset]);

  return (
    <ModalSheet isOpen={isFilterOpen} onClose={onCloseWithoutApproveHandler}>
      <FlexWrapper
        height="30px"
        alignItems="center"
        justifyContent="space-between"
      >
        <HeadingLevel3>{filterHeader}</HeadingLevel3>
      </FlexWrapper>

      <LineStyled />

      {filterType === INPUT_TYPES.radio && options && (
        <RadioButtonGroup options={options} setOptions={setOptions} />
      )}
      {filterType === INPUT_TYPES.checkbox && options && (
        <CheckboxGroup options={options} setOptions={setOptions} />
      )}

      <FlexWrapper justifyContent="center">
        <Button onClick={onCloseHandler}>{TEXTS.common.confirm}</Button>
      </FlexWrapper>
    </ModalSheet>
  );
};
