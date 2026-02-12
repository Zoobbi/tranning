import { FlexWrapper } from "@shared/ui";

import { CourseCard } from "./CourseCard";
import type { CourseGridProps } from "./types";

export const CourseGrid = ({ coursesData }: CourseGridProps) => {
  return (
    <FlexWrapper flexDirection="column" gap="24px">
      {coursesData.map((item) => (
        <CourseCard
          cardData={item}
          key={item.id}
          /*  title={item.title}
          description={item.descriptionShort}
          price="200"
          image={item.image}
          programId={item.id}*/
        />
      ))}
    </FlexWrapper>
  );
};
