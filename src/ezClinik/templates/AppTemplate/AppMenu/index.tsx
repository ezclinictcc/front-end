import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRouteNavigator } from "../../../config/privateMenu";
import {
  selectIsUserLogged,
  selectLoggedUser,
} from "../../../store/redux/user/userSlice";
import { verifyCurrentPathName } from "../../../utils/changeRoute";
import { StyContainer, StyMenuButton, StyMenuItems } from "./styles";

/**
 * @description Create CD Menu System.
 * @returns CD Menu System.
 */
export const CdMenu: React.FC<{}> = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector(selectLoggedUser);
  const isUserLogged = useSelector(selectIsUserLogged);

  return (
    <>
      <StyContainer>
        {isUserLogged && loggedUser && (
          <StyMenuItems>
            {PrivateRouteNavigator.map((path, index) => {
              path.currentPage = false;
              if (path.path === verifyCurrentPathName()) {
                path.currentPage = true;
              }
              return (
                path.menuAccess &&
                loggedUser.naUserType &&
                path.role.includes(loggedUser.naUserType) && (
                  <StyMenuButton
                    key={index}
                    currentPage={path.currentPage}
                    onClick={() =>
                      path.path !== verifyCurrentPathName() &&
                      navigate(path.path)
                    }
                  >
                    {path.name}
                  </StyMenuButton>
                )
              );
            })}
          </StyMenuItems>
        )}
      </StyContainer>
    </>
  );
};

export default CdMenu;
