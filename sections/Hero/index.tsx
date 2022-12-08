import Link from 'next/link';
import { FC } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { BsMouse } from 'react-icons/bs';

import { withTransition } from '../../styles/tailwind.classes';
import CodeSnippets from '../CodeSnippets';
import { SECTION } from '../constants';
import Punchline from './Punchline';

const delayUnit = 500;

const Hero: FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id={`#${SECTION.HOME}`} className="h-[100vh]">
      <Link href={`/#${SECTION.HOME}`} id={SECTION.HOME} className="opacity-0">
        {' '}
        _
      </Link>
      <div className="flex flex-col justify-center items-center gap-20 space-y-10 mt-12 sm:mt-24 md:mt-32">
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="flex flex-col">
            <Slide direction="down" delay={delayUnit}>
              <Fade delay={delayUnit}>
                <Punchline />
              </Fade>
            </Slide>
            <Slide className="grow items-center flex gap-6 my-10" direction="down" delay={2 * delayUnit}>
              <Fade delay={2 * delayUnit}>
                <button className="btn outline" type="button" onClick={() => {}}>
                  {t('download')} {t('resume')}
                </button>
                <Link href={`#${SECTION.ABOUT_ME}`} className="btn">
                  {t('about-me')}
                </Link>
              </Fade>
            </Slide>
          </div>
          <Fade delay={3 * delayUnit}>
            <CodeSnippets />
          </Fade>
        </div>
        <Fade delay={5 * delayUnit}>
          <Link href={`/#${SECTION.ABOUT_ME}`}>
            <BsMouse className={`${withTransition} animate-bounce h-8 w-8 cursor-pointer hover:text-indigo-500`} />
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
