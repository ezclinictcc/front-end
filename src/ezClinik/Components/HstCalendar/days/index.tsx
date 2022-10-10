import React, { useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isSameMonth,
  isSameDay,
  addDays,
  isFuture,
  subDays,
  isPast,
} from "date-fns";
import { StyContainerDay, StyDay, StyRow, StyDays } from "./styles";
import Text from "../../Text";
import { Sizes } from "../../../ts/enum/componentSize";

interface Props {
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: Function;
  setDayActual: Function;
  setOpen: Function;
  pastDate: number;
  futureDate: number;
  idiom: string;
  id: string;
}

export const Days: React.FC<Props> = ({
  currentMonth,
  setDayActual,
  selectedDate,
  setSelectedDate,
  pastDate,
  futureDate,
  setOpen,
  idiom,
  id,
}) => {
  const monthStart: Date = startOfMonth(currentMonth);
  const monthEnd: Date = endOfMonth(monthStart);
  const startDate: Date = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);
  const dateFormat: string = "dd";
  const rows: JSX.Element[] = [];

  let days: JSX.Element[] = [];
  let day: Date = startDate;
  let formattedDate: string = "";

  function onDateClick(day: Date) {
    let formatDate: any = "";
    if (idiom === "EN") {
      formatDate = format(day, "MM'/'dd'/'yyyy");
    } else {
      formatDate = format(day, "dd'/'MM'/'yyyy");
    }
    setSelectedDate(day);
    setDayActual(formatDate);
    setOpen(false);
  }
  while (day <= endDate) {
    for (let i: number = 0; i < 7; i++) {
      const dayWeekend: string = String(day).substring(0, 3);
      formattedDate = format(day, dateFormat);
      const cloneDay: Date = day;
      const index: string = i
        .toString()
        .concat(cloneDay.toString().split(" ")[2]);
      const dayCustomId: string = id.concat(index);
      days.push(
        <StyContainerDay key={String(day)}>
          <StyDay
            className={`${
              // dayWeekend === "Sun"
              //   ? "weekendDay"
              //   :
              isSameDay(day, selectedDate)
                ? "selected"
                : !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(new Date(), day)
                ? "currentDay"
                : (futureDate &&
                    isFuture(subDays(day, futureDate ? futureDate + 1 : 0)) &&
                    "disabled") ||
                  (pastDate &&
                    isPast(addDays(day, pastDate ? pastDate + 1 : 0)))
                ? "disabled"
                : ""
            }`}
            key={format(day, "MM'/'dd'/'yyyy")}
            onClick={() => onDateClick(cloneDay)}
            data-testid={`${id}-${dayCustomId}-test-id`}
          >
            <Text value={formattedDate} size={Sizes.lb} hasMargin={false} />
          </StyDay>
        </StyContainerDay>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <StyRow className="row" key={format(day, "MM'/'dd")}>
        {days}
      </StyRow>
    );
    days = [];
  }
  return (
    <StyDays className="body" data-testid={`${id}-calendar-days-test-id`}>
      {rows}
    </StyDays>
  );
};
