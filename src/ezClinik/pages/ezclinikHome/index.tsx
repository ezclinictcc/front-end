import React from "react";
import { useSelector } from "react-redux";
import Text from "../../Components/Text";
import { selectLoggedUser } from "../../store/redux/user/userSlice";
import currentTimeSalutation from "../../utils/getCurrentTime";
import {
  StyBody,
  StyContainer,
  StyHeader,
  StyPermissionBody,
  StyPermissionContainer,
  StyPermissionInfos,
  StyPermissionType,
  StyTitle,
} from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikHome: React.FC<{}> = () => {
  const loggedUser = useSelector(selectLoggedUser);

  const roleName: any = {
    MANAGER: "Gerente",
    DOCTOR: "Profissional da Clínica",
    PATIENT: "Paciente",
  };

  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text
              fontWeight="600"
              size="24px"
              value={`${currentTimeSalutation()}, ${loggedUser.name}`}
            />
            <div>
              <Text size="20px" value="Tipo de Acesso: " />
              <Text
                fontWeight="600"
                size="20px"
                value={roleName[String(loggedUser.naUserType)]}
              />
            </div>
          </StyTitle>
        </StyHeader>
        <StyBody>
          <StyPermissionContainer>
            <StyPermissionBody>
              <StyPermissionType>
                {loggedUser.naUserType === "PATIENT" && (
                  <>
                    <Text
                      size="18px"
                      value={`Aqui no EZClinik, você poderá acessar as páginas: "Home", "Agendar Consulta" e "Minhas Consultas".`}
                    />
                    <StyPermissionInfos>
                      <Text
                        size="18px"
                        value={`Na página "Agendar Consulta", você conseguirá agendar sua consulta com um profissional de uma determinada clínica.`}
                      />
                      <Text
                        size="18px"
                        value={`Nas página "Minhas Consultas", você conseguirá visualizar suas consultas agendadas.`}
                      />
                    </StyPermissionInfos>
                  </>
                )}
                {loggedUser.naUserType === "DOCTOR" && (
                  <>
                    <Text
                      size="18px"
                      value={`Aqui no EZClinik, você poderá acessar as páginas: "Home", "Meu Calendário" e "Próximas Consultas".`}
                    />
                    <StyPermissionInfos>
                      <Text
                        size="18px"
                        value={`Na página "Meu Calendário", você conseguirá determinar os dias e horários disponíveis para os pacientes agendarem suas consultas.`}
                      />
                      <Text
                        size="18px"
                        value={`Na página "Próximas Consultas", você conseguirá visualizar suas próximas consultas de acordo com o dia selecionado.`}
                      />
                    </StyPermissionInfos>
                  </>
                )}
                {loggedUser.naUserType === "MANAGER" && (
                  <>
                    <Text
                      size="18px"
                      value={`Aqui no EZClinik, você poderá acessar as páginas: "Home", "Profissionais da Clínica", "Histórico de Consultas" e "Minha Clínica".`}
                    />
                    <StyPermissionInfos>
                      <Text
                        size="18px"
                        value={`Na página "Profissionais da Clínica", você conseguirá cadastrar, editar, deletar e visualizar os profissionais cadastrados na sua clínica.`}
                      />
                      <Text
                        size="18px"
                        value={`Na página "Histórico de Consultas", você conseguirá visualizar todas as consultas realizadas pelos profissionais cadastrados na sua clínica.`}
                      />
                      <Text
                        size="18px"
                        value={`Na página "Minha Clínica", você conseguirá cadastrar ou editar os dados da sua clínica.`}
                      />
                    </StyPermissionInfos>
                  </>
                )}
              </StyPermissionType>
            </StyPermissionBody>
          </StyPermissionContainer>
        </StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikHome;
