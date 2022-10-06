import React from "react";
import { StyContainer, StyLabelText } from "./styles";

/**
 * @description Create CD Footer System.
 * @returns CD Footer System.
 */
export const CdFooter: React.FC<{}> = () => {
  return (
    <>
      <StyContainer>
        <StyLabelText>
          Copyright © 2022 - EZClinik - All right reserved
        </StyLabelText>
      </StyContainer>
    </>
  );
};

export default CdFooter;
