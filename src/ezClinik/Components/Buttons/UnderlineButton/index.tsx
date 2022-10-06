import React from "react";

import { StyContainer } from "./styles";

interface Props {
  action?: () => void;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  icon?: React.ReactNode;
  disable?: boolean;
  id: string;
  fitText?: boolean;
  hasFontWeight?: boolean;
}

export const UnderlineButton: React.FC<Props> = ({
  id,
  action = () => {},
  type = "button",
  height = "",
  width,
  title = "",
  icon,
  disable = false,
  fitText = true,
  hasFontWeight = false,
  ...rest
}) => {
  return (
    <StyContainer
      width={width}
      height={height}
      disable={disable}
      fitText={fitText}
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
