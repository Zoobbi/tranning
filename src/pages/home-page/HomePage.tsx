import { CourseGrid } from "@features/course-grid";
import { PROGRAMS_MAP } from "@shared/lib/programs";
import { TEXTS } from "@shared/lib/texts";
import { Col, Container, PageWrapper, Row } from "@shared/ui";
import { Header } from "@widgets/header";

export const HomePage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.home} />
      <Container>
        <Row>
          <Col>
            <CourseGrid coursesData={PROGRAMS_MAP} />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};
