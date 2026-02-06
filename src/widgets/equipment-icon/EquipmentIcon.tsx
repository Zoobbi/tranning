import { SVGIcon } from "@shared/ui";
import { useTheme } from "@theme/";

import type { EquipmentIconProps } from "./types";

export const EquipmentIcon = ({ icon, title }: EquipmentIconProps) => {
  const { theme } = useTheme();
  const iconColor = theme.colors.text;

  return (
    <SVGIcon
      type={icon}
      title={title}
      pathFill={iconColor}
      rectFill={iconColor}
      fill={iconColor}
    />
  );
};
