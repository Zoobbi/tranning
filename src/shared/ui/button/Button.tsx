import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { useTheme } from "@theme/";

import {
  IconOnlyButtonStyled,
  LabelWrapperStyled,
  StyledButton,
} from "./styled";
import type { ButtonProps } from "./types";


export const BUTTON_VARIANTS = {
  primary: "primary",
  action: "action",
  cancel: "cancel",
  shadow: "shadow",
  icon: "icon",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = BUTTON_VARIANTS.primary,
  iconForText,
  iconButtonImage,
}) => {
  const { theme } = useTheme();
  const iconColor = theme.colors.text;

  if (iconButtonImage) {
    return (
      <IconOnlyButtonStyled onClick={onClick} disabled={disabled}>
        {iconButtonImage}
      </IconOnlyButtonStyled>
    );
  }

  if (iconForText) {
    return (
      <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
        <LabelWrapperStyled>
          <SVGIcon
            size={ICON_SIZE.size20}
            type={iconForText}
            pathFill={iconColor}
            rectFill={iconColor}
            fill={iconColor}
          />
          {children}
        </LabelWrapperStyled>
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
};
