import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { BackgroundImage, FlexWrapper, PriceRow } from "@shared/ui";
import { LinkButton } from "@shared/ui/button";
import { HeadingLevel4, RegularTextLevel4 } from "@shared/ui/typography";

import { TrainingCardStyled } from "./styled";
import type { TrainingCardProps } from "./types";

export const TrainingCard = ({
  title,
  description,
  // TODO add price,
  image,
  programId,
  onQuestionMarkHandler,
}: TrainingCardProps) => {
  return (
    <TrainingCardStyled
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
      gap="16px"
    >
      <BackgroundImage
        onQuestionMarkHandler={onQuestionMarkHandler}
        image={image}
        backgroundPosition="center 30%"
      />
      <FlexWrapper alignItems="center" flexDirection="column">
        <HeadingLevel4 $alignSelf="center">{title}</HeadingLevel4>
        <RegularTextLevel4>{description}</RegularTextLevel4>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between" mb="16px" pl="16px" pr="16px">
        <PriceRow basePrice={200} discount={120} />
        <LinkButton to={`${ROUTES_PATHS.training}/${programId}`}>
          Начать
        </LinkButton>
      </FlexWrapper>
    </TrainingCardStyled>
  );
};

TrainingCard.displayName = "TrainingCard";
