import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as yup from "yup";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import jwt_decode from "jwt-decode";
import { getUsersDataById } from "../../../services/controllers/identity-controller";
import Text from "../../../Components/Text";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikLogin: React.FC<{}> = () => {
  const { setHasTransition, setActionFunction, setActionName }: any =
    useContext(TransitionContext);

  const { fireToast }: any = useContext(ToastContext);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [userLogged, setUserLoggeed] = useState<any>();
  const [welcomeUser, setWelcomeUser] = useState<string>("");
  const navigate = useNavigate();

  const { fetch: goGetUserAfterLogin, pending: goGetUserAfterLoginLoad } =
    useAsync({
      promiseFn: getUsersDataById,
      onData: (data) => {
        if (userLogged && data?.length === 1) {
          setActionFunction({
            id: userLogged.id,
            token: userLogged.token,
            email: data[0].email,
            idUser: data[0].id,
            idProfile: data[0].idProfile,
            idUserType: data[0].idUserType,
            name: data[0].name,
          });
          setWelcomeUser(data[0].name);
          setActionName("login");
          setHasTransition(true);
          fireToast({
            criticy: CriticyType.success,
            message: "Login Realizado com Sucesso.",
          });
        } else {
          fireToast({
            criticy: CriticyType.error,
            message: "E-mail ou senha inválidos.",
          });
        }
      },
      onError: (_error: any) => {
        fireToast({
          criticy: CriticyType.error,
          message: "Erro ao realizar login.",
        });
      },
    });

  const { fetch: doLogin, pending: doLoginLoad } = useAsync({
    promiseFn: createLogin,
    onData: (data) => {
      setUserLoggeed(data);
      const userTokenDecode: any = jwt_decode(data.token);
      if (userTokenDecode.idUser) {
        goGetUserAfterLogin(userTokenDecode.idUser);
      }
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "E-mail ou senha inválidos.",
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
            message: "Digite os campos solicitados.",
          });
        }
      });
  }

  useEffect(() => {
    const LogoutSession = sessionStorage.getItem("token_expired");
    if (LogoutSession) {
      fireToast({
        criticy: CriticyType.warning,
        message: "Sua sessão expirou. Realize o login novamente.",
      });
      sessionStorage.removeItem("token_expired");
    }
  }, []);

  return (
    <>
      <StyContainer>
        <StyWrapper>
          {!doLoginLoad && !goGetUserAfterLoginLoad && !welcomeUser && (
            <>
              <StyPageName>
                <span>Login</span>
              </StyPageName>
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
            </>
          )}
          {(doLoginLoad || goGetUserAfterLoginLoad) && (
            <StySpinnerContent>
              <Spinner size={Sizes.xl} />
            </StySpinnerContent>
          )}
          {welcomeUser && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text size="20px" value="Bem Vindo," />
              <Text
                size="20px"
                hasMargin
                fontWeight="600"
                value={welcomeUser}
              />
            </div>
          )}
        </StyWrapper>
      </StyContainer>
    </>
  );
};

export default EZClinikLogin;
