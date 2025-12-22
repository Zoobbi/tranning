import React, { useCallback } from "react";

import { InputItemStyled, InputsListStyled } from "../styled";
import type { InputGroupProps } from "../types";

import { RadioButton } from "./RadioButton";

export const RadioButtonGroup = ({ options, setOptions }: InputGroupProps) => {
  const handleRadioChange = useCallback(
    (value: string) => {
      const opts = options.map((option) => ({
        ...option,
        isChecked: value === option.value,
      }));
      setOptions(opts);
    },
    [options, setOptions],
  );

  if (!options) {
    return null;
  }

  return (
    <InputsListStyled>
      {options.map((option) => (
        <InputItemStyled key={option.id}>
          <RadioButton
            label={option.label}
            value={option.value}
            isChecked={option.isChecked}
            onChange={handleRadioChange}
          />
        </InputItemStyled>
      ))}
    </InputsListStyled>
  );
};
