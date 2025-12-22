import { useCallback, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { BackButton } from "@shared/assets/icons";
import { navigationStack } from "@shared/lib/router";
import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { Button, SVGIcon } from "@shared/ui";
import { useTheme } from "@theme/";

export const BackHistoryButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const iconColor = theme.colors.text;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (navigationStack.getStack().length > 1) {
      setIsShown(true);
    }
  }, [navigate]);

  const goBack = useCallback(() => {
    const previousPage = navigationStack.pop();

    if (previousPage) {
      navigate(previousPage, {
        replace: false,
      });

      return;
    }

    if (
      location.pathname === ROUTES_PATHS.home &&
      navigationStack.getStack().length < 2
    ) {
      setIsShown(false);

      return;
    }

    navigate(ROUTES_PATHS.home, {
      replace: true,
    });
  }, [location.pathname, navigate]);

  const icon = (
    <SVGIcon
      type={BackButton}
      pathFill={iconColor}
      rectFill={iconColor}
      fill={iconColor}
    />
  );

  if (!isShown) {
    return null;
  }

  return <Button onClick={goBack} iconButtonImage={icon} />;
};
