import React from "react";
import CheckboxIndeterminateIcon from "../../assets/icons/CheckBoxIndeterminateIcon";
import CheckboxOffIcon from "../../assets/icons/CheckBoxOffIcon";
import CheckboxOnIcon from "../../assets/icons/CheckBoxOnIcon";
import { StyCheckBoxWrapper } from "./styles";

interface IMultiStateCheckBox {
  id: string;
  isSelected: boolean;
  isIndeterminated: boolean;
  onClick?: any;
  disable?: boolean;
}
const MultiStateCheckBox: React.FC<IMultiStateCheckBox> = ({
  id,
  isSelected,
  isIndeterminated,
  onClick,
  disable = false,
}) => {
  return (
    <StyCheckBoxWrapper
      id={`${id}-multi-check-id`}
      onClick={disable ? () => null : onClick}
      disable={disable}
    >
      {isIndeterminated ? (
        <CheckboxIndeterminateIcon
          fill="#000"
          width="15px"
          height="15px"
          fillBorder="#000"
          fillLine="#000"
        />
      ) : isSelected ? (
        <CheckboxOnIcon fill="rgb(0, 96, 177)" width="15px" height="15px" />
      ) : (
        <CheckboxOffIcon
          fill="#fff"
          width="15px"
          height="15px"
          fillBorder="rgb(128,128,128)"
        />
      )}
    </StyCheckBoxWrapper>
  );
};

export default MultiStateCheckBox;
