import { TextWithIcon } from "@shared/ui/text-with-icon";

import type { VideoPlayerChangeQSettingProps } from "./types";

export const VideoPlayerChangeQSetting = ({
  label,
  onClick,
}: VideoPlayerChangeQSettingProps) => {
  return <TextWithIcon onClick={onClick} label={label} />;
};
