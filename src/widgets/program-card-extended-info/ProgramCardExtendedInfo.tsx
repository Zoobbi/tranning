import { Modal } from "@features/modal";
import { ProgramEquipmentGrid } from "@features/program-equipment-grid";
import { FlexWrapper } from "@shared/ui";
import { RegularTextLevel3 } from "@shared/ui/typography";

import type { ProgramCardExtendedInfoProps } from "./types";

export const ProgramCardExtendedInfo = ({
  program,
  isModalOpen,
  onCloseModal,
}: ProgramCardExtendedInfoProps) => {
  const { title, equipments, descriptionLong } = program;

  return (
    <Modal title={title} isOpen={isModalOpen} onClose={onCloseModal}>
      <FlexWrapper flexDirection="column" gap="16px">
        {equipments.length && <ProgramEquipmentGrid equipments={equipments} />}
        <RegularTextLevel3>{descriptionLong}</RegularTextLevel3>
      </FlexWrapper>
    </Modal>
  );
};
