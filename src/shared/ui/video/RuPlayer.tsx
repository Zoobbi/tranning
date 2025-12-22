import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { RU_REGION_PLAYER_DOMAIN } from "@shared/lib/router/video";
import { SVGIcon } from "@shared/ui";
import { ICON_SIZE } from "@shared/ui/svg-icon";
import {
  RU_PLAYER_EVENT_NAMES,
  RU_PLAYER_STATUS_NAMES,
} from "@shared/ui/video/constants";
import { getRuPlayerSrc } from "@shared/ui/video/helpers";

import {
  IFrameStyled,
  OverlayContainer,
  ClickBlocker,
  OverlayItem,
  NotificationBox,
  FullscreenBackdrop,
  ControlButton,
  CloseButton,
  FullscreenIcon,
  RuPlayerWrapperStyled,
} from "./styled";
import type { RuPlayerProps } from "./types";

export const RuPlayer = ({
  videoId,
  accessKey,
  width = "100%",
  minHeight = "auto",
  muted = true,
  hideControls = true,
  noPause = false,
  overlayText,
  overlayIcon,
  blockAllClick = false,
  aspectRatio = "16 / 9",
}: RuPlayerProps) => {
  const [isShowNotifyMessage, setIsShowNotifyMessage] = useState(false);
  const [isFirstPlayingFinished, setIsFirstPlayingFinished] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isReadyRef = useRef(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const originalStyle = {
      position: iframe.style.position,
      top: iframe.style.top,
      left: iframe.style.left,
      width: iframe.style.width,
      height: iframe.style.height,
      zIndex: iframe.style.zIndex,
    };

    if (isFullscreen) {
      iframe.style.position = "fixed";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.zIndex = "1005";
      iframe.style.background = "black";
    } else {
      Object.assign(iframe.style, originalStyle);
    }

    return () => {
      Object.assign(iframe.style, originalStyle);
    };
  }, [isFullscreen]);

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

  const postCommand = (cmd: { type: string; data?: any }) => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify(cmd),
      RU_REGION_PLAYER_DOMAIN,
    );
  };

  useEffect(() => {
    if (isShowNotifyMessage && isReadyRef.current) {
      const timer = setTimeout(() => setIsShowNotifyMessage(false), 4000);

      return () => clearTimeout(timer);
    }
  }, [isShowNotifyMessage]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== RU_REGION_PLAYER_DOMAIN) return; // ✅ Без пробелов

      let msg;
      try {
        msg = JSON.parse(event.data);
      } catch {
        return;
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.ready && !isReadyRef.current) {
        isReadyRef.current = true;
        postCommand({
          type: RU_PLAYER_EVENT_NAMES.play,
        });
        if (hideControls)
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.hideControls,
          });
        if (muted)
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.mute,
          });
        if (overlayText) setIsShowNotifyMessage(true);
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.changeState) {
        const { state } = msg.data;
        if (state === RU_PLAYER_STATUS_NAMES.paused && noPause) {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.play,
          });
        } else if (state === RU_PLAYER_STATUS_NAMES.stopped) {
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.setCurrentTime,
            data: {
              time: 0,
            },
          });
          postCommand({
            type: RU_PLAYER_EVENT_NAMES.play,
          });
        }
      }

      if (msg.type === RU_PLAYER_EVENT_NAMES.playComplete) {
        if (!isFirstPlayingFinished) {
          setIsFirstPlayingFinished(true);
        }

        postCommand({
          type: RU_PLAYER_EVENT_NAMES.setCurrentTime,
          data: {
            time: 0,
          },
        });
        postCommand({
          type: RU_PLAYER_EVENT_NAMES.play,
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [hideControls, isFirstPlayingFinished, muted, noPause, overlayText]);

  const src = useMemo(() => {
    return getRuPlayerSrc({
      videoId,
      accessKey,
      muted,
    });
  }, [videoId, accessKey, muted]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, [setIsFullscreen]);

  const handleBlockClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (blockAllClick) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [blockAllClick],
  );

  return (
    <RuPlayerWrapperStyled
      $width={width}
      $aspectRatio={aspectRatio}
      $minHeight={minHeight}
    >
      <IFrameStyled
        ref={iframeRef}
        src={src}
        frameBorder="0"
        allow="autoplay; clipboard-write"
        title="RuTube Player"
      />

      <OverlayContainer $isFullscreen={isFullscreen}>
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
      </OverlayContainer>

      {isFullscreen && <FullscreenBackdrop onClick={toggleFullscreen} />}

      {!isFullscreen && (
        <ControlButton onClick={toggleFullscreen}>
          <FullscreenIcon viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </FullscreenIcon>
        </ControlButton>
      )}

      {isFullscreen && <CloseButton onClick={toggleFullscreen}>✕</CloseButton>}
    </RuPlayerWrapperStyled>
  );
};
