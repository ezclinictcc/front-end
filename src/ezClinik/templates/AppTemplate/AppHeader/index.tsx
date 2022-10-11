import React, { useContext } from "react";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import appLogo from "../../../assets/logo.png";
import { Spinner } from "../../../Components/Spinner";
import useAsync from "../../../hooks/useAsync";
import { doLogout } from "../../../services/controllers/gateway-controllet";
import { ToastContext } from "../../../store/toast";
import { TransitionContext } from "../../../store/transitionLogin";
import { Sizes } from "../../../ts/enum/componentSize";
import { CriticyType } from "../../../ts/enum/criticyType";
import { StyContainer, StyLabelText, StyUserInfo } from "./styles";

/**
 * @description Create CD Header System.
 * @returns CD Header System.
 */
export const AppHeader: React.FC<{}> = () => {
  const { setHasTransition, setActionName }: any =
    useContext(TransitionContext);
  const { fireToast }: any = useContext(ToastContext);

  const { fetch: doLogoutRequest, pending: doLogoutLoad } = useAsync({
    promiseFn: doLogout,
    onData: (_data) => {
      setHasTransition(true);
      setActionName("logout");
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Não foi possível realizar o logout.",
      });
    },
  });

  return (
    <>
      <StyContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              marginLeft: "40px",
              filter: "invert(1)",
            }}
            src={appLogo}
            alt="Logo da Aplicação EZClinik"
            width={40}
            height={40}
          />
          <StyLabelText>EZClinik</StyLabelText>
        </div>
        <StyUserInfo>
          {!doLogoutLoad ? (
            <button
              onClick={() => {
                doLogoutRequest();
              }}
            >
              <LogoutIcon width={25} height={25} fill="#FFFFFF" />
            </button>
          ) : (
            <div style={{ marginRight: "10px" }}>
              <Spinner size={Sizes.sm} color="#FFFFFF" />
            </div>
          )}
        </StyUserInfo>
      </StyContainer>
    </>
  );
};

export default AppHeader;
