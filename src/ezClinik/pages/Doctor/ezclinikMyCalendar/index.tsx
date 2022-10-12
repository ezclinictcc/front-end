import { Form } from "@unform/web";
import React, { useContext } from "react";
import HstCalendar from "../../../Components/HstCalendar";
import RangeDate from "../../../Components/RangeDate";
import Text from "../../../Components/Text";
import { ToastContext } from "../../../store/toast";
import { CriticyType } from "../../../ts/enum/criticyType";
import { StyBody, StyContainer, StyHeader, StyTitle } from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikMyCalendar: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);

  function handleChange() {
    fireToast({
      criticy: CriticyType.info,
      message: "Funcionalidade ainda não implementada.",
    });
  }

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
              <RangeDate onChange={() => handleChange()} />
            </div>
          </Form>
        </StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikMyCalendar;
