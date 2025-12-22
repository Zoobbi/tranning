import { useCallback } from "react";

import { Modal } from "@features/modal";
import { TEXTS } from "@shared/lib/texts";
import { Button, FlexWrapper } from "@shared/ui";
import { RegularTextLevel2, RegularTextLevel3 } from "@shared/ui/typography";

import type { BadgeModalProps } from "./types";

export const BadgeModal = ({
  badgeInfo,
  badgeImage,
  isModalOpen,
  setIsModalOpen,
}: BadgeModalProps) => {
  const closeBadgeModalHandler = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const Footer = (
    <FlexWrapper>
      <Button onClick={closeBadgeModalHandler}>{TEXTS.common.close}</Button>
    </FlexWrapper>
  );

  return (
    <Modal
      title={badgeInfo.title}
      isOpen={isModalOpen}
      onClose={closeBadgeModalHandler}
      footer={Footer}
    >
      <FlexWrapper justifyContent="center">
        <FlexWrapper position="relative">{badgeImage}</FlexWrapper>
      </FlexWrapper>
      <FlexWrapper mb="12px" justifyContent="center">
        <RegularTextLevel3 textAlign="center">
          {badgeInfo.description}
        </RegularTextLevel3>
      </FlexWrapper>
      <FlexWrapper mb="8px" justifyContent="center">
        <RegularTextLevel2>
          {badgeInfo.progressValue} / {badgeInfo.nextLevelCondition}
        </RegularTextLevel2>
      </FlexWrapper>
    </Modal>
  );
};
