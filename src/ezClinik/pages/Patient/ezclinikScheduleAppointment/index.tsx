import React from "react";
import { StyBody, StyContainer, StyHeader, StyTitle } from "./styles";
import Text from "../../../Components/Text";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikScheduleAppointment: React.FC<{}> = () => {
  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text fontWeight="600" size="24px" value="Agendar Consulta" />
          </StyTitle>
        </StyHeader>
        <StyBody></StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikScheduleAppointment;
