import React, { FC, ReactElement, useState } from 'react';

import ExperienceModal from '../components/ExperienceModal';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { MdOutlineUnfoldLess } from 'react-icons/md';
import { TbDotsVertical } from 'react-icons/tb';
import useShowMore from '../hooks/useShowMore';
import { useTranslation } from 'next-i18next';

type TimelinePeriod = {
  year: string;
  from: string;
  to: string;
};

export type TechLang = 'go' | 'typescript' | 'c++' | 'solidity' | 'nodejs' | 'python' | 'php';

export type TechTool =
  | 'alpinejs'
  | 'apollo'
  | 'aws'
  | 'cypress'
  | 'docker'
  | 'gitlab'
  | 'graphql'
  | 'heroku'
  | 'kubernetes'
  | 'jest'
  | 'jquery'
  | 'metamask'
  | 'mongo'
  | 'mysql'
  | 'netlify'
  | 'nextjs'
  | 'openapi'
  | 'postgres'
  | 'react'
  | 'react-native'
  | 'rest'
  | 'symfony'
  | 'tailwind'
  | 'vuejs';

export type TechStack = {
  langs: TechLang[];
  tools: TechTool[];
};

export type WorkExperienceDesc = {
  content: string | ReactElement;
  url?: string;
};

export type TimelineItem = {
  /** Job title */
  title: string;
  /** short name of the company or client */
  name: string;
  /** Job title */
  type: 'study' | 'work';
  /** Full Name of the company or client */
  place: string;
  /** City or country of the company or client */
  location: string;
  /** The sector of the company's business */
  sector: string;
  period: TimelinePeriod;
  /** Short description of the role */
  content: string;
  url?: string;
  stack?: TechStack;
  description?: WorkExperienceDesc[] | ReactElement[];
};

type TimelineProps = {
  items: string[];
};

const min = 4;

const Timeliner: FC<TimelineProps> = ({ items: rawItems }) => {
  const { t } = useTranslation('works');
  const { items, isMax, toggleMore } = useShowMore<string>(rawItems, min);
  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>(items[0]);

  const showItemInModal = (index: number) => {
    setName(items[index]);
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <ExperienceModal name={name} show={show} toggleShow={closeModal} />
      <div className="text-center">
        <div className={`mt-5 text-left ${!isMax && items.length > min && 'gradient-mask-b-50'}`}>
          {rawItems.map((name, i) => {
            return (
              <div key={`${name}-${i}`} className="flex items-center relative">
                <div className="hidden md:block w-20">
                  <div className="font-bold italic">{t(`${name}.period.year`)}</div>
                  <div className="space-x-1 text-xs">
                    <div>{t(`${name}.period.from`)}</div>
                    <div>-</div>
                    <div>{t(`${name}.period.to`)}</div>
                  </div>
                </div>
                <div className="border-r-2 border-indigo-400 absolute h-full left-1 md:left-20 top-2">
                  <HiOutlineCheckCircle className="w-6 h-6 -top-1 -ml-[11px] absolute text-indigo-400 bg-white dark:bg-black" />
                </div>
                <div className="ml-10 cursor-pointer" onClick={() => showItemInModal(i)}>
                  <div className="capitalize font-bold">
                    {t(`${name}.title`)}{' '}
                    {t(`${name}.sector`) && <span className="italic font-extralight">({t(`${name}.sector`)})</span>}
                  </div>
                  <div className="italic md:mb-4">
                    {t(`${name}.place`)} - {t(`${name}.location`)}
                  </div>
                  <div className="mb-4 mt-2 md:hidden">
                    <div className="font-bold">{t(`${name}.period.year`)}</div>
                    <div className="text-xs">
                      {t(`${name}.period.from`)} - {t(`${name}.period.to`)}
                    </div>
                  </div>
                  <div className="mb-10">{t(`${name}.content`)}</div>
                </div>
              </div>
            );
          })}
          <div className="flex items-center relative">
            <div className="hidden md:block w-20"></div>
            <div className="border-r-2 border-indigo-400 absolute h-full left-1 md:left-20 top-2">
              <TbDotsVertical className="w-6 h-6 -top-1 -ml-[11px] absolute text-indigo-400 bg-white dark:bg-black" />
            </div>
          </div>
        </div>

        {rawItems.length > min && (
          <div className="relative cursor-pointer" onClick={toggleMore}>
            <span className="absolute inline-block rounded-full bg-indigo-500 text-white text-lg p-2">
              {isMax ? <MdOutlineUnfoldLess /> : <TbDotsVertical />}
            </span>
            {!isMax && (
              <span className="absolute inline-block rounded-full bg-indigo-500 text-white text-lg p-4 ml-[1px] top-[1px] animate-[ping_2s_ease_infinite]"></span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Timeliner;
