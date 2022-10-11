import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  getClinicData,
  insertClinic,
  updateClinic,
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
  StySpinnerContent,
  StyTitle,
} from "./styles";
import * as yup from "yup";
import getValidationErros from "../../../utils/validateErrors";
import SelectBox from "../../../Components/SelectBox";
import { clinicSpeciality } from "../../../utils/clinicSpeciality";
import { selectLoggedUser } from "../../../store/redux/user/userSlice";
import { useSelector } from "react-redux";
import { Spinner } from "../../../Components/Spinner";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikMyClinic: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const loggedUser = useSelector(selectLoggedUser);
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [clinicInitialData, setClinicInitialData] = useState<any>();

  const { fetch: insertClinicRequest, pending: insertUserLoad } = useAsync({
    promiseFn: insertClinic,
    onData: (data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Clínica criada com sucesso.",
      });
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao criar clínica.",
      });
    },
  });

  const { fetch: updateClinicRequest, pending: updateUserLoad } = useAsync({
    promiseFn: updateClinic,
    onData: (data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Clínica atualizada com sucesso.",
      });
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao atualizar clínica.",
      });
    },
  });

  const { fetch: getClinicRequest, pending: getClinicLoad } = useAsync({
    promiseFn: getClinicData,
    onData: (data) => {
      if (data?.length === 1) {
        const clinicSpecialitySplit = data[0]?.clinicSpecialty.split(";");
        const initialValeuSpeciality: any = [];
        clinicSpeciality.forEach((speciality: any) => {
          if (clinicSpecialitySplit?.includes(speciality.value)) {
            initialValeuSpeciality.push(speciality);
          }
        });
        setClinicInitialData({
          id: data[0].id,
          name: data[0].name,
          clinicSpecialty: data[0].clinicSpecialty,
          formatClinicSpecialty: initialValeuSpeciality,
          country: data[0].country,
          state: data[0].state,
          city: data[0].city,
          district: data[0].district,
          number: data[0].number,
          cep: data[0].cep,
        });
      }
    },
    onError: (_error: any) => {},
  });

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
        if (clinicInitialData?.id) {
          data.id = clinicInitialData.id;
          updateClinicRequest(data);
        } else {
          insertClinicRequest(data);
        }
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

  useEffect(() => {
    getClinicRequest(loggedUser.tokenDecode.idUser);
  }, [loggedUser, !insertUserLoad, !updateUserLoad]);

  return (
    <StyContainer>
      <StyHeader>
        <StyTitle>
          <Text fontWeight="600" size="24px" value="Minha Clínica" />
        </StyTitle>
      </StyHeader>
      <StyBody>
        {!getClinicLoad && !updateUserLoad && !insertUserLoad && (
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
                    initialValue={clinicInitialData?.name}
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
                    initialValue={clinicInitialData?.formatClinicSpecialty}
                  />
                </StyCentralize>
              </StyInfoAccess>
              <StyInfoAddress>
                <Text
                  size="18px"
                  fontWeight="600"
                  value="Endereço da Clínica"
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
                        initialValue={clinicInitialData?.country}
                      />
                      <InputSoft
                        id="state"
                        name="state"
                        formRef={formRef}
                        width="350px"
                        label="Estado"
                        initialValue={clinicInitialData?.state}
                      />
                      <InputSoft
                        id="city"
                        name="city"
                        formRef={formRef}
                        width="350px"
                        label="Cidade"
                        initialValue={clinicInitialData?.city}
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
                      initialValue={clinicInitialData?.district}
                    />
                    <InputSoft
                      id="number"
                      name="number"
                      formRef={formRef}
                      width="350px"
                      label="Número"
                      onlyNumbers
                      initialValue={clinicInitialData?.number}
                    />
                    <InputSoft
                      id="cep"
                      name="cep"
                      formRef={formRef}
                      width="350px"
                      label="CEP"
                      initialValue={clinicInitialData?.cep}
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
                title={clinicInitialData?.id ? "Atualizar" : "Cadastrar"}
              />
            </StyButtonSubmit>
          </Form>
        )}
        {(getClinicLoad || updateUserLoad || insertUserLoad) && (
          <StySpinnerContent>
            <Spinner size={Sizes.xl} />
          </StySpinnerContent>
        )}
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikMyClinic;
