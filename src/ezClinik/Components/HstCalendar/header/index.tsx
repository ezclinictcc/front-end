import React, { useState, useEffect } from "react";

import {
  StyContainer,
  StyButtonChevron,
  StyArrowPrevLeft,
  StyArrowPrevRight,
} from "./styles";
import { format, addMonths, subMonths } from "date-fns";
import { pt, es, enUS } from "date-fns/locale";
import Text from "../../Text";
import { Sizes } from "../../../ts/enum/componentSize";

interface Props {
  currentMonth: Date;
  setCurrentMonth: Function;
  idiom: string;
}

export const Header: React.FC<Props> = ({
  currentMonth,
  setCurrentMonth,
  idiom = "PT",
}) => {
  const [monthFormat, setMonthFormat] = useState<string>("");
  const locale: Locale = idiom == "PT" ? pt : idiom == "EN" ? enUS : es;

  useEffect(() => {
    const month = format(currentMonth, "MMMM yyyy", { locale: locale });
    setMonthFormat(
      month.substring(0, 1).toUpperCase().concat(month.substring(1))
    );
  }, [currentMonth]);

  /**
   * @description Add a month in the calendar
   */
  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  /**
   * @description Sub a month in the calendar
   */
  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  return (
    <StyContainer>
      <StyButtonChevron data-type="button" onClick={prevMonth}>
        <StyArrowPrevLeft />
      </StyButtonChevron>
      <Text size={Sizes.md} value={monthFormat} hasMargin={false} />
      <StyButtonChevron data-type="button" onClick={nextMonth}>
        <StyArrowPrevRight />
      </StyButtonChevron>
    </StyContainer>
  );
};
