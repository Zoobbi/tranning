import type { Program } from "@shared/lib/programs";

export interface ProgramCardExtendedInfoProps {
  program: Program;
  isModalOpen: boolean;
  onCloseModal: () => void;
}
