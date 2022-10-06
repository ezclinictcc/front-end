import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ResizeWindowContext } from "../../store/resize";
import PublicContent from "./PublicContent";
import PublicHeader from "./PublicHeader";
import { StyContainer } from "./styles";

interface IProps {
  children?: React.ReactNode;
}

/**
 * @description Join Header, Menu, Content and Footer.
 * @param children Page to Show.
 * @returns CD Template.
 */
export const PublicTemplate: React.FC<IProps> = () => {
  const { clientWidth, clientHeight }: any = useContext(ResizeWindowContext);

  return (
    <StyContainer width={clientWidth} height={clientHeight}>
      <PublicHeader />
      <PublicContent children={<Outlet />} />
    </StyContainer>
  );
};

export default PublicTemplate;
