import React from "react";
import Text from "../../Components/Text";
import currentTimeSalutation from "../../utils/getCurrentTime";
import { StyBody, StyContainer, StyHeader, StyTitle } from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikHome: React.FC<{}> = () => {
  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text
              fontWeight="600"
              size="24px"
              value={`${currentTimeSalutation()}, User`}
            />
          </StyTitle>
        </StyHeader>
        <StyBody></StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikHome;
