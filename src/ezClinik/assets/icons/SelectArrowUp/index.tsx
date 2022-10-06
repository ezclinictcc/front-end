import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const SelectArrowUp: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <g id="ic_arrow_drop_down_1" transform="translate(20 20) rotate(180)">
        <rect
          id="rectangle"
          width="20"
          height="20"
          transform="translate(0 0)"
          fill="none"
        />
        <path
          id="path"
          d="M7,10l4.23,4.23L15.459,10Z"
          transform="translate(-1.23 -1.7)"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default SelectArrowUp;
