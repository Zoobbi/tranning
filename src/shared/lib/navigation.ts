import { Ball, Home, Profile } from "@shared/assets/icons";
import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { TEXTS } from "@shared/lib/texts";

interface NavigationItem {
  icon: string;
  text: string;
  id?: string;
  path: string;
}

export const MAIN_NAVIGATION: Array<NavigationItem> = [
  {
    icon: Home,
    text: TEXTS.navigation.home,
    path: ROUTES_PATHS.home,
  },
  {
    icon: Ball,
    text: TEXTS.navigation.training,
    path: ROUTES_PATHS.training,
  },
  {
    icon: Profile,
    text: TEXTS.navigation.profile,
    path: ROUTES_PATHS.profile,
  },
];
