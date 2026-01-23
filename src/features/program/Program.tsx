import { useMemo } from "react";

import { PROGRAMS_MAP } from "@shared/lib/programs";
import { Col, Row } from "@shared/ui";
import { ProgramDescription } from "@widgets/program-description/ProgramDescription";
import { ProgramFullTraining } from "@widgets/program-full-training";
import { ProgramVideoGrid } from "@widgets/program-video-grid";

import type { ProgramProps } from "./types";

export const Program = ({ programId }: ProgramProps) => {
  const program = useMemo(
    () => PROGRAMS_MAP.find((program) => program.id === programId),
    [programId],
  );

  if (!program?.videos) {
    return null;
  }

  return (
    <>
      <Row>
        <Col>
          <ProgramDescription program={program} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgramFullTraining fullTrainingVideo={program.programVideo} />
        </Col>
      </Row>
      <Row>
        <ProgramVideoGrid videoData={program.videos} />
      </Row>
    </>
  );
};
