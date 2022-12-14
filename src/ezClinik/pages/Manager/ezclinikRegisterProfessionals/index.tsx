import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  getClinicData,
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
  StyHeader,
  StyInfoAccess,
  StyInfoAddress,
  StyTitle,
} from "./styles";
import * as yup from "yup";
import getValidationErros from "../../../utils/validateErrors";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../store/redux/user/userSlice";
import NoFillButton from "../../../Components/Buttons/NoFillButton";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikRegisterProfessionals: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const loggedUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [clinicId, setClinicId] = useState<string>("");

  const { fetch: insertUserRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertUser,
    onData: (data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Usuário criado com sucesso.",
      });
      navigate("/clinic-professionals");
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao criar o usuário.",
      });
    },
  });

  const { fetch: getClinic, pending: getClinicLoad } = useAsync({
    promiseFn: getClinicData,
    onData: (data) => {
      setClinicId(String(data[0].id));
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message:
          "Não foi possível carregar a clínica para o Profissional. Atualize a página.",
      });
    },
  });

  useEffect(() => {
    getClinic(loggedUser.tokenDecode.idUser);
  }, []);

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
        if (clinicId) {
          data.idUserType = "e25ffc8b-6e78-45ee-99da-656f8e32dc91";
          data.idProfile = "1bd8d9f8-9860-4f0e-8303-a8ad61a4cb45";
          data.number = Number(data.number);
          data.idClinic = clinicId;
          insertUserRequest(data);
          formRef.current?.setErrors({});
        }
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
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            display: insertUserLoad ? "none" : "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "100%", marginBottom: "3%" }}>
            <StyInfoAccess>
              <Text
                size="18px"
                fontWeight="600"
                value="Informações de Acesso"
              />
              <StyCentralize>
                <InputSoft
                  id="name"
                  name="name"
                  formRef={formRef}
                  width="400px"
                  label="Nome"
                  placeholder="Nome do Usuário"
                />
                <InputSoft
                  id="email"
                  name="email"
                  formRef={formRef}
                  width="400px"
                  label="E-mail"
                  placeholder="E-mail de Acesso"
                />
                <InputSoft
                  id="password"
                  name="password"
                  formRef={formRef}
                  width="400px"
                  label="Senha"
                  placeholder="Crie uma Senha"
                  hidden
                />
              </StyCentralize>
            </StyInfoAccess>
            <StyInfoAddress>
              <Text
                size="18px"
                fontWeight="600"
                value="Informações de Contato"
              />
              <div style={{ display: "flex", flexFlow: "wrap" }}>
                <div style={{ marginRight: "30px" }}>
                  <StyCentralize>
                    <InputSoft
                      id="country"
                      name="country"
                      formRef={formRef}
                      width="350px"
                      label="País"
                    />
                    <InputSoft
                      id="state"
                      name="state"
                      formRef={formRef}
                      width="350px"
                      label="Estado"
                    />
                    <InputSoft
                      id="city"
                      name="city"
                      formRef={formRef}
                      width="350px"
                      label="Cidade"
                    />
                  </StyCentralize>
                </div>
                <StyCentralize>
                  <InputSoft
                    id="district"
                    name="district"
                    formRef={formRef}
                    width="350px"
                    label="Complemento"
                  />
                  <InputSoft
                    id="number"
                    name="number"
                    formRef={formRef}
                    width="350px"
                    label="Número"
                    onlyNumbers
                  />
                  <InputSoft
                    id="cep"
                    name="cep"
                    formRef={formRef}
                    width="350px"
                    label="CEP"
                  />
                </StyCentralize>
              </div>
            </StyInfoAddress>
          </div>
          <StyButtonSubmit>
            <NoFillButton
              id="delete-user-id"
              title="Cancelar"
              width="150px"
              height="40px"
              action={() => navigate("/clinic-professionals")}
              borderColor="rgb(0,185,156)"
              color="rgb(0,185,156)"
            />
            <FillButton
              id="login"
              type="submit"
              width="150px"
              height="40px"
              title="Cadastrar"
            />
          </StyButtonSubmit>
        </Form>
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikRegisterProfessionals;
