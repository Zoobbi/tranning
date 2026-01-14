import { LoginButton } from "@features/login-button/LoginButton";
import { Hoop } from "@shared/assets/icons";
import { FlexWrapper, SVGIcon } from "@shared/ui";
import { HeadingLevel1 } from "@shared/ui/typography";

import { LoginStyled } from "./styled";

export const LoginPage = () => {
  return (
    <LoginStyled>
      <FlexWrapper
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        gap="24px"
      >
        <SVGIcon type={Hoop} size={128} />
        <HeadingLevel1>Над Кольцом</HeadingLevel1>
        <LoginButton />
      </FlexWrapper>
    </LoginStyled>
  );
};
