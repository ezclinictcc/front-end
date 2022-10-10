import React, { useState, useEffect, useRef } from "react";
import {
  StyContainer,
  StyContainerCalendar,
  StyContainerInput,
  StyInput,
  StyLabelContainer,
} from "./styles";
import { Header } from "./header";
import DaysOfWeek from "./daysOfWeek";
import { Days } from "./days";
import { useField } from "@unform/core";
import { format } from "date-fns";
import moment from "moment";
import { Sizes } from "../../ts/enum/componentSize";
import Text from "../Text";
import CalendarIcon from "../../assets/icons/CalendarIcon";

interface Props {
  /** A name necessary to component */
  name: string;
  /** Definy component is disabled or not */
  disable?: boolean;
  /** Id of component */
  id: string;
  /** Height of component in Sizes, import Sizes for this */
  height?: Sizes;
  /** Width of component in Sizes, import Sizes for this */
  width?: Sizes;
  /** Label that will appear on top of the input  */
  label?: string;
  /** Number of days the user can choose in the past */
  pastDate?: number;
  /** Number of days the user can choose in the future */
  futureDate?: number;
  /** You don’t need to use these props, it goes with the stylized-component */

  /** If will use the component out a form this props need be false */
  bindForm?: boolean;
  /** If will use the component out a form do you need pass a function to altered a state of one variable  */
  onChange?: Function;
  /** Pass the formRef of the formulary is necessary  */
  formRef?: any;
  /** Idiom actual */
  currentIdiom?: string;

  initialValue?: string;
}

const getHeightBySize = (size: keyof typeof Sizes): number =>
  ({
    xxs: 15,
    lb: 25,
    xs: 20,
    sm: 25,
    md: 30,
    lg: 35,
    xl: 40,
  }[size]);

const getFontBySize = (size: keyof typeof Sizes): number =>
  ({
    lb: 1.34,
    xxs: 1,
    xs: 1.17,
    sm: 1.34,
    md: 1.5,
    lg: 1.84,
    xl: 2.2,
  }[size]);

const HstCalendar: React.FC<Props> = ({
  name,
  disable = false,
  label = "",
  height = Sizes.lg,
  pastDate = 0,
  futureDate = 0,
  bindForm = true,
  onChange = () => {},
  formRef = null,
  id,
  currentIdiom = "PT",
  initialValue,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<any>("");
  const [open, setOpen] = useState<boolean>(false);
  const [dayActual, setDayActual] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [initialValueSetted, setInitialValueSetted] = useState<boolean>(false);

  /**
   * @description Set the initial value.
   */
  useEffect(() => {
    if (initialValue) {
      if (initialValueSetted === false) {
        const formatDateInput1PTES = moment(new Date(initialValue)).format(
          "DD/MM/YYYY"
        );
        const formatDateInput1EN = moment(new Date(initialValue)).format(
          "MM/DD/YYYY"
        );
        if (currentIdiom === "PT" || currentIdiom === "ES") {
          setDayActual(formatDateInput1PTES);
        } else {
          setDayActual(formatDateInput1EN);
        }
        setSelectedDate(new Date(initialValue));
        setCurrentMonth(new Date(initialValue));

        setInitialValueSetted(true);
      }
    }
  }, [initialValue, initialValueSetted]);

  useEffect(() => {
    if (initialValue) {
      setCurrentMonth(new Date(initialValue));
      setSelectedDate(new Date(initialValue));
    }
  }, [initialValue]);

  return (
    <StyContainer
      height={getHeightBySize(height)}
      style={{ cursor: `${disable ? "not-allowed" : "pointer"}` }}
    >
      <StyContainerCalendar height={getHeightBySize(height)}>
        <Header
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          idiom={currentIdiom}
        />
        <DaysOfWeek idiom={currentIdiom} />
        <Days
          currentMonth={currentMonth}
          selectedDate={selectedDate || new Date()}
          setSelectedDate={(data: Date) => {
            setSelectedDate(data);
            onChange(moment(data, "YYYY/MM/DD").format("DD/MM/YYYY"));
          }}
          setDayActual={setDayActual}
          futureDate={futureDate}
          pastDate={pastDate}
          setOpen={setOpen}
          idiom={currentIdiom}
          id={id}
        />
      </StyContainerCalendar>
    </StyContainer>
  );
};

export default HstCalendar;
