import { useCallback, useState } from "react";

import { Modal } from "@features/modal";
import { ProgramEquipmentGrid } from "@features/program-equipment-grid/ProgramEquipmentGrid";
import { BackgroundImage, FlexWrapper } from "@shared/ui";
import { HeadingLevel2, RegularTextLevel3 } from "@shared/ui/typography";

import type { ProgramDescriptionProps } from "./types";

export const ProgramDescription = ({ program }: ProgramDescriptionProps) => {
  const { title, descriptionShort, descriptionLong, image, equipments } =
    program;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsModalOpen(false), []);
  const onOpenModal = useCallback(() => setIsModalOpen(true), []);

  // TODO add
  /* level,
      category,
      subcategory,
  */

  return (
    <>
      <FlexWrapper gap="16px" flexDirection="column">
        <BackgroundImage
          borderRadius="12px"
          image={image}
          backgroundPosition="center 30%"
          onQuestionMarkHandler={onOpenModal}
        />
        <HeadingLevel2 $textAlign="center">{title}</HeadingLevel2>
        {equipments && <ProgramEquipmentGrid equipments={equipments} />}
        <RegularTextLevel3>{descriptionShort}</RegularTextLevel3>
      </FlexWrapper>
      <Modal title={title} isOpen={isModalOpen} onClose={onCloseModal}>
        <RegularTextLevel3>{descriptionLong}</RegularTextLevel3>
      </Modal>
    </>
  );
};
