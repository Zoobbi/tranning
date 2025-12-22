import type { ReactNode } from "react";

export interface MiniButtonProps {
  label: string;
  onClick: () => void;
  textColor?: string;
  icon?: ReactNode;
  isIconFirst?: boolean;
  isTextUnderlined?: boolean;
}
