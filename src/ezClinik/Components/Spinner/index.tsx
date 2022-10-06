import React from "react";
import { Sizes } from "../../ts/enum/componentSize";
import {
  StyContainer,
  StyPageCircleContainer,
  StyOneSpinContainer,
  StyTwoSpinContainer,
  StyPageWrapperContainer,
} from "./styles";

interface IProps {
  size: Sizes;
}

const getFontBySize = (size: keyof typeof Sizes): number =>
  ({
    xxs: 5,
    lb: 10,
    xs: 20,
    sm: 30,
    md: 40,
    lg: 50,
    xl: 80,
  }[size]);

/**
 * @description CircleSpinner Component.
 * @param {number} size Spinner size.
 */
export const CircleSpinner: React.FC<IProps> = ({ size }) => {
  return <StyContainer size={getFontBySize(size)} />;
};

/**
 * @description PageCircleSpinner Component.
 * @param {number} size Spinner size.
 */
export const PageCircleSpinner: React.FC<IProps> = ({ size }) => {
  return (
    <StyPageCircleContainer>
      <StyPageWrapperContainer size={getFontBySize(size)}>
        <StyOneSpinContainer size={getFontBySize(size)} />
        <StyTwoSpinContainer size={getFontBySize(size)} />
      </StyPageWrapperContainer>
    </StyPageCircleContainer>
  );
};

/**
 * @description PageCircleSpinner Component.
 * @param {number} size Spinner size.
 */
export const Spinner: React.FC<IProps> = ({ size }) => {
  return (
    <StyPageWrapperContainer size={getFontBySize(size)}>
      <StyOneSpinContainer size={getFontBySize(size)} />
      <StyTwoSpinContainer size={getFontBySize(size)} />
    </StyPageWrapperContainer>
  );
};

export default CircleSpinner;
