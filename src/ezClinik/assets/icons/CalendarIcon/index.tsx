import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const CalendarIcon: React.FC<Props> = ({
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
        <clipPath id="hst-calendar-icon-clip">
          <rect
            fill={fill}
            stroke={fill}
            width="30"
            height="30"
            transform="translate(479 167)"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#hst-calendar-icon-clip)"
        transform="translate(-479 -167)"
      >
        <g transform="translate(479.794 167.081)">
          <path
            fill={fill}
            d="M27.794,4.9a2.184,2.184,0,0,0-1.549-.635H24.062V2.68A2.561,2.561,0,0,0,23.268.695a2.7,2.7,0,0,0-1.985-.774H20.171a2.64,2.64,0,0,0-1.985.794A2.5,2.5,0,0,0,17.372,2.7V4.288H10.939V2.7A2.66,2.66,0,0,0,10.125.715,2.7,2.7,0,0,0,8.14-.06H7.107A2.66,2.66,0,0,0,5.122.735,2.482,2.482,0,0,0,4.328,2.72V4.308H2.184a1.985,1.985,0,0,0-1.529.635A1.985,1.985,0,0,0,0,6.393v21.4a1.985,1.985,0,0,0,.655,1.489,2.1,2.1,0,0,0,1.529.635H26.226a2.184,2.184,0,0,0,1.549-.635,1.985,1.985,0,0,0,.635-1.489V6.413A1.985,1.985,0,0,0,27.794,4.9ZM19.674,2.68a.536.536,0,0,1,.556-.556h1.092a.635.635,0,0,1,.4.159.536.536,0,0,1,.159.377V7.485a.536.536,0,0,1-.159.377.635.635,0,0,1-.4.159H20.23a.556.556,0,0,1-.377-.079.536.536,0,0,1-.159-.377Zm-13.123,0a.556.556,0,0,1,.159-.4.6.6,0,0,1,.4-.159H8.2a.556.556,0,0,1,.4.159.536.536,0,0,1,.159.377V7.485a.536.536,0,0,1-.159.457.556.556,0,0,1-.4.159H7.107a.6.6,0,0,1-.4-.159.536.536,0,0,1-.159-.377ZM25.233,27.06H3.2V11.4H25.233Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CalendarIcon;
