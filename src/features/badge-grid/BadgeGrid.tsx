import React from "react";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { selectFilteredAndSortedBadges } from "@redux/selectors/badgeSelectors";
import type { State } from "@redux/types";
import { Col } from "@shared/ui";
import { Badge } from "@widgets/badge";

export const BadgeGrid = () => {
  const [searchParams] = useSearchParams();

  // ✅ Single, memoized, Redux-aware selector
  const badges = useSelector((state: State) =>
    selectFilteredAndSortedBadges(state, searchParams),
  );

  return (
    <>
      {badges.map((badgeInfo) => (
        <Col xs={6} sm={6} key={badgeInfo.id}>
          <Badge badgeId={badgeInfo.id} />
        </Col>
      ))}
    </>
  );
};
