import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface VideoPlayerState {
  activePlayerId: string | null;
  currentVideoIndex: number | null;
  quality: string;
}

const initialState: VideoPlayerState = {
  activePlayerId: null,
  currentVideoIndex: null,
  quality: "auto",
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
    setPlayerQuality: (state, action: PayloadAction<string>) => {
      state.quality = action.payload;
    },
  },
});

export const {
  setActiveVideoPlayer,
  setCurrentVideoIndex,
  clearActiveVideoPlayer,
  setPlayerQuality,
} = videoPlayerSlice.actions;
export const videoPlayerReducer = videoPlayerSlice.reducer;
