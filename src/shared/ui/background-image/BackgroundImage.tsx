import { QuestionMark } from "@shared/assets/icons";
import { SVGIcon } from "@shared/ui";

import { BackgroundImageStyled, QuestionMarkStyled } from "./styled";
import type { BackgroundImageProps } from "./types";

export const BackgroundImage = ({
  image,
  width,
  height,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  className,
  children,
  borderRadius,
  onQuestionMarkHandler,
}: BackgroundImageProps) => {
  return (
    <BackgroundImageStyled
      image={image}
      width={width}
      height={height}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      backgroundRepeat={backgroundRepeat}
      className={className}
      borderRadius={borderRadius}
    >
      {onQuestionMarkHandler && (
        <QuestionMarkStyled>
          <SVGIcon onClick={onQuestionMarkHandler} type={QuestionMark} />
        </QuestionMarkStyled>
      )}

      {children}
    </BackgroundImageStyled>
  );
};
