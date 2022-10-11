import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import NoFillButton from "../../../Components/Buttons/NoFillButton";
import { UnderlineButton } from "../../../Components/Buttons/UnderlineButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import { Sizes } from "../../../ts/enum/componentSize";
import * as yup from "yup";
import {
  StyBackStep,
  StyButtonsContent,
  StyButtonSubmit,
  StyButtonWrapper,
  StyCentralize,
  StyContainer,
  StyContentWrapperFirst,
  StyContentWrapperSecond,
  StyCurrentTransition,
  StyLine,
  StyPageName,
  StySpinnerContent,
  StyTransition,
  StyWrapper,
} from "./styles";
import getValidationErros from "../../../utils/validateErrors";
import { CriticyType } from "../../../ts/enum/criticyType";
import { ToastContext } from "../../../store/toast";
import useAsync from "../../../hooks/useAsync";
import { insertUser } from "../../../services/controllers/identity-controller/index";
import { Spinner } from "../../../Components/Spinner";
import { profileResponse } from "../../../utils/profileResponse";
import { userTypeResponse } from "../../../utils/userTypeResponse";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikNewUser: React.FC<{}> = () => {
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const { fireToast }: any = useContext(ToastContext);
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<string>("empty");
  const navigate = useNavigate();

  const { fetch: insertUserRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertUser,
    onData: (data) => {
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

  function handleTypeUser(user: string) {
    setStep(2);
    setUserType(user);
  }

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
        if (userType !== "empty") {
          data.idUserType =
            userTypeResponse[userType.toString().toUpperCase().trim()].id;
          data.idProfile =
            profileResponse[userType.toString().toUpperCase().trim()].id;
        }
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
    <>
      <StyContainer>
        <StyWrapper>
          <StyTransition>
            <StyCurrentTransition step={step} />
          </StyTransition>
          {userType !== "empty" && !insertUserLoad && (
            <StyBackStep>
              <div
                onClick={() => {
                  setUserType("empty");
                  setStep(1);
                }}
              >
                <Text size={Sizes.xs} value="< Voltar" />
              </div>
            </StyBackStep>
          )}
          <StyPageName secondStep={step === 2}>
            <span>Novo Usuário</span>
          </StyPageName>
          <StyContentWrapperFirst step={step}>
            <StyButtonWrapper>
              <span
                style={{
                  marginBottom: "35px",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                Selecione o tipo de usuário que você deseja criar
              </span>
              <FillButton
                width="200px"
                id="manager"
                type="button"
                title="Gerente"
                action={() => handleTypeUser("MANAGER")}
              />
              <FillButton
                width="200px"
                id="patient"
                type="button"
                title="Paciente"
                action={() => handleTypeUser("PATIENT")}
              />
            </StyButtonWrapper>
            <StyLine />
            <StyButtonsContent>
              <span>Já tem um cadastro? Voltar para</span>
              <UnderlineButton
                id="back-login"
                type="button"
                action={() => navigate("/login")}
                title="Login"
              />
            </StyButtonsContent>
          </StyContentWrapperFirst>
          <StyContentWrapperSecond step={step}>
            {userType !== "empty" && (
              <>
                <Form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{
                    display: insertUserLoad ? "none" : "flex",
                    flexDirection: "column",
                  }}
                >
                  <StyCentralize>
                    <InputSoft
                      id="name"
                      name="name"
                      formRef={formRef}
                      width="350px"
                      label="Nome"
                      placeholder="Nome do Usuário"
                    />
                    <InputSoft
                      id="email"
                      name="email"
                      formRef={formRef}
                      width="350px"
                      label="E-mail"
                      placeholder="E-mail de Acesso"
                    />
                  </StyCentralize>
                  <StyCentralize>
                    <InputSoft
                      id="password"
                      name="password"
                      formRef={formRef}
                      width="350px"
                      label="Senha"
                      placeholder="Crie uma Senha"
                      hidden
                    />
                    <InputSoft
                      id="country"
                      name="country"
                      formRef={formRef}
                      width="350px"
                      label="País"
                    />
                  </StyCentralize>
                  <StyCentralize>
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
                  <StyButtonSubmit>
                    <FillButton
                      id="login"
                      type="submit"
                      width="150px"
                      title="Cadastrar"
                    />
                  </StyButtonSubmit>
                </Form>
              </>
            )}
            {insertUserLoad && (
              <StySpinnerContent>
                <Spinner size={Sizes.xl} />
              </StySpinnerContent>
            )}
          </StyContentWrapperSecond>
        </StyWrapper>
      </StyContainer>
    </>
  );
};

export default EZClinikNewUser;
