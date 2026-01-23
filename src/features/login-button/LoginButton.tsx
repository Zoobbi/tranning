import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { TEXTS } from "@shared/lib/texts";
import { Button, BUTTON_VARIANTS } from "@shared/ui/button";

export const LoginButton = () => {
  const navigate = useNavigate();

  const loginHandle = useCallback(() => {
    navigate(ROUTES_PATHS.home);
  }, [navigate]);

  return (
    <Button onClick={loginHandle} variant={BUTTON_VARIANTS.primary}>
      {TEXTS.loginPage.loginText}
    </Button>
  );
};
