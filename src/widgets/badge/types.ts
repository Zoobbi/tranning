import type { Dispatch, SetStateAction } from "react";

export interface BadgeModalProps {
  isModalOpen: boolean;
  badgeImage: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  badgeInfo: any;
}
