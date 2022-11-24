import { FC } from "react";
import { IconProps } from "./types";

export const GermanyFlagIcon: FC<IconProps> = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="1510"
      viewBox="0 0 216.498 130.785"
      {...rest}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill="#cc2229" d="M.25 0h215.999v130.607H.25V0z" />
        <path d="M.25 0h215.999v43.776H.25V0z" />
        <path
          fill="#f2ca30"
          stroke="#f2ca30"
          strokeWidth=".499"
          strokeMiterlimit="2.613"
          d="M.25 87.624h215.999v42.912H.25V87.624z"
        />
      </g>
    </svg>
  );
};
