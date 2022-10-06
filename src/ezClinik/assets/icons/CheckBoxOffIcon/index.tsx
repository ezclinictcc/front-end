import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill: string;
  fillBorder: string;
}

export const CheckboxOffIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill,
  fillBorder,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <rect fill={fill} width="16" height="16" transform="translate(1 1.257)" />
      <path
        fill={fillBorder}
        fillRule="evenodd"
        d="M19,5V19H5V5Zm0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2Z"
        transform="translate(-3 -3)"
      />
    </svg>
  );
};

export default CheckboxOffIcon;
