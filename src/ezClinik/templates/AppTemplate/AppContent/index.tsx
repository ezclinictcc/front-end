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
export const CdContent: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <StyContainer id="ezclinik-content-id">
        <StyWrapper id="ezclinik-wrapper-id">{children}</StyWrapper>
      </StyContainer>
    </>
  );
};

export default CdContent;
