import { useLocation } from "react-router-dom";

import { NavigationMenuList } from "./NavigationMenuList";
import { MenuWrapper } from "./styled";
import type { NavigationItem } from "./types";

export const NavigationMenu = ({
  menuList,
}: {
  menuList: Array<NavigationItem>;
}) => {
  const location = useLocation();
  const shouldShowMenu = !location.pathname.startsWith("/login");

  if (!shouldShowMenu) {
    return null;
  }

  return (
    <MenuWrapper role="navigation" aria-label="Нижнее меню">
      <NavigationMenuList menuList={menuList} />
    </MenuWrapper>
  );
};
