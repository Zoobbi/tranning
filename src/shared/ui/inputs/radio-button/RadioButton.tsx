import React, { useCallback } from "react";

import { INPUT_TYPES } from "../constants";
import { RegularTextLevel3Styled } from "../styled";
import type { RadioButtonProps } from "../types";

import {
  RadioWrapperStyled,
  HiddenRadioStyled,
  SvgWrapperStyled,
  CheckedRadioStyled,
} from "./styled";

export const RadioButton = ({
  label,
  value,
  isChecked,
  onChange,
}: RadioButtonProps) => {
  const handleChange = useCallback(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <RadioWrapperStyled>
      <HiddenRadioStyled
        type={INPUT_TYPES.radio}
        checked={isChecked}
        onChange={handleChange}
      />
      <SvgWrapperStyled $isChecked={isChecked}>
        {isChecked && <CheckedRadioStyled />}
      </SvgWrapperStyled>
      <RegularTextLevel3Styled>{label}</RegularTextLevel3Styled>
    </RadioWrapperStyled>
  );
};
