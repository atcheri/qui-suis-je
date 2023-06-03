import { FC, useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import AnchoredHeader from '../../components/AnchoredHeader';
import { CiLinkedin } from 'react-icons/ci';
import { GoMarkGithub } from 'react-icons/go';
import Link from 'next/link';
import { MdOutlineUnfoldLess } from 'react-icons/md';
import { SECTION } from '../constants';
import Section from '../../components/Section';
import { TbDotsVertical } from 'react-icons/tb';
import useShowMore from '../../hooks/useShowMore';
import { useTranslation } from 'react-i18next';

type Testimonial = {
  name: string;
  title: string;
  role: string;
  content: string | string[];
  github?: string;
  linkedin?: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Denis Davidov',
    title: 'Excellence Driven Developer',
    role: 'Engineering Lead',
    content: [
      'A very skilled senior fullstack engineer with a solid understanding of the webstack.',
      'His ability to architect and implement robust solutions is valuable.',
      'He consistently delivers results and is a valuable asset to our team.',
    ],
    github: 'https://github.com/dendavidov-affinidi',
    linkedin: 'https://www.linkedin.com/in/dendavidov/',
  },
  {
    name: 'Bhanupratap Singh',
    title: 'Adaptable and Agile Mindset',
    role: ' Senior Staff Engineer',
    content: [
      'In a rapidly evolving tech landscape, he demonstrated an adaptable and agile mindset, embracing new technologies and methodologies.',
    ],
    linkedin: 'https://www.linkedin.com/in/bhprsi',
  },
  {
    name: 'Jonas Etzold',
    title: 'He embraces Codecraftsmanship',
    role: 'Senior Full-Stack Engineer',
    content: [
      'With an unwavering commitment to codecraftsmanship, Atsuhiro delivered elegant and well-structured code that not only meets the project requirements but also sets a high standard for quality and maintainability.',
    ],
    github: 'https://github.com/JonasEtzold',
    linkedin: 'https://www.linkedin.com/in/jonasetzold/',
  },
  {
    name: 'Dhuan Oliveira',
    title: 'Passionate Learner and Contributor',
    role: 'Senior Software Engineer',
    content: [
      'Appreciated his passion for continuous learning and staying up-to-date with the latest industry trends.',
      'His enthusiastic and collaborative attitude to the workplace, helped a lot to support teammates.',
    ],
    github: 'https://github.com/dhuan',
    linkedin: 'https://www.linkedin.com/in/dhuan',
  },
  {
    name: 'Jees K Denny',
    title: 'Dedicated Team Player',
    role: 'Lead Engineer',
    content: [
      'He was a really great support the team, fostering a collaborative environment and ensuring project success.',
    ],
    github: 'https://github.com/jeeskdenny',
    linkedin: 'https://www.linkedin.com/in/jeeskdenny',
  },
  {
    name: 'Theophane Fotso',
    title: 'Client-Focused',
    role: 'Software Engineer',
    content: [
      'With a keen understanding of client needs, he consistently delivered solutions that aligned with business objectives, offering valuable insights and recommendations to enhance user experience and drive client satisfaction.',
    ],
    github: 'https://github.com/Fotso',
    linkedin: 'https://www.linkedin.com/in/kamgaing-theophane-fotso-8336501aa',
  },
];

const quoteClass = 'rotate-12 h-8 w-8 opacity-20 dark:opacity-30 dark:fill-white';

const min = 3;

const Testimonials: FC = () => {
  const { items, isMax, toggleMore } = useShowMore<Testimonial>(testimonials);

  const { t } = useTranslation('common');

  return (
    <Section id={`${SECTION.TESTIMONIALS}`} className="text-center">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor={SECTION.TESTIMONIALS}
          title={t('testimonials.title')}
          subTitle={t('testimonials.sub-title')}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map(({ name, title, role, content, github, linkedin }, i) => (
          <div key={`testimonial-${i}`} className="flex flex-col gap-4 items-center">
            <div className="text-center">
              <RiDoubleQuotesL className={`float-left ${quoteClass}`} />
              <h3 className="font-semibold mb-2">{title}</h3>
              <span
                className="leading-relaxed italic"
                dangerouslySetInnerHTML={{
                  __html: typeof content === 'string' ? content : content.join('<br />'),
                }}
              />
              <RiDoubleQuotesR className={`float-right ${quoteClass}`} />
            </div>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500" />
            <div className="w-full flex flex-col items-end">
              <h3 className="font-medium title-font tracking-wider">{name}</h3>
              <p className="flex gap-2">
                {linkedin && (
                  <Link href={linkedin} target="_blank">
                    <CiLinkedin className="h-6 w-6 text-blue-500" />
                  </Link>
                )}
                {github && (
                  <Link href={github} target="_blank">
                    <GoMarkGithub className="h-5 w-5" />
                  </Link>
                )}
                <span className="text-slate-500 dark:text-slate-300">{role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative cursor-pointer" onClick={toggleMore}>
        <span className="absolute inline-block rounded-full bg-indigo-500 text-white text-lg p-2">
          {isMax ? <MdOutlineUnfoldLess /> : <TbDotsVertical />}
        </span>
        {!isMax && (
          <span className="absolute inline-block rounded-full bg-indigo-500 text-white text-lg p-4 ml-[1px] top-[1px] animate-[ping_2s_ease_infinite]"></span>
        )}
      </div>
    </Section>
  );
};

export default Testimonials;
