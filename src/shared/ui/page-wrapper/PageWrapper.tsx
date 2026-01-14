import { PageWrapperStyled } from "./styled";
import type { PageWrapperProps } from "./types";

export const PageWrapper = ({
  children,
  isFooter = true,
}: PageWrapperProps) => {
  return <PageWrapperStyled $isFooter={isFooter}>{children}</PageWrapperStyled>;
};
