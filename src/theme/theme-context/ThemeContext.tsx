import type { ReactElement } from "react";
import React, { createContext, useState, useEffect } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { darkTheme } from "../dark";
import { lightTheme } from "../light";

import { DARK_THEME_NAME, LIGHT_THEME_NAME } from "./constants";

type ThemeName = typeof LIGHT_THEME_NAME | typeof DARK_THEME_NAME;

type ThemeContextType = {
  theme: typeof lightTheme | typeof darkTheme;
  themeName: ThemeName;
  toggleTheme: () => void;
};

// Создаем контекст без значения по умолчанию
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactElement;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const getInitialTheme = (): ThemeName => {
    const saved = localStorage.getItem("theme") as ThemeName | null;
    if (saved && [LIGHT_THEME_NAME, DARK_THEME_NAME].includes(saved)) {
      return saved;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return DARK_THEME_NAME;
    }

    return LIGHT_THEME_NAME;
  };

  const [themeName, setThemeName] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setThemeName(mediaQuery.matches ? DARK_THEME_NAME : LIGHT_THEME_NAME);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
    document.body.className = themeName;
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) =>
      prev === LIGHT_THEME_NAME ? DARK_THEME_NAME : LIGHT_THEME_NAME,
    );
  };

  const theme = themeName === LIGHT_THEME_NAME ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          themeName,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
