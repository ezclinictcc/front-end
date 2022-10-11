import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  getClinicData,
  getUsersDataById,
  getUsersDataByIdAndClinic,
  insertUser,
  updateUser,
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
  StySpinnerContent,
  StyTitle,
} from "./styles";
import * as yup from "yup";
import getValidationErros from "../../../utils/validateErrors";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../store/redux/user/userSlice";
import { Spinner } from "../../../Components/Spinner";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikUpdateProfessionals: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const loggedUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [clinicId, setClinicId] = useState<string>("");
  const [initialValue, setInitialValue] = useState<any>();

  const { fetch: updateUserRequest, pending: updateUserLoad } = useAsync({
    promiseFn: updateUser,
    onData: (_data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Profissional atualizado com sucesso.",
      });
      navigate("/clinic-professionals");
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao atualizar o profissional.",
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

  const { fetch: doGetUserUpdate, pending: doGetUserUpdateLoad } = useAsync({
    promiseFn: getUsersDataByIdAndClinic,
    onData: (data) => {
      if (data?.length === 1) {
        setInitialValue(data[0]);
      } else {
        fireToast({
          criticy: CriticyType.error,
          message: "Não foi possível carregar os dados do profissional.",
        });
      }
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Não foi possível carregar os dados do profissional.",
      });
    },
  });

  useEffect(() => {
    getClinic(loggedUser.tokenDecode.idUser);
  }, []);

  useEffect(() => {
    if (clinicId) {
      doGetUserUpdate({ idUser: id, idClinic: clinicId });
    }
  }, [clinicId]);

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
        if (id && initialValue?.id) {
          data.id = initialValue?.id;
          data.idClinic = initialValue?.idClinic;
          data.idProfile = initialValue?.idProfile;
          data.idUserType = initialValue?.idUserType;
          data.number = Number(data.number);
          updateUserRequest(data);
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
        {!getClinicLoad && !updateUserLoad && !doGetUserUpdateLoad && (
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: updateUserLoad ? "none" : "flex",
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
                    initialValue={initialValue?.name}
                  />
                  <InputSoft
                    id="email"
                    name="email"
                    formRef={formRef}
                    width="400px"
                    label="E-mail"
                    placeholder="E-mail de Acesso"
                    initialValue={initialValue?.email}
                  />
                  <InputSoft
                    id="password"
                    name="password"
                    formRef={formRef}
                    width="400px"
                    label="Senha"
                    placeholder="Crie uma Senha"
                    hidden
                    initialValue={initialValue?.password}
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
                        initialValue={initialValue?.country}
                      />
                      <InputSoft
                        id="state"
                        name="state"
                        formRef={formRef}
                        width="350px"
                        label="Estado"
                        initialValue={initialValue?.state}
                      />
                      <InputSoft
                        id="city"
                        name="city"
                        formRef={formRef}
                        width="350px"
                        label="Cidade"
                        initialValue={initialValue?.city}
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
                      initialValue={initialValue?.district}
                    />
                    <InputSoft
                      id="number"
                      name="number"
                      formRef={formRef}
                      width="350px"
                      label="Número"
                      onlyNumbers
                      initialValue={initialValue?.number}
                    />
                    <InputSoft
                      id="cep"
                      name="cep"
                      formRef={formRef}
                      width="350px"
                      label="CEP"
                      initialValue={initialValue?.cep}
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
                title="Atualizar"
                height="40px"
              />
            </StyButtonSubmit>
          </Form>
        )}
        {(getClinicLoad || updateUserLoad || doGetUserUpdateLoad) && (
          <StySpinnerContent>
            <Spinner size={Sizes.xl} />
          </StySpinnerContent>
        )}
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikUpdateProfessionals;
