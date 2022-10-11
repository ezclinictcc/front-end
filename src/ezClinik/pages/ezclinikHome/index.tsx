import React from "react";
import { useSelector } from "react-redux";
import Text from "../../Components/Text";
import { selectLoggedUser } from "../../store/redux/user/userSlice";
import currentTimeSalutation from "../../utils/getCurrentTime";
import { StyBody, StyContainer, StyHeader, StyTitle } from "./styles";

/**
 * @description Home Page.
 * @returns EZClinik Home.
 */
export const EZClinikHome: React.FC<{}> = () => {
  const loggedUser = useSelector(selectLoggedUser);

  return (
    <>
      <StyContainer>
        <StyHeader>
          <StyTitle>
            <Text
              fontWeight="600"
              size="24px"
              value={`${currentTimeSalutation()}, ${loggedUser.name}`}
            />
          </StyTitle>
        </StyHeader>
        <StyBody></StyBody>
      </StyContainer>
    </>
  );
};

export default EZClinikHome;
