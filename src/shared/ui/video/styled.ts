import styled from "styled-components";

import { Button, FlexWrapper } from "@shared/ui";

import type {
  RuPlayerWrapperProps,
  OverlayContainerProps,
  ClickBlockerProps,
  OverlayItemProps,
} from "./types";

export const RuPlayerWrapperStyled = styled.div<RuPlayerWrapperProps>`
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  min-height: ${({ $minHeight }) =>
    typeof $minHeight === "number" ? `${$minHeight}px` : $minHeight};
  background: #000;
  position: relative;
  overflow: hidden;
`;

export const IFrameStyled = styled.iframe`
  width: 100%;
  height: 100%;
  display: block;
`;

export const BackgroundOverlayContainer = styled.div<OverlayContainerProps>`
  position: ${({ $isFullscreen }) => ($isFullscreen ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: ${({ $isFullscreen }) => ($isFullscreen ? "100vw" : "100%")};
  height: ${({ $isFullscreen }) => ($isFullscreen ? "100vh" : "100%")};
  pointer-events: none;
  z-index: 1005;
`;

export const ClickBlocker = styled.div<ClickBlockerProps>`
  position: ${({ $isFullscreen }) => ($isFullscreen ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: ${({ $isFullscreen }) => ($isFullscreen ? "100vw" : "100%")};
  height: ${({ $isFullscreen }) => ($isFullscreen ? "100vh" : "100%")};
  z-index: 1004;
  cursor: default;
  pointer-events: ${({ $blockAllClick }) => ($blockAllClick ? "auto" : "none")};
  background-color: transparent;
`;

export const OverlayItem = styled.div<OverlayItemProps>`
  position: absolute;
  width: ${({ $size }) => $size || "40px"};
  height: ${({ $size }) => $size || "40px"};
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  border-radius: 4px;
  z-index: 10;
  pointer-events: none;
`;

export const NotificationBox = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 222px;
  padding: 8px 12px;
  background: #333;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10;
  pointer-events: none;
`;

export const FullscreenBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 1000;
`;

export const ControlButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 6px;
  cursor: pointer;
  z-index: 1101;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled(ControlButton)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  position: fixed;
  z-index: 1200;
`;

export const FullscreenIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: white;
`;

export const MainOverlayStyled = styled(FlexWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  // z-index: 1100; /* ниже iframe (1005), но выше всего остального */
`;

export const CustomPlayButton = styled(Button)`
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HiddenRuPlayerWrapper = styled.div`
  position: absolute;
  width: 0;
  height: 0;
`;
