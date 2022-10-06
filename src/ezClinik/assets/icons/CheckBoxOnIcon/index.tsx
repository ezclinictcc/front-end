import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill: string;
}

export const CheckboxOnIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2ZM10,17,5,12.192l1.4-1.346L10,14.308,17.6,7,19,8.346,10,17Z"
        transform="translate(-3 -3)"
      />
    </svg>
  );
};

export default CheckboxOnIcon;
