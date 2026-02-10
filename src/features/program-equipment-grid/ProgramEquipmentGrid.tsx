import { useCallback, useState } from "react";

import { Modal } from "@features/modal";
import { EQUIPMENTS } from "@shared/lib/programs";
import { TEXTS } from "@shared/lib/texts";
import { FlexWrapper } from "@shared/ui";
import { RegularTextLevel2 } from "@shared/ui/typography";
import { EquipmentIcon } from "@widgets/equipment-icon";

import type { ProgramEquipmentGridProps } from "./types";

export const ProgramEquipmentGrid = ({
  equipments,
}: ProgramEquipmentGridProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsModalOpen(false), []);
  const onOpenModal = useCallback(() => setIsModalOpen(true), []);

  const ExtendedEquipmentsInfo = equipments.map((equipment) => {
    const data = EQUIPMENTS[equipment];

    return (
      <FlexWrapper key={equipment} gap="16px" mb="16px">
        <EquipmentIcon key={data.title} icon={data.icon} title={data.title} />
        <RegularTextLevel2>{data.title}</RegularTextLevel2>
      </FlexWrapper>
    );
  });

  const Grid = equipments.map((equipment) => {
    const iconData = EQUIPMENTS[equipment];

    return (
      <EquipmentIcon
        key={iconData.title}
        icon={iconData.icon}
        title={iconData.title}
      />
    );
  });

  if (!equipments.length) {
    return null;
  }

  return (
    <>
      <div
        role="button"
        onClick={onOpenModal}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onOpenModal();
          }
        }}
      >
        <FlexWrapper gap="16px" justifyContent="center">
          {Grid}
        </FlexWrapper>
      </div>
      <Modal
        title={`${TEXTS.training.equipment}:`}
        isOpen={isModalOpen}
        onClose={onCloseModal}
      >
        {ExtendedEquipmentsInfo}
      </Modal>
    </>
  );
};
