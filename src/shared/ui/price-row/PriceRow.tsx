import { CURRENCY_CODES } from "@shared/lib/currencyCodes";
import { FlexWrapper } from "@shared/ui";
import { CurrentPrice, OriginalPrice } from "@shared/ui/price-row/styled";

import type { PriceRowProps } from "./types";

export const PriceRow = ({
  basePrice,
  currency = CURRENCY_CODES.rusRubles,
  discount,
}: PriceRowProps) => {
  if (!discount) {
    return (
      <FlexWrapper alignItems="flex-end">
        <CurrentPrice>
          {basePrice}
          {currency}
        </CurrentPrice>
      </FlexWrapper>
    );
  }

  return (
    <FlexWrapper alignItems="flex-end" gap="16px">
      <CurrentPrice>
        {discount}
        {currency}
      </CurrentPrice>
      <OriginalPrice>
        {basePrice}
        {currency}
      </OriginalPrice>
    </FlexWrapper>
  );
};
