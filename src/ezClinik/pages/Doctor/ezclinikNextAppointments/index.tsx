import { Form } from "@unform/web";
import React, { useState } from "react";
import EmptyInfo from "../../../Components/EmptyInfo";
import HstCalendar from "../../../Components/HstCalendar";
import RangeDate from "../../../Components/RangeDate";
import Text from "../../../Components/Text";
import {
  StyAppointmentsInfo,
  StyBody,
  StyContainer,
  StyContentInfo,
  StyHeader,
  StyTitle,
} from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikNextAppointments: React.FC<{}> = () => {
  const [dataSelected, setDataSelected] = useState<string>("");
  const [configureCalendar, setConfigureCalendar] = useState<any>({});

  function handleChange(data: string) {
    setDataSelected(data);
    if (!configureCalendar[data]) {
      configureCalendar[data] = {};
    }
  }

  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text fontWeight="600" size="24px" value="Próximas Consultas" />
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
              <HstCalendar
                id="teste"
                name="teste"
                onChange={(date: Date) => handleChange(date.toString())}
              />
            </div>
            <StyAppointmentsInfo>
              <Text
                size="18px"
                fontWeight="600"
                value="Detalhes das Próximas Consultas"
              />
              <StyContentInfo>
                <EmptyInfo>
                  <Text
                    size="18px"
                    fontWeight="600"
                    value="Não foram encontradas consultas agendadas para a data selecionada"
                  />
                </EmptyInfo>
              </StyContentInfo>
            </StyAppointmentsInfo>
          </Form>
        </StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikNextAppointments;
