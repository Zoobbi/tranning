interface CommonBackgroundImageProps {
  image?: string;
  width?: string | number;
  height?: string | number;
  backgroundSize?: string;
  backgroundRepeat?: string;
  className?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  onQuestionMarkHandler?: () => void;
}

export interface BackgroundImageProps extends CommonBackgroundImageProps {
  backgroundPosition?: string;
}

export interface BackgroundImageStyledProps extends CommonBackgroundImageProps {
  $backgroundPosition?: string;
}
