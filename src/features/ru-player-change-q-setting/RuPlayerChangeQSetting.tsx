import { useCallback, useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";

import { ModalSheet } from "@features/modal-sheet";
import { setPlayerQuality } from "@redux/video-player-slice";
import { TEXTS } from "@shared/lib/texts";
import { VIDEO_QUALITIES_OPTIONS } from "@shared/lib/video";
import { Button, FlexWrapper, RadioButtonGroup } from "@shared/ui";
import { HeadingLevel3 } from "@shared/ui/typography";
import { LineStyled } from "@widgets/filters/styled";
import { VideoPlayerChangeQSetting } from "@widgets/video-player-change-q-setting";

export const RuPlayerChangeQSetting = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [options, setOptions] = useState(VIDEO_QUALITIES_OPTIONS);

  const activeOption = useMemo(
    () =>
      options.find((option) => option.isChecked)?.value ||
      VIDEO_QUALITIES_OPTIONS[0].value,
    [options],
  );

  const dispatch = useDispatch();

  const onCloseSettingHandler = useCallback(() => {
    setIsSettingOpen(false);
  }, []);

  const onOpenSettingHandler = useCallback(() => {
    setIsSettingOpen(true);
  }, []);

  useEffect(() => {
    if (activeOption) {
      dispatch(setPlayerQuality(activeOption));
    }
  }, [activeOption, dispatch]);

  return (
    <>
      <VideoPlayerChangeQSetting
        label="Изменить качество видео"
        onClick={onOpenSettingHandler}
      />
      <ModalSheet isOpen={isSettingOpen} onClose={onCloseSettingHandler}>
        <FlexWrapper height="30px" alignItems="center">
          <HeadingLevel3>Изменить качество видео</HeadingLevel3>
        </FlexWrapper>

        <LineStyled />
        <FlexWrapper
          height="30px"
          alignItems="center"
          justifyContent="space-between"
        />
        <RadioButtonGroup options={options} setOptions={setOptions} />
        <FlexWrapper mt="16px" justifyContent="center">
          <Button onClick={onCloseSettingHandler}>
            {TEXTS.common.confirm}
          </Button>
        </FlexWrapper>
      </ModalSheet>
    </>
  );
};
