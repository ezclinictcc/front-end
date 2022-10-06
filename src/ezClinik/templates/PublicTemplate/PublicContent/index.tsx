import React from "react";
import { StyContainer, StyWrapper } from "./styles";

interface IProps {
  children?: React.ReactNode;
}

/**
 * @description Create CD Content System.
 * @param children Page to Show.
 * @returns CD Content System.
 */
export const PublicContent: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <StyContainer id="cd-content-id">
        <StyWrapper id="cd-wrapper-id">{children}</StyWrapper>
      </StyContainer>
    </>
  );
};

export default PublicContent;
