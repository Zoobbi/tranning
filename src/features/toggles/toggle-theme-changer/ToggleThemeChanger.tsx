import { TEXTS } from "@shared/lib/texts";
import { TextWithToggle } from "@shared/ui";
import { DARK_THEME_NAME, useTheme } from "@theme/";

export const ToggleThemeChanger = () => {
  const { themeName, toggleTheme } = useTheme();
  const isDarkTheme = themeName === DARK_THEME_NAME;

  return (
    <TextWithToggle
      value={isDarkTheme}
      onChange={toggleTheme}
      label={
        isDarkTheme
          ? TEXTS.settings.darkThemeSwitchOff
          : TEXTS.settings.darkThemeSwitchOn
      }
    />
  );
};
