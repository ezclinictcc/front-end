import React from "react";
import { Sizes } from "../../../ts/enum/componentSize";
import Text from "../../Text";

import { StyWeek } from "./styles";

interface Props {
  idiom: string;
}

const DaysOfWeek: React.FC<Props> = ({ idiom }) => {
  const days: JSX.Element[] = [];
  const daysWeekPtEs: string[] = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
  ];
  const daysWeekEnUS: string[] = ["Su", "2°", "3°", "4°", "5°", "6°", "Sa"];

  const locale: string[] = idiom == "EN" ? daysWeekEnUS : daysWeekPtEs;

  for (let i: number = 0; i < 7; i++) {
    days.push(
      <Text
        value={locale[i]}
        key={locale[i]}
        hasMargin={false}
        size={Sizes.lb}
      />
    );
  }
  return <StyWeek>{days}</StyWeek>;
};

export default DaysOfWeek;
