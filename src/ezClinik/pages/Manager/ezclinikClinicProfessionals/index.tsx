import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  getUsersData,
  insertUser,
} from "../../../services/controllers/identity-controller";
import { ToastContext } from "../../../store/toast";
import { Sizes } from "../../../ts/enum/componentSize";
import { CriticyType } from "../../../ts/enum/criticyType";
import currentTimeSalutation from "../../../utils/getCurrentTime";
import {
  StyBody,
  StyButtonSubmit,
  StyCentralize,
  StyContainer,
  StyFilters,
  StyHeader,
  StyInfoAccess,
  StyInfoAddress,
  StyTitle,
} from "./styles";
import * as yup from "yup";
import getValidationErros from "../../../utils/validateErrors";
import AsyncDataTable from "../../../Components/AsyncDataTable";
import NoFillButton from "../../../Components/Buttons/NoFillButton";
import SimpleInput from "../../../Components/SimpleInput";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikClinicProfessionals: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const navigate = useNavigate();
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [emailFilter, setEmailFilter] = useState<string>("");

  const { fetch: insertUserRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertUser,
    onData: (data) => {
      console.log("data: ", data);
      fireToast({
        criticy: CriticyType.success,
        message: "Usuário criado com sucesso.",
      });
      navigate("/login");
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao criar o usuário.",
      });
    },
  });

  function getSchema() {
    return yup.object().shape({
      name: yup.string().required("Digite seu Nome"),
      email: yup
        .string()
        .email("Digite um E-mail Válido")
        .required("Digite o E-mail de Acesso"),
      password: yup.string().required("Digite a Senha de Acesso"),
      country: yup.string().required("Digite o nome do País"),
      state: yup.string().required("Digite o nome do Estado"),
      city: yup.string().required("Digite o nome da Cidade"),
      district: yup.string().required("Digite o Complemento"),
      number: yup.string().required("Digite o número"),
      cep: yup.string().required("Digite o CEP"),
    });
  }

  async function handleSubmit(data: any) {
    getSchema()
      .validate(data, { abortEarly: false })
      .then(() => {
        data.idUserType = "65475e6a-1ad2-433a-967e-ad6b230c0557";
        data.idProfile = "40c617cf-a41a-45e0-a855-bada1773217f";

        data.number = Number(data.number);
        insertUserRequest();
        formRef.current?.setErrors({});
      })
      .catch((err: any) => {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          fireToast({
            criticy: CriticyType.error,
            message: "Digite as informações solicitadas.",
          });
        }
      });
  }

  return (
    <StyContainer>
      <StyHeader>
        <StyTitle>
          <Text fontWeight="600" size="24px" value="Cadastrar Profissional" />
        </StyTitle>
      </StyHeader>
      <StyBody>
        <StyFilters>
          <SimpleInput
            id="input-professional-id"
            title="Pesquisar"
            placeholder="E-mail do Profissional"
            width="350px"
            handleChange={(dataValue: string) => setEmailFilter(dataValue)}
          />
          <NoFillButton
            id="add-user-id"
            title="+ Novo Profissional"
            action={() => navigate("/clinic-professionals/new")}
            width="180px"
            height="40px"
            borderColor="rgb(0,185,156)"
            color="rgb(0,185,156)"
          />
        </StyFilters>
        <AsyncDataTable
          promiseFn={getUsersData}
          //   onChange={(user: any) => handleSelectedUsers(user)}
          //   onRowClick={(userData: any) => openModalByUserId(userData)}
          //   onChangeId={(usersId: any) => setSelectedUsersId(usersId)}
          headers={["Nome", "E-mail"]}
          columns={["name", "email"]}
          customWidth={["3%", "47%", "50%"]}
          initialOrdenate="name"
          id="Basic-Table-User"
          rowKey="id"
          disableKey="na_status"
          disableKeyValue="Inativo"
          paramsFilter={"65475e6a-1ad2-433a-967e-ad6b230c0557"}
          perPageColumn={["25", "50", "100", "200", "500"]}
          bundles={{
            qttSearch: "Profissional",
            showing: "Exibindo",
            of: "de",
            rowsSelected: "selecionado",
            page: "Páginas",
            qttSearchPlural: "Profissionais",
            rowsSelectedPlural: "selecionados",
            noData: "Sem Data",
            registration: "registrado",
            registrationPlural: "registrados",
          }}
          initialOrder={{
            orderName: "name",
            orderGrowing: true,
          }}
          //buttonsActions={buttonsActions}
          //   reloadTable={activeInactivePending || deleteUserPending}
          //   loading={activeInactivePending || deleteUserPending}
        />
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikClinicProfessionals;
