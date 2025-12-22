import {
  BadgeWrapperBronze,
  BadgeWrapperGold,
  BadgeWrapperHOF,
  BadgeWrapperLegendary,
  BadgeWrapperSilver,
} from "@shared/assets/icons";
import { BADGE_NAMES } from "@shared/lib/badges";
import { useTheme } from "@theme/";

export const useBadge = () => {
  const { theme } = useTheme();
  const bronzeColor = theme.colors.badgeBronze;
  const silverColor = theme.colors.badgeSilver;
  const goldColor = theme.colors.badgeGold;
  const hofColor = theme.colors.badgeHOF;
  const legendaryColor = theme.colors.badgeLegend;

  const { bronze, silver, gold, hof, legendary } = BADGE_NAMES;

  return {
    [bronze]: {
      icon: BadgeWrapperBronze,
      color: bronzeColor,
    },
    [silver]: {
      icon: BadgeWrapperSilver,
      color: silverColor,
    },
    [gold]: {
      icon: BadgeWrapperGold,
      color: goldColor,
    },
    [hof]: {
      icon: BadgeWrapperHOF,
      color: hofColor,
    },
    [legendary]: {
      icon: BadgeWrapperLegendary,
      color: legendaryColor,
    },
  };
};
