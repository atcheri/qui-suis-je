import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BsMouse } from 'react-icons/bs';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { CiLinkedin } from 'react-icons/ci';
import { GoMarkGithub } from 'react-icons/go';
import { SiTelegram } from 'react-icons/si';

import { SECTION } from './constants';
import { withTransition } from '../styles/tailwind.classes';
import Section from '../components/Section';
import AnchoredHeader from '../components/AnchoredHeader';
import Pana from '../components/Avatars/Pana';

const delayUnit = 500;

const AboutMe: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section id={SECTION.ABOUT_ME} className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center">
        <AnchoredHeader anchor={SECTION.ABOUT_ME} title={t('hi')} subTitle={t('')} />
      </div>
      <div className="w-full md:max-w-sm pt-10 pb-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <Pana className="w-48 h-48 mb-3 rounded-full shadow-lg" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{t('who-i-am')}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('how-i-describe-myself')}</span>
          <p>{t('what-i-do')}</p>
          <div className="flex gap-3 mt-4 space-x-3 md:mt-6">
            <Link href="https://www.linkedin.com/in/endoatsuhiro/" target="_blank">
              <CiLinkedin className="h-7 w-7 text-blue-500" />
            </Link>
            <Link href="https://t.me/atchdayo" target="_blank">
              <SiTelegram className="h-7 w-7 text-blue-400" />
            </Link>
            <Link href="https://github.com/atcheri" target="_blank">
              <GoMarkGithub className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
      <Fade delay={5 * delayUnit}>
        <Link href={`#${SECTION.PAST_EXPERIENCE}`}>
          <BsMouse className={`${withTransition} animate-bounce h-8 w-8 cursor-pointer hover:text-indigo-500`} />
        </Link>
      </Fade>
    </Section>
  );
};

export default AboutMe;
