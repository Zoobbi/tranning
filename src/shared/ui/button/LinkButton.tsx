import React from "react";

import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { useTheme } from "@theme/";

import { BUTTON_VARIANTS } from "./Button";
import {
  StyledButton,
  IconOnlyButtonStyled,
  LabelWrapperStyled,
} from "./styled";
import type { ButtonProps } from "./types";

// Расширяем LinkProps нашими пропсами
export interface LinkButtonProps
  extends Omit<ButtonProps, "onClick">,
    Omit<LinkProps, "children" | "to"> {
  to: LinkProps["to"];
  children: React.ReactNode;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      to,
      disabled = false,
      variant = BUTTON_VARIANTS.primary,
      iconForText,
      iconButtonImage,
      replace,
      state,
      ...rest
    },
    ref,
  ) => {
    const { theme } = useTheme();
    const iconColor = theme.colors.text;

    // Если disabled — рендерим как button[disabled], без навигации
    if (disabled) {
      return (
        <StyledButton
          as="span"
          disabled
          variant={variant}
          style={{
            pointerEvents: "none",
          }}
        >
          {iconForText ? (
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
          ) : iconButtonImage ? (
            iconButtonImage
          ) : (
            children
          )}
        </StyledButton>
      );
    }

    if (iconButtonImage) {
      return (
        <IconOnlyButtonStyled
          as={Link}
          to={to}
          ref={ref}
          replace={replace}
          state={state}
          {...rest}
        >
          {iconButtonImage}
        </IconOnlyButtonStyled>
      );
    }

    if (iconForText) {
      return (
        <StyledButton
          as={Link}
          to={to}
          variant={variant}
          ref={ref}
          replace={replace}
          state={state}
          {...rest}
        >
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
      <StyledButton
        as={Link}
        to={to}
        variant={variant}
        ref={ref}
        replace={replace}
        state={state}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  },
);

LinkButton.displayName = "LinkButton";
