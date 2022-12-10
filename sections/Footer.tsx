import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FlowbiteIcon,
  FranceFlagIcon,
  GermanyFlagIcon,
  ItalyFlagIcon,
  JapanFlagIcon,
  NextjsIcon,
  TailwindIcon,
  TypescriptIcon,
  UKFlagIcon,
  VercelIcon,
} from '../components/Icons';
import Logo from '../components/Logo';

const Footer: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };
  return (
    <footer className="p-4 md:px-6 md:py-8 my-20">
      <div className="flex items-center flex-col gap-4 md:flex-row justify-between">
        <Logo />
        <div className="flex flex-col items-center gap-3">
          <h4>{t('footer.site-built-with')}</h4>
          <ul className="inline-flex gap-2">
            <li>
              <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                <VercelIcon className="fill-black dark:fill-white h-6 w-12" />
              </Link>
            </li>
            <li>
              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <NextjsIcon className="dark:fill-white h-6 w-6 cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="https://typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                <TypescriptIcon className="h-6 w-6 cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <TailwindIcon className="h-6 w-6 cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">
                <FlowbiteIcon className="h-6 w-6 cursor-pointer" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h4>{t('footer.choose-language')}</h4>
          <ul className="inline-flex gap-2 flex-wrap">
            <li>
              <UKFlagIcon className="h-8 w-8 cursor-pointer" onClick={() => changeLocale('en')} />
            </li>
            <li>
              <FranceFlagIcon className="h-8 w-8 cursor-pointer" onClick={() => changeLocale('fr')} />
            </li>
            <li>
              <JapanFlagIcon className="h-8 w-8 cursor-pointer" onClick={() => changeLocale('ja')} />
            </li>
            <li>
              <GermanyFlagIcon className="h-8 w-8 cursor-pointer" onClick={() => changeLocale('de')} />
            </li>
            <li>
              <ItalyFlagIcon className="h-8 w-8 cursor-pointer" onClick={() => changeLocale('it')} />
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        &copy; {new Date().getFullYear()} QuiSuiJe™. No Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
