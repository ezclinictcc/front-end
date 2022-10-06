import React from "react";
import {
  StyContainer,
  StyLabelText,
  StyLogo,
  StyLogoName,
  StyMessage,
  StyTextAlign,
  StyWrapper,
} from "./styles";
import appLogo from "../../../assets/logo.png";
import Typed from "react-typed";

/**
 * @description Create CD Header System.
 * @returns CD Header System.
 */
export const PublicHeader: React.FC<{}> = () => {
  return (
    <>
      <StyContainer>
        <StyWrapper>
          <StyLogo>
            <img
              src={appLogo}
              alt="Logo da Aplicação EZClinik"
              width={80}
              height={80}
            />
            <StyTextAlign>
              <StyLogoName>EZClinik</StyLogoName>
              <StyLabelText>Agende sua Consulta</StyLabelText>
            </StyTextAlign>
          </StyLogo>
          <StyMessage>
            <Typed
              strings={[
                `EZClinik é uma clínica inteligente. Com facilidade e mobilidade, o paciente pode agendar sua consulta sozinho de acordo com a agenda do profissional de saúde cadastrado no sistema.`,
              ]}
              typeSpeed={75}
              backSpeed={50}
            />
          </StyMessage>
        </StyWrapper>
      </StyContainer>
    </>
  );
};

export default PublicHeader;
