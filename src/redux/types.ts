import type { VideoPlayerState } from "@redux/video-player-slice";

export interface BadgeProgressState {
  [key: string]: { value: number; level: string }; // badgeId: progress
}

export interface State {
  badgeProgress: BadgeProgressState;
  videoPlayer: VideoPlayerState;
}
