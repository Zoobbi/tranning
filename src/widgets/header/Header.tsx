import { BackHistoryButton } from "@features/back-history-button";
import { Col, Container, FlexWrapper, Row } from "@shared/ui";

import { HeaderStyled, HeadingLevel2Styled } from "./styled";
import type { HeaderProps } from "./types";

export const Header = ({ sectionName }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Container height="100%">
        <Row height="100%">
          <Col>
            <FlexWrapper
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <BackHistoryButton />
              <HeadingLevel2Styled>{sectionName}</HeadingLevel2Styled>
            </FlexWrapper>
          </Col>
        </Row>
      </Container>
    </HeaderStyled>
  );
};
