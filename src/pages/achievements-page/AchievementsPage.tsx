import React from "react";

import { BadgeGrid } from "@features/badge-grid";
import { FiltersAchievementsPage } from "@features/filters-achivments-page";
import { TEXTS } from "@shared/lib/texts";
import { Col, Container, PageWrapper, Row } from "@shared/ui";
import { Header } from "@widgets/header";

export const AchievementsPage = () => {
  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.achievements} />
      <Container>
        <Row>
          <Col>
            <FiltersAchievementsPage />
          </Col>
        </Row>
        <Row>
          <BadgeGrid />
        </Row>
      </Container>
    </PageWrapper>
  );
};
