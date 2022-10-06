import React from "react";
import { StyContainer } from "./styles";

interface IProps {
  children: any;
}

/**
 */
export const EmptyInfo: React.FC<IProps> = ({ children }) => {
  return (
    <StyContainer>
      <>{children}</>
    </StyContainer>
  );
};

export default EmptyInfo;
