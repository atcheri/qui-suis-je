import { FC } from 'react';
import { IconProps } from './types';

export const AlpineJsIcon: FC<IconProps> = ({ active = true, ...rest }) => {
  return (
    <svg height="2500" viewBox="1.069 54 198.26 91.221" width="2500" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="m155.271 54 44.058 44.002-44.058 44.001-44.057-44.001z" fill="#77c1d2" />
        <path d="m45.127 54 91.337 91.221h-88.115l-47.28-47.22z" fill="#2d3441" />
      </g>
    </svg>
  );
};
