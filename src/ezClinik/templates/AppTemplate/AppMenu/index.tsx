import React from "react";
import { useNavigate } from "react-router-dom";
import { menuNavigator } from "../../../config/menu";
import { verifyCurrentPathName } from "../../../utils/changeRoute";
import { StyContainer, StyMenuButton, StyMenuItems } from "./styles";

/**
 * @description Create CD Menu System.
 * @returns CD Menu System.
 */
export const CdMenu: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyContainer>
        <StyMenuItems>
          {menuNavigator.map((path, index) => {
            path.currentPage = false;
            if (path.path === verifyCurrentPathName()) {
              path.currentPage = true;
            }
            return (
              path.menuAccess && (
                <StyMenuButton
                  key={index}
                  currentPage={path.currentPage}
                  onClick={() =>
                    path.path !== verifyCurrentPathName() && navigate(path.path)
                  }
                >
                  {path.name}
                </StyMenuButton>
              )
            );
          })}
        </StyMenuItems>
      </StyContainer>
    </>
  );
};

export default CdMenu;
