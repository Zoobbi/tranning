import { useCallback, useState } from "react";

import { useSelector } from "react-redux";

import { selectVideoQuality } from "@redux/selectors";
import { PlayVideo } from "@shared/assets/icons";
import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { HeadingLevel4 } from "@shared/ui/typography";
import { HiddenRuPlayerWrapper, RuPlayer } from "@shared/ui/video";
import { useTheme } from "@theme/";

import {
  CardVideoWrapperStyled,
  CustomPlayButtonStyled,
  ProgramVideoWrapperStyled,
} from "./styled";
import type { ProgramVideoProps } from "./types";

export const ProgramVideo = ({
  isActive,
  isCloseFullScreen,
  onPlayRequested,
  video,
}: ProgramVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { theme } = useTheme();
  const videoQuality = useSelector(selectVideoQuality);
  const iconColor = theme.colors.text;

  const { name, ru } = video;

  const playerOnClickHandler = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onCloseFullscreenHandler = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <ProgramVideoWrapperStyled
      pd="12px"
      flexDirection="column"
      mb="24px"
      gap="16px"
      key={name.eng}
    >
      <CardVideoWrapperStyled alignItems="center" justifyContent="center">
        <CustomPlayButtonStyled
          onClick={playerOnClickHandler}
          iconButtonImage={
            <SVGIcon
              size={ICON_SIZE.size32}
              type={PlayVideo}
              pathFill={iconColor}
              rectFill={iconColor}
              fill={iconColor}
            />
          }
        />
      </CardVideoWrapperStyled>
      {isPlaying && (
        <HiddenRuPlayerWrapper>
          <RuPlayer
            playerId={name.eng}
            videoId={ru.id}
            accessKey={ru.p}
            quality={videoQuality}
            autoplay
            hideControls
            blockAllClick
            muted
            isCloseFullScreen={isCloseFullScreen}
            isStopVideo={isCloseFullScreen}
            isStartingOnFullScreen
            isFullscreenPlayOnly
            onPlayRequested={onPlayRequested}
            isPreview
            noPause={isActive}
            onCloseFullscreen={onCloseFullscreenHandler}
          />
        </HiddenRuPlayerWrapper>
      )}

      <HeadingLevel4>{video.name.ru}</HeadingLevel4>
    </ProgramVideoWrapperStyled>
  );
};
