import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const InfoIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <defs>
        <clipPath id="hst-info-icon-clip">
          <path
            fill="none"
            stroke={fill}
            d="M0,0H30V30H0Z"
            transform="translate(167 452)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#hst-info-icon-clip)" transform="translate(-167 -452)">
        <g transform="translate(167 452)">
          <path
            fill={fill}
            d="M15,7.51a1.873,1.873,0,1,0,1.873,1.873A1.873,1.873,0,0,0,15,7.51Zm0,5.618A1.873,1.873,0,0,0,13.127,15v5.637a1.873,1.873,0,0,0,3.745,0V15A1.873,1.873,0,0,0,15,13.127ZM15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm0,26.793A11.793,11.793,0,1,1,26.793,15,11.793,11.793,0,0,1,15,26.793Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default InfoIcon;
