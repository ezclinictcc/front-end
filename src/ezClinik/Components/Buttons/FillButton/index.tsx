import React from "react";
import { StyContainer } from "./styles";

interface IProps {
  action?: () => void;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  icon?: JSX.Element;
  disable?: boolean;
  id: string;
  loading?: boolean;
  hasFontWeight?: boolean;
  borderRadius?: string;
}

export const FillButton: React.FC<IProps> = ({
  id,
  action = () => {},
  type = "button",
  height = "",
  width,
  title = "",
  icon,
  disable = false,
  loading = false,
  hasFontWeight = false,
  borderRadius,
  ...rest
}) => {
  return (
    <StyContainer
      width={width}
      height={height}
      disable={disable}
      borderRadius={borderRadius}
      id={`${id}-button-container-id`}
    >
      <button
        type={type}
        id={`${id}-button-id`}
        onClick={disable ? () => null : action}
        {...rest}
      >
        <>
          {icon && icon}
          <span>{title}</span>
        </>
      </button>
    </StyContainer>
  );
};
