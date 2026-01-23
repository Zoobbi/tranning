import type { Video } from "@shared/lib/programs";

export interface ProgramVideoProps {
  video: Video;
  isActive?: boolean;
  isCloseFullScreen?: boolean;
  onPlayRequested?: () => void;
}
