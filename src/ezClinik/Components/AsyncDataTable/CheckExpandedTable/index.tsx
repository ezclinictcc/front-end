import React from "react";
import {
  StyCheckOptionsContainer,
  StyCheckBoxContainer,
  StyButtonsContainer,
} from "./styles";
import { Sizes } from "../../../ts/enum/componentSize";
import Text from "../../Text";
import CheckboxOnIcon from "../../../assets/icons/CheckBoxOnIcon";

interface IProps {
  checkOpen?: boolean;
  label: string;
  buttonsActions: Function;
}

/**
 * @description div expanded after checkBox check
 * @param {boolean} checkOpen
 * @param {string} label
 * @param {Function} buttonsActions
 */
export const CheckExpandedTable: React.FC<IProps> = ({
  checkOpen = false,
  label,
  buttonsActions = () => null,
}) => {
  return (
    <StyCheckOptionsContainer checkOpen={checkOpen}>
      <StyCheckBoxContainer>
        <CheckboxOnIcon fill="rgb(0,185,156)" />
        <Text size="16px" value={label} />
      </StyCheckBoxContainer>
      <StyButtonsContainer>{buttonsActions()}</StyButtonsContainer>
    </StyCheckOptionsContainer>
  );
};

export default CheckExpandedTable;
