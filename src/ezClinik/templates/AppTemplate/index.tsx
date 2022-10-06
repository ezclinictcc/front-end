import React from "react";
import { Outlet } from "react-router-dom";
import CdContent from "./AppContent";
import CdFooter from "./AppFooter";
import CdHeader from "./AppHeader";
import CdMenu from "./AppMenu";

interface IProps {
  children?: React.ReactNode;
}

/**
 * @description Join Header, Menu, Content and Footer.
 * @param children Page to Show.
 * @returns CD Template.
 */
export const AppTemplate: React.FC<IProps> = () => {
  return (
    <>
      <CdHeader />
      <CdMenu />
      <CdContent children={<Outlet />} />
      <CdFooter />
    </>
  );
};

export default AppTemplate;
