// ProgramFullTraining.tsx
import { useCallback, useState } from "react";

import { useSelector } from "react-redux";

import { selectVideoQuality } from "@redux/selectors";
import { Button, FlexWrapper } from "@shared/ui";
import { HiddenRuPlayerWrapper, RuPlayer } from "@shared/ui/video";

import type { ProgramFullTrainingProps } from "./types";

export const ProgramFullTraining = ({
  fullTrainingVideo,
}: ProgramFullTrainingProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoQuality = useSelector(selectVideoQuality);

  const openTrainingHandle = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const closeTrainingHandle = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <>
      <FlexWrapper justifyContent="center" mb="32px" mt="32px">
        <Button onClick={openTrainingHandle}>Начать тренировку</Button>
      </FlexWrapper>

      {isPlaying && (
        <HiddenRuPlayerWrapper>
          <RuPlayer
            playerId={fullTrainingVideo.name.eng}
            videoId={fullTrainingVideo.ru.id}
            accessKey={fullTrainingVideo.ru.p}
            quality={videoQuality}
            autoplay
            hideControls
            blockAllClick
            muted
            isStartingOnFullScreen
            onCloseFullscreen={closeTrainingHandle}
            onPlayComplete={closeTrainingHandle}
          />
        </HiddenRuPlayerWrapper>
      )}
    </>
  );
};
