export interface RuPlayerProps {
  playerId: string;
  videoId: string;
  accessKey: string;
  quality?: string;
  width?: number | string;
  minHeight?: number | string;
  muted?: boolean;
  autoplay?: boolean;
  hideControls?: boolean;
  noPause?: boolean;
  blockAllClick?: boolean;
  isStopVideo?: boolean;
  overlayText?: string;
  overlayIcon?: string;
  aspectRatio?: string;
  isPreview?: boolean;
  isPreload?: boolean;
  isCloseFullScreen?: boolean;
  isStartingOnFullScreen?: boolean;
  isFullscreenPlayOnly?: boolean;
  onPlayRequested?: () => void;
  onCloseFullscreen?: () => void;
  onPlayComplete?: () => void;
  onReady?: () => void;
}

export interface RuPlayerWrapperProps {
  $width: string | number;
  $aspectRatio: string;
  $minHeight: string | number;
}

export interface OverlayContainerProps {
  $isFullscreen: boolean;
}

export interface ClickBlockerProps {
  $isFullscreen: boolean;
  $blockAllClick: boolean;
}

export interface OverlayItemProps {
  $top?: string;
  $left?: string;
  $size?: string;
}

export interface RuPlayerSrcProps {
  videoId: string;
  accessKey: string;
  muted?: boolean;
  quality: string;
}
