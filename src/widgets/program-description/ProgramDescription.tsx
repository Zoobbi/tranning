import { BackgroundImage, FlexWrapper } from "@shared/ui";
import { HeadingLevel2, RegularTextLevel3 } from "@shared/ui/typography";

import type { ProgramDescriptionProps } from "./types";

export const ProgramDescription = ({ program }: ProgramDescriptionProps) => {
  const { title, descriptionLong, image } = program;

  // TODO add
  /* level,
      category,
      subcategory,
      equipments,
  */

  return (
    <FlexWrapper gap="16px" flexDirection="column">
      <BackgroundImage
        borderRadius="12px"
        image={image}
        backgroundPosition="center 30%"
      />
      <HeadingLevel2 $textAlign="center">{title}</HeadingLevel2>
      <RegularTextLevel3>{descriptionLong}</RegularTextLevel3>
    </FlexWrapper>
  );
};
