import { FC } from 'react';
import Link from 'next/link';

import { rotate1WithTransition } from '../styles/tailwind.classes';
import { ItsutsuInazumaIcon } from './Icons';

const Logo: FC = () => {
  return (
    <Link
      href="/"
      className={`my-2 flex items-center space-x-1 text-indigo-900 dark:text-indigo-300 ${rotate1WithTransition}`}>
      <ItsutsuInazumaIcon className="h-8 w-8 flex-shrink-0 mr-3 fill-indigo-900 dark:fill-slate-200" />
      <span className="font-bold text-3xl text-indigo-900 dark:text-slate-200 font-sans tracking-tight whitespace-nowrap">
        5Inazuma
      </span>
    </Link>
  );
};

export default Logo;
