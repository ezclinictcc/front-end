import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  getClinicData,
  insertClinic,
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
import SelectBox from "../../../Components/SelectBox";
import { clinicSpeciality } from "../../../utils/clinicSpeciality";
import { selectLoggedUser } from "../../../store/redux/user/userSlice";
import { useSelector } from "react-redux";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikMyClinic: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const loggedUser = useSelector(selectLoggedUser);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);

  const { fetch: insertClinicRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertClinic,
    onData: (data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Usuário criado com sucesso.",
      });
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao criar o usuário.",
      });
    },
  });

  const { fetch: getClinicRequest, pending: getClinicLoad } = useAsync({
    promiseFn: getClinicData,
    onData: (data) => {
      // fireToast({
      //   criticy: CriticyType.success,
      //   message: "Usuário criado com sucesso.",
      // });
    },
    onError: (_error: any) => {
      // fireToast({
      //   criticy: CriticyType.error,
      //   message: "Erro ao criar o usuário.",
      // });
    },
  });

  useEffect(() => {
    getClinicRequest(loggedUser.id);
  }, [loggedUser]);

  function getSchema() {
    return yup.object().shape({
      name: yup.string().required("Digite seu Nome"),
      clinicSpecialty: yup
        .string()
        .required("Selecione os Serviços Disponíveis"),
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
        data.number = Number(data.number);
        data.idUser = loggedUser.tokenDecode.idUser;
        insertClinicRequest(data);
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
          <Text fontWeight="600" size="24px" value="Minha Clínica" />
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
              <Text size="18px" fontWeight="600" value="Sobre a Clínica" />
              <StyCentralize>
                <InputSoft
                  id="name"
                  name="name"
                  formRef={formRef}
                  width="400px"
                  label="Nome"
                  placeholder="Nome do Usuário"
                />
                <SelectBox
                  id="clinicSpecialty-selectbox"
                  name="clinicSpecialty"
                  title="Serviços Disponíveis"
                  placeHolder="Selecione os Serviços"
                  dataOptions={clinicSpeciality}
                  formRef={formRef}
                  isCheckBox
                  hasFilter={false}
                  hasMargin={false}
                  hasReset
                  width="400px"
                />
              </StyCentralize>
            </StyInfoAccess>
            <StyInfoAddress>
              <Text size="18px" fontWeight="600" value="Endereço da Clínica" />
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

export default EZClinikMyClinic;
