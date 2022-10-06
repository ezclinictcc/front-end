import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const WarningIcon: React.FC<Props> = ({
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
        <clipPath id="hst-warning-icon-clip">
          <path
            fill="none"
            stroke={fill}
            d="M0,0H30V30H0Z"
            transform="translate(571 452)"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#hst-warning-icon-clip)"
        transform="translate(-571 -452)"
      >
        <g transform="translate(571.08 452)">
          <path
            fill={fill}
            d="M14.98,0A15,15,0,1,0,29.92,14.98,15,15,0,0,0,14.98,0ZM12.985,22.1A1.995,1.995,0,1,1,14.98,24.1,1.995,1.995,0,0,1,12.985,22.1Zm.578-4.687L13.005,6.8h3.989l-.578,10.612Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default WarningIcon;
