// src/widgets/program-video-grid/ProgramVideoGrid.tsx
import { Col } from "@shared/ui";
import { ProgramVideo } from "@widgets/program-video";

import type { ProgramVideoGridProps } from "./types";

export const ProgramVideoGrid = ({ videoData }: ProgramVideoGridProps) => {
  const VideoGrid = videoData.map((video) => (
    <Col key={video.name.eng}>
      <ProgramVideo video={video} />
    </Col>
  ));

  return VideoGrid;
};
