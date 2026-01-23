export interface BackgroundImageProps {
  image?: string;
  width?: string | number;
  height?: string | number;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  className?: string;
  borderRadius?: string;
  children?: React.ReactNode;
}
