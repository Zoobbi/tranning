import { createBrowserRouter } from "react-router-dom";

import {
  AchievementsPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SettingsPage,
  TrainingPage,
} from "@pages/index";
import { ROUTES_PATHS } from "@shared/lib/routesPaths";

import App from "@app/App";

export const router = createBrowserRouter([
  // Страницы, которые НЕ используют App (например, логин без навигации)
  {
    path: ROUTES_PATHS.login,
    element: <LoginPage />,
  },

  // Все остальные страницы — внутри App (с навигацией и темой)
  {
    element: <App />, // ← общий layout
    children: [
      {
        path: ROUTES_PATHS.home,
        element: <HomePage />,
      },
      {
        path: ROUTES_PATHS.training,
        element: <TrainingPage />,
      },
      {
        path: ROUTES_PATHS.programId,
        element: <TrainingPage />,
      },
      {
        path: ROUTES_PATHS.profile,
        element: <ProfilePage />,
      },
      {
        path: ROUTES_PATHS.settings,
        element: <SettingsPage />,
      },
      {
        path: ROUTES_PATHS.achievements,
        element: <AchievementsPage />,
      },
      {
        path: "/programs",
        element: <div />,
      },
      {
        path: "/programs/:programId",
        element: <div />,
      },
      {
        path: "*",
        element: <div>Страница не найдена</div>,
      },
    ],
  },
]);
