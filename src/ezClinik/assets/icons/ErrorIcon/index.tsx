import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const ErrorIcon: React.FC<Props> = ({
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
        <clipPath id="hst-error-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(679 117)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#hst-error-icon-clip)" transform="translate(-679 -117)">
        <g transform="translate(679.08 117)">
          <path
            fill={fill}
            d="M14.98,0A15,15,0,1,0,29.92,14.98,15,15,0,0,0,14.98,0Zm7.58,20.126L20.186,22.48,15.08,17.353,9.973,22.48,7.6,20.126,12.726,15,7.6,9.973,9.973,7.52l5.106,5.126L20.186,7.52,22.56,9.973,17.433,15Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ErrorIcon;
