import { ROUTES_PATHS } from "@shared/lib/routesPaths";
import { TEXTS } from "@shared/lib/texts";
import { PageWrapper } from "@shared/ui";
import { Col, Container, Row } from "@shared/ui/grid";
import { TextWithIcon } from "@shared/ui/text-with-icon";
import { HeadingLevel3 } from "@shared/ui/typography";
import { Header } from "@widgets/header";

export const ProfilePage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.profile} />
      <Container>
        <Row mb="16px">
          <Col>
            <HeadingLevel3 $textAlign="center">Имя пользователя</HeadingLevel3>
          </Col>
        </Row>
        <Row mb="16px">
          <Col>
            <TextWithIcon label="Достижения" link={ROUTES_PATHS.achievements} />
          </Col>
        </Row>
        <Row mb="16px">
          <Col>
            <TextWithIcon label="Настройки" link={ROUTES_PATHS.settings} />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};
