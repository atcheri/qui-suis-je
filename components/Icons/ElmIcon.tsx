import { FC } from 'react';
import { IconProps } from './types';

export const ElmIcon: FC<IconProps> = ({ active = true, ...rest }) => {
  return (
    <svg
      width="2500"
      height="2500"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...rest}>
      <path fill={`${!active ? 'grey' : '#5FB4CB'}`} d="M128 135.022L7.023 256h241.955z" />
      <path fill={`${!active ? 'grey' : '#EEA400'}`} d="M202.332 195.311L256 248.98V141.643z" />
      <path fill={`${!active ? 'grey' : '#596277'}`} d="M120.978 128L0 7.022V248.98z" />
      <path fill={`${!active ? 'grey' : '#5FB4CB'}`} d="M256 113.806V0H142.193z" />
      <path
        fill={`${!active ? 'grey' : '#8CD636'}`}
        d="M195.584 67.434l60.288 60.289-60.563 60.564-60.29-60.29zM7.021 0l55.725 55.726h121.13L128.15 0z"
      />
      <path fill={`${!active ? 'grey' : '#EEA400'}`} d="M128 120.979l55.322-55.323H72.677z" />
    </svg>
  );
};
