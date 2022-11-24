import { FC } from "react";
import { IconProps } from "./types";

export const JapanFlagIcon: FC<IconProps> = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="600"
      viewBox="0 0 900 600"
      {...rest}
    >
      <rect fill="#fff" height="600" width="900" />
      <circle fill="#bc002d" cx="450" cy="300" r="180" />
    </svg>
  );
};
