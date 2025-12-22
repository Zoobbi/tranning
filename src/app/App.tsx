import { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  ProfilePage,
  SettingsPage,
  TrainingPage,
  AchievementsPage,
} from "@pages/index";
import { MAIN_NAVIGATION } from "@shared/lib/navigation";
import { navigationStack } from "@shared/lib/router";
import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { GlobalStyles, ThemeProvider } from "@theme/";
import { NavigationMenu } from "@widgets/navigation-menu";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    navigationStack.push(location.pathname);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <>
        <GlobalStyles />
        <div className="App">
          <NavigationMenu menuList={MAIN_NAVIGATION} />
          <Routes>
            <Route path={ROUTES_PATHS.home} element={<HomePage />} />
            <Route path={ROUTES_PATHS.training} element={<TrainingPage />} />
            <Route path={ROUTES_PATHS.profile} element={<ProfilePage />} />
            <Route path={ROUTES_PATHS.settings} element={<SettingsPage />} />
            <Route path={ROUTES_PATHS.login} element={<LoginPage />} />
            <Route
              path={ROUTES_PATHS.achievements}
              element={<AchievementsPage />}
            />
            <Route path="*" element={<div>Страница не найдена</div>} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}
