import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as yup from "yup";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyButtonsContent,
  StyButtonWrapper,
  StyContainer,
  StyInputContent,
  StyInputWrapper,
  StyLine,
  StyPageName,
  StySpinnerContent,
  StyWrapper,
} from "./styles";
import { TransitionContext } from "../../../store/transitionLogin";
import { ToastContext } from "../../../store/toast";
import getValidationErros from "../../../utils/validateErrors";
import { CriticyType } from "../../../ts/enum/criticyType";
import InputSoft from "../../../Components/InputSoft";
import UserAccountIcon from "../../../assets/icons/UserAccountIcon";
import PadLockIcon from "../../../assets/icons/PadLockIcon";
import { FillButton } from "../../../Components/Buttons/FillButton";
import { UnderlineButton } from "../../../Components/Buttons/UnderlineButton";
import useAsync from "../../../hooks/useAsync";
import { createLogin } from "../../../services/controllers/gateway-controllet";
import { Spinner } from "../../../Components/Spinner";
import { Sizes } from "../../../ts/enum/componentSize";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../../store/redux/user/userSlice";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikLogin: React.FC<{}> = () => {
  const { setHasTransition, setNavigateTo }: any =
    useContext(TransitionContext);

  const { fireToast }: any = useContext(ToastContext);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fetch: doLogin, pending: doLoginLoad } = useAsync({
    promiseFn: createLogin,
    onData: (data) => {
      dispatch(userLogIn(data));
      fireToast({
        criticy: CriticyType.success,
        message: "Login Realizado com Sucesso.",
      });
      setHasTransition(true);
      setNavigateTo("./home");
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
      email: yup
        .string()
        .email("Digite um E-mail Válido")
        .required("Digite o E-mail de Acesso"),
      password: yup.string().required("Digite a Senha de Acesso"),
    });
  }

  async function handleSubmit(data: any) {
    getSchema()
      .validate(data, { abortEarly: false })
      .then(() => {
        doLogin(data);
        formRef.current?.setErrors({});
      })
      .catch((err: any) => {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          fireToast({
            criticy: CriticyType.error,
            message: "Teste Erro",
          });
        }
      });
  }

  return (
    <>
      <StyContainer>
        <StyWrapper>
          <StyPageName>
            <span>Login</span>
          </StyPageName>
          {!doLoginLoad && (
            <Form
              style={{ height: "100%", width: "80%" }}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <StyInputContent>
                <StyInputWrapper>
                  <InputSoft
                    id="email"
                    name="email"
                    formRef={formRef}
                    width="350px"
                    label="E-mail"
                    placeholder="E-mail de Acesso"
                    inputIcon={<UserAccountIcon fill="rgb(135, 135, 135)" />}
                  />
                  <InputSoft
                    id="password"
                    name="password"
                    formRef={formRef}
                    width="350px"
                    label="Senha"
                    hidden
                    placeholder="Senha de Acesso"
                    inputIcon={<PadLockIcon fill="rgb(135, 135, 135)" />}
                  />
                </StyInputWrapper>
                <StyButtonWrapper>
                  <FillButton
                    id="login"
                    type="submit"
                    width="150px"
                    title="Entrar"
                  />
                  <UnderlineButton
                    id="forgot-password"
                    type="button"
                    action={() => navigate("/forgot-password")}
                    title="Esqueci minha senha"
                  />
                </StyButtonWrapper>
              </StyInputContent>
              <StyLine />
              <StyButtonsContent>
                <span>Novo por aqui? Crie um </span>
                <UnderlineButton
                  id="new-user"
                  type="button"
                  action={() => navigate("/new-user")}
                  title="Novo Cadastro"
                />
              </StyButtonsContent>
            </Form>
          )}
          {doLoginLoad && (
            <StySpinnerContent>
              <Spinner size={Sizes.xl} />
            </StySpinnerContent>
          )}
        </StyWrapper>
      </StyContainer>
    </>
  );
};

export default EZClinikLogin;
