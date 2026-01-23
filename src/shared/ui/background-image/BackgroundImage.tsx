import { BackgroundImageStyled } from "./styled";
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
      {children}
    </BackgroundImageStyled>
  );
};
