import type { BUTTON_VARIANTS } from "./Button";

export interface ButtonProps {
  children?: React.ReactNode; // Text or content inside the button
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disable the button
  iconButtonImage?: React.ReactNode;
  iconForText?: React.ReactNode;
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS]; // Button style variants
}
