import type { State } from "@redux/types";

const selectVideoPlayer = (state: State) => state.videoPlayer;

export const selectCurrentVideoIndex = (state: State): number | null =>
  selectVideoPlayer(state).currentVideoIndex;

export const selectActivePlayerVideoId = (state: State): string | null =>
  selectVideoPlayer(state).activePlayerId;

export const selectVideoQuality = (state: State): string =>
  selectVideoPlayer(state).quality;
