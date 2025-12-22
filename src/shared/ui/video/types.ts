export interface RuPlayerProps {
  videoId: string;
  accessKey: string;
  width?: number | string;
  minHeight?: number | string;
  muted?: boolean;
  hideControls?: boolean;
  noPause?: boolean;
  blockAllClick?: boolean;
  overlayText?: string;
  overlayIcon?: string;
  aspectRatio?: string;
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
}
