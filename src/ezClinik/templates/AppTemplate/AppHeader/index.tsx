import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import appLogo from "../../../assets/logo.png";
import useAsync from "../../../hooks/useAsync";
import { doLogout } from "../../../services/controllers/gateway-controllet";
import { userLogOut } from "../../../store/redux/user/userSlice";
import { ToastContext } from "../../../store/toast";
import { TransitionContext } from "../../../store/transitionLogin";
import { CriticyType } from "../../../ts/enum/criticyType";
import { StyContainer, StyLabelText, StyUserInfo } from "./styles";

/**
 * @description Create CD Header System.
 * @returns CD Header System.
 */
export const AppHeader: React.FC<{}> = () => {
  const { setHasTransition, setActionName }: any =
    useContext(TransitionContext);
  const dispatch = useDispatch();
  const { fireToast }: any = useContext(ToastContext);

  const { fetch: doLogoutRequest, pending: doLogoutLoad } = useAsync({
    promiseFn: doLogout,
    onData: (data) => {
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
          <button
            onClick={() => {
              doLogoutRequest();
            }}
          >
            <LogoutIcon width={25} height={25} fill="#FFFFFF" />
          </button>
        </StyUserInfo>
      </StyContainer>
    </>
  );
};

export default AppHeader;
