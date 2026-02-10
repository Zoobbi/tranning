import { useCallback, useState } from "react";

import { ProgramEquipmentGrid } from "@features/program-equipment-grid";
import { BackgroundImage, FlexWrapper } from "@shared/ui";
import { HeadingLevel2, RegularTextLevel3 } from "@shared/ui/typography";
import { ProgramCardExtendedInfo } from "@widgets/program-card-extended-info";

import type { ProgramDescriptionProps } from "./types";

export const ProgramDescription = ({ program }: ProgramDescriptionProps) => {
  const { title, descriptionShort, image, equipments } = program;

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
        {equipments.length && <ProgramEquipmentGrid equipments={equipments} />}
        <RegularTextLevel3>{descriptionShort}</RegularTextLevel3>
      </FlexWrapper>
      <ProgramCardExtendedInfo
        program={program}
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
      />
    </>
  );
};
