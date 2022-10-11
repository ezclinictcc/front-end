import React from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import { StyContainer } from "./styles";

/**
 * @description Not Found Page.
 * @returns CD Pega Not Found.
 */
export const EZClinikPageNotFound: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyContainer>
        <span>404</span>
        <span>Página não encontrada</span>
        <span>
          O conteúdo não está mais disponível ou você digitou o endereço errado.
        </span>
        <FillButton
          id="submit"
          type="submit"
          action={() => navigate("/home")}
          title="Retornar para Home"
        />
      </StyContainer>
    </>
  );
};

export default EZClinikPageNotFound;
