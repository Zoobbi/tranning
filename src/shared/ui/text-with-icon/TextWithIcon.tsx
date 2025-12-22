import { ChevronRight } from "@shared/assets/icons";
import { SVGIcon } from "@shared/ui";
import type { TextWithIconProps } from "@shared/ui/text-with-icon/types";
import { RegularTextLevel3 } from "@shared/ui/typography";
import { useTheme } from "@theme/";

import { LinkStyled, TextWithIconStyled } from "./styled";

export const TextWithIcon = ({
  label,
  icon = ChevronRight,
  onClick,
  link,
}: TextWithIconProps): React.ReactElement => {
  const { theme } = useTheme();
  const iconColor = theme.colors.text;

  const TextComponent: React.ReactElement = (
    <TextWithIconStyled onClick={onClick}>
      <RegularTextLevel3>{label}</RegularTextLevel3>
      <SVGIcon
        type={icon}
        pathFill={iconColor}
        rectFill={iconColor}
        fill={iconColor}
      />
    </TextWithIconStyled>
  );

  if (!link) {
    return TextComponent;
  }

  return <LinkStyled to={link}>{TextComponent}</LinkStyled>;
};
