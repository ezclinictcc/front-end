import { Form } from "@unform/web";
import React from "react";
import HstCalendar from "../../../Components/HstCalendar";
import RangeDate from "../../../Components/RangeDate";
import Text from "../../../Components/Text";
import { StyBody, StyContainer, StyHeader, StyTitle } from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikMyCalendar: React.FC<{}> = () => {
  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text fontWeight="600" size="24px" value="Meu Calendário" />
          </StyTitle>
        </StyHeader>
        <StyBody>
          <Form
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
            onSubmit={() => null}
          >
            <div style={{ width: "70%", marginRight: "50px" }}>
              <HstCalendar id="calendarDate" name="calendarDate" />
            </div>
            <div style={{ width: "30%" }}>
              <RangeDate />
            </div>
          </Form>
        </StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikMyCalendar;
