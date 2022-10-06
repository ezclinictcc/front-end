import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const SuccessIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
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
        <clipPath id="hst-success-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(329 167)"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#hst-success-icon-clip)"
        transform="translate(-329 -167)"
      >
        <g transform="translate(329.08 167)">
          <path
            fill={fill}
            d="M14.98,0A15,15,0,1,0,29.92,14.98,15,15,0,0,0,14.98,0ZM12.985,23.337,5.7,16.815l2.274-2.473,4.648,4.189L21.283,7.979l2.653,1.995Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SuccessIcon;
