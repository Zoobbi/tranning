import { TEXTS } from "@shared/lib/texts";
import { Col, Container, PageWrapper, Row } from "@shared/ui";
import { Header } from "@widgets/header";

export const TrainingPage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.training} />
      <Container>
        <Row>
          <Col>тренировки</Col>
            <Col />
        </Row>
      </Container>
    </PageWrapper>
  );
};
