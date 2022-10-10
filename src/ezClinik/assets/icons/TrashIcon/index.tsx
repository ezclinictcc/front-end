import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
  fillLid?: string;
  fillCatcher?: string;
  fillTrash?: string;
}

export const TrashIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
  fillLid,
  fillCatcher,
  fillTrash,
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
        <clipPath id="trash-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(329 117)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#trash-icon-clip)" transform="translate(-329 -117)">
        <g transform="translate(332.164 117.002)">
          <path
            fill={fillLid ? fillLid : fill}
            d="M22.6,6.306H1.074C.477,6.306,0,5.63,0,4.794S.477,3.262,1.074,3.262H22.6c.6,0,1.074.676,1.074,1.532S23.175,6.306,22.6,6.306Z"
          />
          <path
            fill={fillTrash ? fillTrash : fill}
            d="M2.148,8.454v19.4A2.148,2.148,0,0,0,4.3,30H19.356A2.148,2.148,0,0,0,21.5,27.85h0V8.454ZM7.539,24.249a.975.975,0,0,1-1.094.835,1,1,0,0,1-1.074-.835V14.3a1,1,0,0,1,1.074-.855,1.015,1.015,0,0,1,1.094.855Zm5.371,0a1,1,0,0,1-1.074.835,1,1,0,0,1-1.074-.835V14.3a.995.995,0,0,1,1.174-.955,1,1,0,0,1,1.074.855Zm5.371,0a.975.975,0,0,1-1.074.835,1,1,0,0,1-1.074-.835V14.3a1,1,0,0,1,1.074-.855.975.975,0,0,1,1.074.855Z"
          />
          <path
            fill={fillCatcher ? fillCatcher : fillLid ? fillLid : fill}
            d="M9.946,0h3.979a1.81,1.81,0,0,1,1.81,1.81V4.4H8.057V1.81A1.81,1.81,0,0,1,9.946,0Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default TrashIcon;
