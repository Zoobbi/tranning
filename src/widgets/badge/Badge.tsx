import type { ReactNode } from "react";
import { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updateProgress } from "@redux/badge-slice";
import { selectBadgeInfo } from "@redux/selectors";
import { BadgeWrapperDisabled } from "@shared/assets/icons";
import { Lock } from "@shared/assets/icons/badges";
import type { BadgeId } from "@shared/lib/badges/types";
import { TEXTS } from "@shared/lib/texts";
import { FlexWrapper, ProgressBar, SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { RegularTextLevel3 } from "@shared/ui/typography";
import { useTheme } from "@theme/";

import { BadgeModal } from "./BadgeModal";
import {
  BadgeShieldImageStyled,
  BadgeImageStyled,
  BadgeWrapperStyled,
} from "./styled";
import { useBadge } from "./useBadge";

export const Badge = ({ badgeId }: { badgeId: BadgeId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const badgeConfig = useBadge();
  const { theme } = useTheme();

  const getBadgeInfo = useSelector(selectBadgeInfo);
  const badgeInfo = getBadgeInfo(badgeId);

  // --- Данные из селектора ---
  const {
    title,
    icon: BadgeIcon,
    currentLevel, // ← не progress.level!
    progressPercent, // ← честный прогресс (0–100)
  } = badgeInfo;

  // --- UI-зависимости ---
  const badgeWrapper = badgeConfig[currentLevel]?.icon || BadgeWrapperDisabled;
  const progressBarColor =
    badgeConfig[currentLevel]?.color || theme.colors.badgeBronze;

  const isDisabled = currentLevel === "disabled";
  const badgeBodyColor = theme.colors.whiteIcon;

  const BadgeImage = (
    <FlexWrapper position="relative">
      <BadgeShieldImageStyled
        width="100px"
        src={badgeWrapper}
        alt={
          isDisabled
            ? TEXTS.achievements.disabledBadgeAlt
            : `${TEXTS.achievements.badgeText} ${title}`
        }
      />
      <BadgeImageStyled>
        {isDisabled ? (
          <SVGIcon
            type={Lock}
            size={ICON_SIZE.size40}
            pathFill={theme.colors.disabledBadge}
            rectFill={theme.colors.disabledBadge}
            fill={theme.colors.disabledBadge}
          />
        ) : (
          <SVGIcon
            type={BadgeIcon as unknown as ReactNode}
            size={ICON_SIZE.size40}
            pathFill={badgeBodyColor}
            rectFill={badgeBodyColor}
            fill={badgeBodyColor}
          />
        )}
      </BadgeImageStyled>
    </FlexWrapper>
  );

  const openBadgeModalHandler = useCallback(() => {
    setIsModalOpen(true);
    dispatch(
      updateProgress({
        badgeId,
        progress: 2,
      }),
    );
  }, [dispatch, badgeId]);

  return (
    <>
      <BadgeWrapperStyled role="button" onClick={openBadgeModalHandler}>
        <FlexWrapper
          width="120px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {BadgeImage}

          {/* ✅ Прогресс-бар по ЧЕСТНОМУ проценту */}
          <FlexWrapper width="60%" mt="2px">
            <ProgressBar
              current={progressPercent} // ← 0–100!
              required={100} // ← всегда 100%, потому что progressPercent уже нормализован
              color={progressBarColor}
            />
          </FlexWrapper>

          <FlexWrapper mt="12px">
            <RegularTextLevel3 textAlign="center">{title}</RegularTextLevel3>
          </FlexWrapper>
        </FlexWrapper>
      </BadgeWrapperStyled>

      <BadgeModal
        badgeImage={BadgeImage}
        badgeInfo={badgeInfo}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};
