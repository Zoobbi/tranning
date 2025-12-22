import { useId } from "react";

import { useLocation } from "react-router-dom";

import { buildUniqueKey } from "@shared/lib/common";
import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { RegularTextLevel3 } from "@shared/ui/typography";
import { useTheme } from "@theme/";

import { MenuItem } from "./styled";
import type { NavigationItem } from "./types";

export const NavigationMenuList = ({
  menuList,
}: {
  menuList: Array<NavigationItem>;
}) => {
  const idPrefix = useId();
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      {menuList.map((item, index) => {
        const iconColor =
          location.pathname === item.path
            ? theme.colors.primary
            : theme.colors.iconInactive;

        return (
          <MenuItem key={buildUniqueKey(idPrefix, index)} to={item.path}>
            <SVGIcon
              size={ICON_SIZE.size16}
              type={item.icon}
              pathFill={iconColor}
              rectFill={iconColor}
              fill={iconColor}
            />
            <RegularTextLevel3>{item.text}</RegularTextLevel3>
          </MenuItem>
        );
      })}
    </>
  );
};
