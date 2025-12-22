import { Toggle } from "@shared/ui";
import { RegularTextLevel3 } from "@shared/ui/typography";

import { TextWithToggleStyled } from "./styled";
import type { ToggleWithTextProps } from "./types";

export const TextWithToggle = ({
  label,
  value,
  onChange,
  disabled,
}: ToggleWithTextProps) => {
  return (
    <TextWithToggleStyled>
      <RegularTextLevel3>{label}</RegularTextLevel3>
      <Toggle on={value} onToggle={onChange} disabled={disabled} />
    </TextWithToggleStyled>
  );
};
