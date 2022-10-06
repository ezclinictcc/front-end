import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const PadLockIcon: React.FC<Props> = ({
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
        <clipPath id="hst-padlock-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(1229 117)"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#hst-padlock-icon-clip)"
        transform="translate(-1229 -117)"
      >
        <g transform="translate(1231.692 116.957)">
          <path
            fill={fill}
            d="M24.035,14.3a2,2,0,0,0-1.462-.6h-.541V9.694a9.333,9.333,0,0,0-2.924-6.87,9.534,9.534,0,0,0-13.459,0h0a9.173,9.173,0,0,0-2.9,6.77V13.7H2a2,2,0,0,0-2,2H0V28.04a2,2,0,0,0,2,2h20.61a2,2,0,0,0,2-2h0V15.763a2,2,0,0,0-.581-1.462Zm-6.269-.6H6.85V9.694a5.268,5.268,0,0,1,1.6-3.866,5.488,5.488,0,0,1,7.751,0h0a5.107,5.107,0,0,1,1.6,3.866Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default PadLockIcon;
