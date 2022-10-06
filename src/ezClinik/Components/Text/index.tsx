import React from "react";
import { StyContainer, StyIcon } from "./styles";

interface Props {
  id?: string;
  value?: string;
  size: string;
  hasMargin?: boolean;
  bold?: boolean;
  fontWeight?: "regular" | "600" | "bold";
  icon?: JSX.Element;
}

/**
 * @description  Text Component.
 * @param {string} value text value.
 * @param {number} size text size.
 * @param {boolean} hasMargin text left margin.
 * @param {boolean} bold text bold condition.
 * @param {JSX.Element} icon text icon attribute.
 * @param {"regular" | "600" | "bold"} fontWeight text weight style.
 * @param {string} id text id.
 */
const Text: React.FC<Props> = ({
  id = "",
  value = "",
  size,
  hasMargin = false,
  bold = false,
  fontWeight = "regular",
  icon,
}) => {
  return (
    <StyContainer
      id={id}
      data-testid={id}
      size={size}
      hasMargin={hasMargin}
      fontWeight={bold ? "bold" : fontWeight}
      icon={icon ? true : false}
    >
      {value}
      {icon && <StyIcon>{icon}</StyIcon>}
    </StyContainer>
  );
};

export default Text;
