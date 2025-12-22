import type { Dispatch, SetStateAction } from "react";

export type OptionsSetter = Dispatch<
  SetStateAction<
    Array<{
      id: string;
      label: string;
      isChecked: boolean;
      value: string;
    }>
  >
>;

export interface InputGroupProps {
  options: Array<{
    id: string;
    label: string;
    isChecked: boolean;
    value: string;
  }>;
  setOptions: OptionsSetter;
}

export interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export interface RadioButtonProps {
  label: string;
  value: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}
