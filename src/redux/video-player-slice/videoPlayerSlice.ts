import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface VideoPlayerState {
  activePlayerId: string | null;
  currentVideoIndex: number | null;
}

const initialState: VideoPlayerState = {
  activePlayerId: null,
  currentVideoIndex: null,
};

export const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    setActiveVideoPlayer: (state, action: PayloadAction<string | null>) => {
      state.activePlayerId = action.payload;
    },
    setCurrentVideoIndex: (state, action: PayloadAction<number | null>) => {
      state.currentVideoIndex = action.payload;
    },
    clearActiveVideoPlayer: (state) => {
      state.activePlayerId = null;
    },
  },
});

export const {
  setActiveVideoPlayer,
  setCurrentVideoIndex,
  clearActiveVideoPlayer,
} = videoPlayerSlice.actions;
export const videoPlayerReducer = videoPlayerSlice.reducer;
