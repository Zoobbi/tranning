import { EQUIPMENTS } from "@shared/lib/programs";
import { FlexWrapper } from "@shared/ui";
import { EquipmentIcon } from "@widgets/equipment-icon";

import type { ProgramEquipmentGridProps } from "./types";

export const ProgramEquipmentGrid = ({
  equipments,
}: ProgramEquipmentGridProps) => {
  const Grid = equipments.map((equipment) => {
    const iconData = EQUIPMENTS[equipment];

    return (
      <EquipmentIcon
        key={iconData.id}
        icon={iconData.icon}
        title={iconData.title}
      />
    );
  });

  if (!equipments.length) {
    return null;
  }

  return (
    <FlexWrapper gap="16px" justifyContent="center">
      {Grid}
    </FlexWrapper>
  );
};
