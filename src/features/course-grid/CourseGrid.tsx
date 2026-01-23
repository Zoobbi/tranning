import { TrainingCard } from "@widgets/training-card";

import type { CourseGridProps } from "./types";

export const CourseGrid = ({ coursesData }: CourseGridProps) => {
  return (
    <>
      {coursesData.map((item) => (
        <TrainingCard
          key={item.id}
          title={item.title}
          description={item.descriptionShort}
          price="200"
          image={item.image}
          programId={item.id}
        />
      ))}
    </>
  );
};
