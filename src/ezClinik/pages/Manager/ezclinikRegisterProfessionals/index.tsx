import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import { insertUser } from "../../../services/controllers/identity-controller";
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

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikRegisterProfessionals: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const navigate = useNavigate();
  const formRef = useRef<FormHandles & HTMLFormElement>(null);

  const { fetch: insertUserRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertUser,
    onData: (data) => {
      console.log("data: ", data);
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
        insertUserRequest(data);
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
          <Text fontWeight="600" size="24px" value="Profissionais da Clínica" />
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
            <FillButton
              id="login"
              type="submit"
              width="150px"
              title="Cadastrar"
            />
          </StyButtonSubmit>
        </Form>
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikRegisterProfessionals;
