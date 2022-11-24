import { FC } from 'react';
import { IconProps } from './types';

export const ItalyFlagIcon: FC<IconProps> = ({ ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1507" viewBox="0 0 216.918 130.734" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M.495.495h215.928v129.744H.495V.495z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#25a78e" d="M.423.495h72v129.744h-72V.495z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="#cc2229" d="M144.352.495h72.071v129.744h-72.071V.495z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".99"
        strokeMiterlimit="2.613"
        d="M.495.495h215.928v129.744H.495V.495z"
      />
    </svg>
  );
};
