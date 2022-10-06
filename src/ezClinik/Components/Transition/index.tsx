import React from "react";
import appLogo from "../../assets/logo.png";
import {
  StyContainer,
  StyLabelText,
  StyLogo,
  StyLogoName,
  StyTextAlign,
} from "./styles";

const Transition: React.FC<{}> = ({}) => {
  return (
    <StyContainer id="transition-id">
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
    </StyContainer>
  );
};

export default Transition;
