import React from "react";

export interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const CloseXIcon: React.FC<Props> = ({
  width = "18px",
  height = "18px",
  fill = "#000000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16.368 16.367"
    >
      <g id="preferences-icon" transform="translate(-4699.255 -3540.573)">
        <rect
          id="Retângulo_1550"
          data-name="Retângulo 1550"
          width="20.711"
          height="2.436"
          transform="translate(4700.979 3540.573) rotate(45)"
          fill={fill}
        />
        <rect
          id="Retângulo_1551"
          data-name="Retângulo 1551"
          width="20.711"
          height="2.437"
          transform="translate(4699.255 3555.218) rotate(-45)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default CloseXIcon;
