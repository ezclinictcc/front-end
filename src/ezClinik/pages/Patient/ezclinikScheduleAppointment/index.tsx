import React, { useContext, useRef, useState } from "react";
import {
  StyBody,
  StyButtons,
  StyContainer,
  StyFilters,
  StyHeader,
  StyTitle,
} from "./styles";
import Text from "../../../Components/Text";
import SelectBox from "../../../Components/SelectBox";
import { clinicSpeciality } from "../../../utils/clinicSpeciality";
import AsyncDataTable from "../../../Components/AsyncDataTable";
import { getAllClinicData } from "../../../services/controllers/identity-controller";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FillButton } from "../../../Components/Buttons/FillButton";
import NoFillButton from "../../../Components/Buttons/NoFillButton";
import InfoIcon from "../../../assets/icons/InfoIcon";
import { ToastContext } from "../../../store/toast";
import { CriticyType } from "../../../ts/enum/criticyType";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikScheduleAppointment: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [selectedUsersId, setSelectedUsersId] = useState<string[]>([]);

  function handleChange() {
    fireToast({
      criticy: CriticyType.info,
      message: "Functionalidade ainda não implementada.",
    });
  }

  function buttonsActions() {
    return (
      <StyButtons>
        {selectedUsersId.length === 1 && (
          <>
            <NoFillButton
              id="delete-user-id"
              title="Agendamento"
              width="180px"
              height="40px"
              action={() => handleChange()}
              icon={<InfoIcon fill="rgb(0,185,156)" />}
              borderColor="rgb(0,185,156)"
              color="rgb(0,185,156)"
            />
          </>
        )}
      </StyButtons>
    );
  }

  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text fontWeight="600" size="24px" value="Agendar Consulta" />
          </StyTitle>
        </StyHeader>
        <StyBody>
          <>
            <Form ref={formRef} onSubmit={() => handleChange()}>
              <StyFilters>
                <SelectBox
                  id="clinicSpecialty-selectbox"
                  name="clinicSpecialty"
                  title="Serviços Disponíveis"
                  placeHolder="Selecione os Serviços"
                  dataOptions={clinicSpeciality}
                  isCheckBox
                  hasFilter={false}
                  hasMargin={false}
                  hasReset
                  width="400px"
                  formRef={formRef}
                />
                <FillButton
                  id="filter"
                  type="submit"
                  width="150px"
                  title="Filtrar"
                  height="40px"
                />
              </StyFilters>
            </Form>
            <AsyncDataTable
              promiseFn={getAllClinicData}
              onChangeId={(usersId: any) => setSelectedUsersId(usersId)}
              headers={[
                "Nome",
                "Especialidade",
                "CEP",
                "País",
                "Estado",
                "Cidade",
                "Complemento",
                "Número",
              ]}
              columns={[
                "name",
                "clinicSpecialty",
                "cep",
                "country",
                "state",
                "city",
                "district",
                "number",
              ]}
              customWidth={[
                "3%",
                "15%",
                "20%",
                "10%",
                "10%",
                "10%",
                "10%",
                "17%",
                "5%",
              ]}
              initialOrdenate="name"
              id="Basic-Table-User"
              rowKey="id"
              perPageColumn={["25", "50", "100", "200", "500"]}
              bundles={{
                qttSearch: "Clínica",
                showing: "Exibindo",
                of: "de",
                rowsSelected: "selecionada",
                page: "Páginas",
                qttSearchPlural: "Clínicas",
                rowsSelectedPlural: "selecionadas",
                noData: "Sem Data",
                registration: "registrada",
                registrationPlural: "registradas",
              }}
              initialOrder={{
                orderName: "name",
                orderGrowing: true,
              }}
              filterByParams={false}
              buttonsActions={buttonsActions}
            />
          </>
        </StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikScheduleAppointment;
