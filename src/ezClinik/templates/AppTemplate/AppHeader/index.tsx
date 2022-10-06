import React, { useContext } from "react";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import appLogo from "../../../assets/logo.png";
import { TransitionContext } from "../../../store/transitionLogin";
import { StyContainer, StyLabelText, StyUserInfo } from "./styles";

/**
 * @description Create CD Header System.
 * @returns CD Header System.
 */
export const AppHeader: React.FC<{}> = () => {
  const { setHasTransition, setNavigateTo }: any =
    useContext(TransitionContext);

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
              setHasTransition(true);
              setNavigateTo("./login");
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
