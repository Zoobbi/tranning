import React from "react";

import { InputItemStyled, InputsListStyled } from "../styled";
import type { InputGroupProps } from "../types";

import { Checkbox } from "./Checkbox";

export const CheckboxGroup = ({ options, setOptions }: InputGroupProps) => {
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? {
              ...option,
              isChecked,
            }
          : option,
      ),
    );
  };

  return (
    <InputsListStyled>
      {options.map((option) => (
        <InputItemStyled key={option.id}>
          <Checkbox
            label={option.label}
            isChecked={option.isChecked}
            onChange={(isChecked: boolean) =>
              handleCheckboxChange(option.id, isChecked)
            }
          />
        </InputItemStyled>
      ))}
    </InputsListStyled>
  );
};
