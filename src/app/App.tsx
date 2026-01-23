import { useEffect } from "react";

import { useLocation, Outlet } from "react-router-dom";

import { MAIN_NAVIGATION } from "@shared/lib/navigation";
import { navigationStack } from "@shared/lib/router";
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
          <Outlet />
        </div>
      </>
    </ThemeProvider>
  );
}
