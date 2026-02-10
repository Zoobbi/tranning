import { RU_REGION_PLAYER_DOMAIN } from "@shared/lib/video";

import type { RuPlayerSrcProps } from "./types";

export const getRuPlayerSrc = ({
  videoId,
  accessKey,
  muted,
  quality,
}: RuPlayerSrcProps) => {
  return `${RU_REGION_PLAYER_DOMAIN}/play/embed/${videoId}/?p=${encodeURIComponent(accessKey)}&q=${quality}&muted=${muted ? 1 : 0}`;
};
