import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const SearchIcon: React.FC<Props> = ({
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
        <clipPath id="search-icon-clip">
          <rect
            fill={fill ? fill : undefined}
            stroke={fill ? fill : undefined}
            width="30"
            height="30"
            transform="translate(717 557)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#search-icon-clip)" transform="translate(-717 -557)">
        <g transform="translate(717.041 557.032)">
          <path
            fill={fill}
            d="M29.336,26.29,22.3,19.277l.18-.281a12.023,12.023,0,0,0,1.763-9.218,12.285,12.285,0,1,0-5.27,12.7l.281-.2,7.013,7.053a2.184,2.184,0,0,0,3.046,0,2.124,2.124,0,0,0,0-3.046ZM12.263,20.94a8.677,8.677,0,1,1,8.677-8.677,8.677,8.677,0,0,1-8.677,8.677Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SearchIcon;
