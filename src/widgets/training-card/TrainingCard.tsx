import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { FlexWrapper, PriceRow } from "@shared/ui";
import { LinkButton } from "@shared/ui/button";
import { HeadingLevel4, RegularTextLevel4 } from "@shared/ui/typography";

import { CardImageStyled, TrainingCardStyled } from "./styled";

export const TrainingCard = () => {
  return (
    <TrainingCardStyled
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
      gap="16px"
    >
      <CardImageStyled />
      <FlexWrapper alignItems="center" flexDirection="column">
        <HeadingLevel4 $alignSelf="center">Курс по ведению</HeadingLevel4>
        <RegularTextLevel4>Продвинутый курс для ведения мяча</RegularTextLevel4>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between" mb="16px" pl="16px" pr="16px">
        <PriceRow basePrice={200} discount={120} />
        <LinkButton to={ROUTES_PATHS.training}>Начать</LinkButton>
      </FlexWrapper>
    </TrainingCardStyled>
  );
};

TrainingCard.displayName = "TrainingCard";
