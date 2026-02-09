import { useCallback, useState } from "react";

import { Modal } from "@features/modal";
import { RegularTextLevel3 } from "@shared/ui/typography";
import { TrainingCard } from "@widgets/training-card";

import type { CourseCardProps } from "./types";

export const CourseCard = ({ cardData }: CourseCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsModalOpen(false), []);
  const onOpenModal = useCallback(() => setIsModalOpen(true), []);

  return (
    <>
      <TrainingCard
        key={cardData.id}
        title={cardData.title}
        description={cardData.descriptionShort}
        price="200"
        image={cardData.image}
        programId={cardData.id}
        onQuestionMarkHandler={onOpenModal}
      />

      <Modal title={cardData.title} isOpen={isModalOpen} onClose={onCloseModal}>
        <RegularTextLevel3>{cardData.descriptionLong}</RegularTextLevel3>
      </Modal>
    </>
  );
};
