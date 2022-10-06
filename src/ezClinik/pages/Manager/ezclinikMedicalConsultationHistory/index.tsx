import React from "react";
import EmptyInfo from "../../../Components/EmptyInfo";
import Text from "../../../Components/Text";
import {
  StyBody,
  StyContainer,
  StyHeader,
  StyNoData,
  StyTitle,
} from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikMedicalConsultationHistory: React.FC<{}> = () => {
  return (
    <StyContainer>
      <StyHeader>
        <StyTitle>
          <Text fontWeight="600" size="24px" value="Histórico de Consultas" />
        </StyTitle>
      </StyHeader>
      <StyBody>
        <EmptyInfo>
          <StyNoData>
            <Text
              size="20px"
              fontWeight="600"
              value="Não há Consultas Realizadas"
            />
          </StyNoData>
        </EmptyInfo>
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikMedicalConsultationHistory;
