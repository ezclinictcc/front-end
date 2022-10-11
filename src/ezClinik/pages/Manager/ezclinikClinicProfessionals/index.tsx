import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FillButton } from "../../../Components/Buttons/FillButton";
import InputSoft from "../../../Components/InputSoft";
import Text from "../../../Components/Text";
import useAsync from "../../../hooks/useAsync";
import {
  deleteUser,
  getClinicData,
  getUsersDataByIdClinic,
  insertUser,
} from "../../../services/controllers/identity-controller";
import { ToastContext } from "../../../store/toast";
import { Sizes } from "../../../ts/enum/componentSize";
import { CriticyType } from "../../../ts/enum/criticyType";
import currentTimeSalutation from "../../../utils/getCurrentTime";
import {
  StyBody,
  StyButtons,
  StyButtonSubmit,
  StyCentralize,
  StyContainer,
  StyFilters,
  StyHeader,
  StyInfoAccess,
  StyInfoAddress,
  StyNoData,
  StySeparatorLine,
  StySpinnerContent,
  StyTitle,
} from "./styles";
import * as yup from "yup";
import getValidationErros from "../../../utils/validateErrors";
import AsyncDataTable from "../../../Components/AsyncDataTable";
import NoFillButton from "../../../Components/Buttons/NoFillButton";
import SimpleInput from "../../../Components/SimpleInput";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../store/redux/user/userSlice";
import EditIcon from "../../../assets/icons/EditIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import { Spinner } from "../../../Components/Spinner";
import EmptyInfo from "../../../Components/EmptyInfo";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikClinicProfessionals: React.FC<{}> = () => {
  const { fireToast }: any = useContext(ToastContext);
  const loggedUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();
  const formRef = useRef<FormHandles & HTMLFormElement>(null);
  const [emailFilter, setEmailFilter] = useState<string>("");
  const [clinicId, setClinicId] = useState<string>("");
  const [selectedUsersId, setSelectedUsersId] = useState<string[]>([]);

  const { fetch: delelteUserRequest, pending: delelteUserLoad } = useAsync({
    promiseFn: deleteUser,
    onData: (_data) => {
      fireToast({
        criticy: CriticyType.success,
        message: "Profissional excluído com sucesso.",
      });
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Erro ao excluir o profissional.",
      });
    },
  });

  const { fetch: getClinic, pending: getClinicLoad } = useAsync({
    promiseFn: getClinicData,
    onData: (data) => {
      if (data.length === 1) {
        setClinicId(String(data[0].id));
      }
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message:
          "Não foi possível carregar a clínica para o Profissional. Atualize a página.",
      });
    },
  });

  function handleNotImplemented() {
    fireToast({
      criticy: CriticyType.info,
      message: "Functionalidade ainda não implementada.",
    });
  }

  useEffect(() => {
    getClinic(loggedUser.tokenDecode.idUser);
  }, []);

  function buttonsActions() {
    return (
      <StyButtons>
        {selectedUsersId.length === 1 && (
          <>
            <FillButton
              id="update-user-id"
              title="Editar"
              width="150px"
              height="40px"
              action={() =>
                navigate(`/clinic-professionals/update/${selectedUsersId[0]}`)
              }
              icon={<EditIcon fill="#fff" />}
            />
            <StySeparatorLine />
            <NoFillButton
              id="delete-user-id"
              title="Excluir"
              width="150px"
              height="40px"
              action={() => {
                delelteUserRequest(selectedUsersId[0]);
                // setOpenModalConfirm(true);
                // setActionName("delete");
              }}
              icon={<TrashIcon fill="rgb(0,185,156)" />}
              borderColor="rgb(0,185,156)"
              color="rgb(0,185,156)"
            />
          </>
        )}
      </StyButtons>
    );
  }

  return (
    <StyContainer>
      <StyHeader>
        <StyTitle>
          <Text fontWeight="600" size="24px" value="Profissionais da Clínica" />
        </StyTitle>
      </StyHeader>
      <StyBody>
        {clinicId && !getClinicLoad && (
          <>
            <StyFilters>
              <SimpleInput
                id="input-professional-id"
                title="Pesquisar"
                placeholder="E-mail do Profissional"
                width="350px"
                handleChange={(dataValue: string) => handleNotImplemented()}
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
              promiseFn={getUsersDataByIdClinic}
              //   onChange={(user: any) => handleSelectedUsers(user)}
              //   onRowClick={(userData: any) => openModalByUserId(userData)}
              onChangeId={(usersId: any) => setSelectedUsersId(usersId)}
              headers={["Nome", "E-mail"]}
              columns={["name", "email"]}
              customWidth={["3%", "47%", "50%"]}
              initialOrdenate="name"
              id="Basic-Table-User"
              rowKey="id"
              disableKey="na_status"
              disableKeyValue="Inativo"
              paramsFilter={clinicId}
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
              buttonsActions={buttonsActions}
              reloadTable={delelteUserLoad}
              loading={delelteUserLoad}
            />
          </>
        )}
        {!getClinicLoad && !clinicId && (
          <EmptyInfo>
            <StyNoData>
              <Text
                size="20px"
                fontWeight="600"
                value="Você ainda não criou a sua clínica"
              />
              <NoFillButton
                id="add-clinic-id"
                title="Clique para criar"
                action={() => navigate("/my-clinic")}
                width="180px"
                height="40px"
                borderColor="rgb(0,185,156)"
                color="rgb(0,185,156)"
              />
            </StyNoData>
          </EmptyInfo>
        )}
        {getClinicLoad && (
          <StySpinnerContent>
            <Spinner size={Sizes.xl} />
          </StySpinnerContent>
        )}
      </StyBody>
    </StyContainer>
  );
};

export default EZClinikClinicProfessionals;
