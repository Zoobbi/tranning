import styled from "styled-components";

import { FlexWrapper } from "@shared/ui";

export const TrainingCardStyled = styled(FlexWrapper)`
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;
