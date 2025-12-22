import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export type Theme = typeof darkTheme;

export { lightTheme, darkTheme };

export {
  DARK_THEME_NAME,
  LIGHT_THEME_NAME,
  useTheme,
  ThemeProvider,
} from "./theme-context";

export { GlobalStyles } from "./GlobalStyles";
export { FONTS } from "./fonts";
