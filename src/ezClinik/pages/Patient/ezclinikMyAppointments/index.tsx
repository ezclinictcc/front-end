import React from "react";
import { useNavigate } from "react-router-dom";
import NoFillButton from "../../../Components/Buttons/NoFillButton";
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
export const EZClinikMyAppointments: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <StyContainer>
      <StyHeader>
        <StyTitle>
          <Text fontWeight="600" size="24px" value="Minhas Consultas" />
        </StyTitle>
      </StyHeader>
      <StyBody>
        <EmptyInfo>
          <StyNoData>
            <Text
              size="20px"
              fontWeight="600"
              value="Não há Consultas Agendadas"
            />
            <NoFillButton
              id="add-schedule-id"
              title="Clique para agendar"
              action={() => navigate("/schedule-appointment")}
              width="180px"
              height="40px"
              borderColor="rgb(0,185,156)"
              color="rgb(0,185,156)"
            />
          </StyNoData>
        </EmptyInfo>
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikMyAppointments;
