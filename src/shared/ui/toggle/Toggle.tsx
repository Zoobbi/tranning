import React, { useCallback } from "react";

import { ThumbStyled, ToggleStyled } from "./styled";

type ToggleProps = {
  on: boolean;
  onToggle: () => void;
  disabled?: boolean;
};

export const Toggle = ({ on, onToggle, disabled = false }: ToggleProps) => {
  const KeyDownHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
    [disabled, onToggle],
  );

  return (
    <ToggleStyled
      $on={on}
      $disabled={disabled}
      role="switch"
      aria-checked={on}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onToggle}
      onKeyDown={KeyDownHandler}
    >
      <ThumbStyled $on={on} />
    </ToggleStyled>
  );
};
