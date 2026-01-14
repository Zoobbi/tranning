import { FlexWrapper, SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { RegularTextLevel3 } from "@shared/ui/typography";
import { useTheme } from "@theme/";

import { MiniButtonStyled } from "./styled";
import type { MiniButtonProps } from "./types";

export const MiniButton = ({
  label,
  onClick,
  icon,
  textColor,
  isTextUnderlined = false,
  isIconFirst = false,
}: MiniButtonProps) => {
  const { theme } = useTheme();
  const currentTextColor = textColor ?? theme.colors.text;

  const IconElement = icon ? (
    <SVGIcon
      type={icon}
      size={ICON_SIZE.size16}
      pathFill={currentTextColor}
      rectFill={currentTextColor}
      fill={currentTextColor}
    />
  ) : null;

  const children = isIconFirst
    ? [
        IconElement,
        <RegularTextLevel3 as="span" key="text" color={currentTextColor}>
          {label}
        </RegularTextLevel3>,
      ]
    : [
        <RegularTextLevel3 as="span" key="text" color={currentTextColor}>
          {label}
        </RegularTextLevel3>,
        IconElement,
      ];

  return (
    <MiniButtonStyled isTextUnderlined={isTextUnderlined} onClick={onClick}>
      <FlexWrapper as="span" gap="4px" alignItems="center">
        {children}
      </FlexWrapper>
    </MiniButtonStyled>
  );
};
