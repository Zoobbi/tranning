import React, { useCallback } from "react";

import { CheckboxCheck } from "@shared/assets/icons";
import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";

import { INPUT_TYPES } from "../constants";
import { RegularTextLevel3Styled } from "../styled";
import type { CheckboxProps } from "../types";

import {
  CheckboxWrapperStyled,
  HiddenCheckboxStyled,
  SvgWrapperStyled,
} from "./styled";

export const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  const handleChange = useCallback(() => {
    onChange(!isChecked);
  }, [onChange, isChecked]);

  return (
    <CheckboxWrapperStyled>
      <HiddenCheckboxStyled
        type={INPUT_TYPES.checkbox}
        checked={isChecked}
        onClick={handleChange}
      />
      <SvgWrapperStyled isChecked={isChecked}>
        {isChecked && <SVGIcon size={ICON_SIZE.size16} type={CheckboxCheck} />}
      </SvgWrapperStyled>
      <RegularTextLevel3Styled>{label}</RegularTextLevel3Styled>
    </CheckboxWrapperStyled>
  );
};
