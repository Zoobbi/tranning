import { TEXTS } from "@shared/lib/texts";
import { Col, Container, PageWrapper, Row } from "@shared/ui";
import { Header } from "@widgets/header";
import { TrainingCard } from "@widgets/training-card";

export const HomePage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.home} />
      <Container>
        <Row>
          {/*  <Col>
          // TODO
            <FilterSortingPanel />
          </Col>*/}
        </Row>
        <Row>
          <Col>
            <TrainingCard />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};
