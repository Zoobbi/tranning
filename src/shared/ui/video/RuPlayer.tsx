import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { PlayVideo } from "@shared/assets/icons";
import { useDeviceOrientation } from "@shared/hooks";
import { AspectRatioParams } from "@shared/lib/aspectRatioParams";
import { RU_REGION_PLAYER_DOMAIN } from "@shared/lib/video";
import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import { useTheme } from "@theme/";

import {
  RU_PLAYER_EVENT_NAMES,
  RU_PLAYER_STATUS_NAMES,
  RU_PLAYER_TITLE,
} from "./constants";
import { getRuPlayerSrc } from "./helpers";
import {
  IFrameStyled,
  BackgroundOverlayContainer,
  ClickBlocker,
  OverlayItem,
  NotificationBox,
  FullscreenBackdrop,
  ControlButton,
  CloseButton,
  FullscreenIcon,
  RuPlayerWrapperStyled,
  MainOverlayStyled,
  CustomPlayButton,
} from "./styled";
import type { RuPlayerProps } from "./types";

export const RuPlayer = ({
  playerId,
  videoId,
  accessKey,
  width = "100%",
  minHeight = "auto",
  muted = true,
  hideControls = false,
  noPause = false,
  overlayText,
  overlayIcon,
  blockAllClick = false,
  isStartingOnFullScreen = false,
  isCloseFullScreen = false,
  autoplay = false,
  isStopVideo = false,
  isFullscreenPlayOnly = false,
  onPlayComplete,
  onPlayRequested,
  onReady,
  onCloseFullscreen,
  isPreview,
  aspectRatio = AspectRatioParams.RectangleLevel3,
}: RuPlayerProps) => {
  const [isShowNotifyMessage, setIsShowNotifyMessage] = useState(false);
  const [isFirstPlayingFinished, setIsFirstPlayingFinished] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIframeMounted, setIsIframeMounted] = useState(false);

  const { isPortrait } = useDeviceOrientation();
  const { theme } = useTheme();
  const iconColor = theme.colors.text;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isReadyRef = useRef(false);
  const hasStartedPlayingRef = useRef(false);

  useEffect(() => {
    if (!iframeRef.current) {
      return;
    }

    const iframe = iframeRef.current;

    if (isFullscreen) {
      // Сохраняем исходные стили перед изменением
      const originalStyles = {
        position: iframe.style.position,
        top: iframe.style.top,
        left: iframe.style.left,
        width: iframe.style.width,
        height: iframe.style.height,
        zIndex: iframe.style.zIndex,
        transform: iframe.style.transform,
        transformOrigin: iframe.style.transformOrigin,
      };

      // Сохраняем в dataset или ref для восстановления
      (iframe as any).originalStyles = originalStyles;

      const updateSize = () => {
        const safeAreaInsetTop =
          getComputedStyle(document.documentElement).getPropertyValue(
            "--tg-safe-area-inset-top",
          ) || "0px";
        const safeAreaInsetBottom =
          getComputedStyle(document.documentElement).getPropertyValue(
            "--tg-safe-area-inset-bottom",
          ) || "0px";

        iframe.style.top = safeAreaInsetTop;
        iframe.style.bottom = safeAreaInsetBottom;

        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        iframe.style.position = "fixed";
        iframe.style.top = "50%";
        iframe.style.left = "50%";
        iframe.style.zIndex = "1005";
        iframe.style.background = "black";

        if (isPortrait) {
          iframe.style.width = `${containerHeight}px`;
          iframe.style.height = `${containerWidth}px`;
          iframe.style.transform = "translate(-50%, -50%) rotate(90deg)";
          iframe.style.transformOrigin = "center center";
        } else {
          iframe.style.width = `${containerWidth}px`;
          iframe.style.height = `${containerHeight}px`;
          iframe.style.transform = "translate(-50%, -50%)";
          iframe.style.transformOrigin = "center center";
        }
      };

      updateSize();

      const handleResize = () => updateSize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      iframe.style.cssText = "";
    }
  }, [isFullscreen, isPortrait, playerId]);

  // Блокировка прокрутки
  useEffect(() => {
    const body = document.body;
    if (isFullscreen) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = "";
      body.style.touchAction = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [isFullscreen]);

  const postCommand = useCallback((cmd: { type: string; data?: any }) => {
    if (!iframeRef.current?.contentWindow) return;

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify(cmd),
      RU_REGION_PLAYER_DOMAIN,
    );
  }, []);

  useEffect(() => {
    if (isShowNotifyMessage && isReadyRef.current) {
      const timer = setTimeout(() => setIsShowNotifyMessage(false), 4000);

      return () => clearTimeout(timer);
    }
  }, [isShowNotifyMessage]);

  useEffect(() => {
    hasStartedPlayingRef.current = false;
  }, [videoId]);

  useEffect(() => {
    if (isCloseFullScreen) {
      setIsFullscreen(false);

      onCloseFullscreen?.();
    }
  }, [isCloseFullScreen, onCloseFullscreen]);

  useEffect(() => {
    if (isStopVideo) {
      setIsPlaying(false);
    }
  }, [isStopVideo]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== RU_REGION_PLAYER_DOMAIN) {
        return;
      }

      let msg;
      try {
        msg = JSON.parse(event.data);
      } catch {
        return;
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.ready && !isReadyRef.current) {
        isReadyRef.current = true;

        if (!isIframeMounted) {
          setIsIframeMounted(true);
        }

        if (autoplay) {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.play,
          });

          if (isStartingOnFullScreen) {
            setIsFullscreen(true);
          }
        }

        if (hideControls)
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.hideControls,
            data: {
              playerId,
            },
          });

        if (muted)
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.mute,
            data: {
              playerId,
            },
          });

        if (overlayText) {
          setIsShowNotifyMessage(true);
        }
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.changeState) {
        const { state } = msg.data;

        if (state === "completed") {
          setIsPlaying(false);
        }

        if (state === "pause") {
          setIsPlaying(false);
        }

        if (state === "playing") {
          if (!hasStartedPlayingRef.current) {
            onReady?.();
          }

          setIsPlaying(true);
        }

        if (state === RU_PLAYER_STATUS_NAMES.paused && noPause) {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.play,
            data: {
              playerId,
            },
          });
        }
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.playComplete) {
        if (!isFirstPlayingFinished) {
          setIsFirstPlayingFinished(true);
        }

        onPlayComplete?.();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [
    autoplay,
    hideControls,
    isFirstPlayingFinished,
    isIframeMounted,
    isPreview,
    isStartingOnFullScreen,
    muted,
    noPause,
    onPlayComplete,
    onReady,
    overlayText,
    playerId,
    postCommand,
  ]);

  const playButtonHandler = useCallback(() => {
    if (isStartingOnFullScreen) {
      setIsFullscreen(true);
    }

    postCommand({
      type: RU_PLAYER_EVENT_NAMES.play,
    });

    onPlayRequested?.();
  }, [isStartingOnFullScreen, onPlayRequested, postCommand]);

  const src = useMemo(() => {
    return getRuPlayerSrc({
      videoId,
      accessKey,
      muted,
    });
  }, [videoId, accessKey, muted]);

  const openFullScreen = useCallback(() => {
    setIsFullscreen(true);
  }, [setIsFullscreen]);

  const closeFullScreen = useCallback(() => {
    if (isFullscreenPlayOnly) {
      setIsIframeMounted(false);

      postCommand({
        type: RU_PLAYER_EVENT_NAMES.hideControls,
        data: {
          playerId,
        },
      });

      postCommand({
        type: RU_PLAYER_EVENT_NAMES.pause,
      });
    }

    setIsFullscreen(false);
    onCloseFullscreen?.();
  }, [isFullscreenPlayOnly, onCloseFullscreen, playerId, postCommand]);

  const handleBlockClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (blockAllClick) {
        e.preventDefault();
        e.stopPropagation();

        if (isPlaying) {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.pause,
          });

          postCommand({
            type: RU_PLAYER_EVENT_NAMES.hideControls,
            data: {
              playerId,
            },
          });
        } else {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.play,
          });
        }
      }
    },
    [blockAllClick, isPlaying, playerId, postCommand],
  );

  return (
    <RuPlayerWrapperStyled
      $width={width}
      $aspectRatio={aspectRatio}
      $minHeight={minHeight}
    >
      {/* UI только для основного режима (не прелоад) */}
      <>
        {!isIframeMounted || !isPlaying ? (
          <MainOverlayStyled justifyContent="center" alignItems="center">
            <CustomPlayButton
              onClick={playButtonHandler}
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
          </MainOverlayStyled>
        ) : (
          <>
            <BackgroundOverlayContainer $isFullscreen={isFullscreen}>
              <ClickBlocker
                $isFullscreen={isFullscreen}
                $blockAllClick={blockAllClick}
                onClick={handleBlockClick}
              />

              {overlayIcon && !isFirstPlayingFinished && (
                <OverlayItem $top="16px" $left="20px" $size="40px">
                  <SVGIcon type={overlayIcon} size={ICON_SIZE.size32} />
                </OverlayItem>
              )}

              {overlayText && isShowNotifyMessage && (
                <NotificationBox>{overlayText}</NotificationBox>
              )}
            </BackgroundOverlayContainer>
            {isFullscreen && <FullscreenBackdrop onClick={closeFullScreen} />}
            {!isFullscreen && (
              <ControlButton onClick={openFullScreen}>
                <FullscreenIcon viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </FullscreenIcon>
              </ControlButton>
            )}
            {isFullscreen && (
              <CloseButton onClick={closeFullScreen}>✕</CloseButton>
            )}
          </>
        )}

        {/* Общий iframe для прелоада и основного */}
        <IFrameStyled
          id={playerId}
          ref={iframeRef}
          src={src}
          frameBorder="0"
          allow="autoplay; clipboard-write"
          title={RU_PLAYER_TITLE}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </>
    </RuPlayerWrapperStyled>
  );
};
