import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import UserAccountIcon from "../../../assets/icons/UserAccountIcon";
import { FillButton } from "../../../Components/Buttons/FillButton";
import { UnderlineButton } from "../../../Components/Buttons/UnderlineButton";
import InputCodeValidate from "../../../Components/InputCodeValidate";
import InputSoft from "../../../Components/InputSoft";
import getValidationErros from "../../../utils/validateErrors";
import {
  StyButtonsContent,
  StyButtonWrapper,
  StyCodeDisplay,
  StyContainer,
  StyLine,
  StyPageName,
  StyWrapper,
} from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikForgotPassword: React.FC<{}> = () => {
  const [showCodeNumbers, setShowCodeNumbers] = useState<boolean>(false);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const navigate = useNavigate();

  function getSchema() {
    if (!showCodeNumbers) {
      return yup.object().shape({
        sendPassInstruction: yup
          .string()
          .email("Digite um E-mail Válido")
          .required("Digite o E-mail de Acesso"),
      });
    }
    return yup.object().shape({
      validateEmail: yup
        .string()
        .min(6, "Digite Todos os 6 Números nos Campos Acima")
        .required("O Código Informado não Corresponde"),
    });
  }

  async function handleSubmit(data: any) {
    getSchema()
      .validate(data, { abortEarly: false })
      .then(() => {
        formRef.current?.setErrors({});
        console.log("data: ", data);
        setShowCodeNumbers(true);
      })
      .catch((err: any) => {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      });
  }

  return (
    <>
      <StyContainer>
        <StyWrapper>
          <StyPageName>
            <span>Esqueceu a Senha?</span>
          </StyPageName>
          <Form
            style={{ height: "100%", width: "80%" }}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            {!showCodeNumbers ? (
              <StyButtonWrapper>
                <span
                  style={{
                    marginBottom: "35px",
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  Digite o E-mail de cadastro e iremos encaminhar as instruções
                  para redefinição da sua senha
                </span>
                <InputSoft
                  id="send-pass-instruction"
                  name="sendPassInstruction"
                  formRef={formRef}
                  width="350px"
                  label="E-mail para recuparação de senha"
                  placeholder="E-mail de Recuperação"
                  inputIcon={<UserAccountIcon fill="rgb(135, 135, 135)" />}
                />
                <FillButton
                  id="send-pass-email"
                  type="submit"
                  width="150px"
                  title="Recuperar Senha"
                />
              </StyButtonWrapper>
            ) : (
              <StyCodeDisplay>
                <span
                  style={{
                    marginBottom: "35px",
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  Digite os 6 números que encaminhamos para o seu E-mail para
                  redefinir a sua senha
                </span>
                <InputCodeValidate
                  id="validate-email"
                  name="validateEmail"
                  onlyNumber={true}
                  formRef={formRef}
                  numberOfChildren={6}
                />
                <FillButton
                  id="validate-code-pass"
                  type="submit"
                  width="150px"
                  title="Validar"
                />
              </StyCodeDisplay>
            )}
            <StyLine />
            <StyButtonsContent>
              <span>Voltar para</span>
              <UnderlineButton
                id="back-login"
                type="button"
                action={() => navigate("/login")}
                title="Login"
              />
            </StyButtonsContent>
          </Form>
        </StyWrapper>
      </StyContainer>
    </>
  );
};

export default EZClinikForgotPassword;
