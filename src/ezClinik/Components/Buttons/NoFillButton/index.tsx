import React from "react";
import { StyButton, StyText } from "./styles";

// import { Container } from './styles';

interface IProps {
  id: string;
  title: string;
  isDisabled?: boolean;
  action: Function;
  borderColor?: string;
  borderRadius?: string;
  disable?: boolean;
  height?: string;
  width?: string;
  hasBorder?: boolean;
  icon?: JSX.Element;
  color?: string;
  size?: string;
}

const NoFillButton: React.FC<IProps> = ({
  id,
  title,
  height = "",
  width,
  disable = false,
  borderRadius,
  isDisabled = false,
  action,
  borderColor = "#000000",
  hasBorder = true,
  icon,
  color = "#000",
  size = "16px",
}) => {
  return (
    <StyButton
      onClick={() => action()}
      width={width}
      height={height}
      disable={disable}
      borderRadius={borderRadius}
      borderColor={borderColor}
      hasBorder={hasBorder}
    >
      {icon && icon}
      <StyText color={color} size={size}>
        {title}
      </StyText>
    </StyButton>
  );
};

export default NoFillButton;
