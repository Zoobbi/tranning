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

export const CardImageStyled = styled.div`
  width: 100%;
  height: 160px; /* h-40 = 10rem = 160px */
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWfjZF0Acmkt1ZpuwHmlStz6yViBGok74Sx0idIhhZgrZuaz8u7H7TTgfkkO-RLfYDHiOIrOI4-gKV-PWQSJcazXstD4HnYDO2UL_2D2CFU6jk-dKKfzkBsbM6aAhkDK9XgKTj4jNjqvzQmG89T4hWBXJfEqivm12QX5jO49HWN1CQZEya-bCdCKMfn7ehy7Zd9GCEoL2qaOlHjsYf-wmdoDkhlvnYLycHugfjoLnLQgjqwJ9LsKjtb89QK_LtO8eHEr1nSnL4xgw");
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
