import { ToggleThemeChanger } from "@features/toggles";
import { TEXTS } from "@shared/lib/texts";
import { Col, Container, PageWrapper, Row } from "@shared/ui";
import { Header } from "@widgets/header";

export const SettingsPage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.settings} />
      <Container>
        <Row>
          <Col>
            <ToggleThemeChanger />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};
