import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
  fillLine?: string;
}

export const EditIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
  fillLine,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <defs>
        <clipPath id="edit-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(679 67)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#edit-icon-clip)" transform="translate(-679 -67)">
        <g transform="translate(679 67.657)">
          <path
            fill={fill}
            d="M.99,22.61a1.067,1.067,0,0,1-.7-.286A1.1,1.1,0,0,1,0,21.6V16.952a1.067,1.067,0,0,1,.286-.686L12.19,4.5l6.038,6.038L6.362,22.286a.971.971,0,0,1-.7.286ZM19.829,8.952h0L13.79,2.914,16.438.286a1.048,1.048,0,0,1,.7-.286.971.971,0,0,1,.7.286l4.629,4.629a1.01,1.01,0,0,1,0,1.41h0Z"
          />
          <path
            fill={fillLine ? fillLine : fill}
            d="M28.933,25.467H1.067c-.571,0-1.029.743-1.029,1.6s.476,1.619,1.029,1.619H28.952c.59,0,1.048-.762,1.048-1.619S29.524,25.467,28.933,25.467Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default EditIcon;
