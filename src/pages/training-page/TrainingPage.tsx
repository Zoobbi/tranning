import { useParams } from "react-router-dom";

import { Program } from "@features/program";
import { TEXTS } from "@shared/lib/texts";
import { Container, PageWrapper } from "@shared/ui";
import { Header } from "@widgets/header";

export const TrainingPage = () => {
  const { programId } = useParams();

  return (
    <PageWrapper>
      <Header sectionName={TEXTS.pageHeaders.training} />
      <Container>
        <Program programId={programId!} />
      </Container>
    </PageWrapper>
  );
};
