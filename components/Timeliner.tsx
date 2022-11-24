import React, { FC, useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { MdOutlineUnfoldLess } from 'react-icons/md';
import { TbDotsVertical } from 'react-icons/tb';
import { Button } from 'flowbite-react';

import ExperienceModal from '../components/ExperienceModal';

type TimelinePeriod = {
  year: string;
  from: string;
  to: string;
};

export type TechLang = 'go' | 'typescript' | 'c++' | 'solidity' | 'nodejs' | 'python' | 'php';

export type TechTool =
  | 'apollo'
  | 'aws'
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
  | 'postgres'
  | 'react'
  | 'react-native'
  | 'rest'
  | 'symfony'
  | 'tailwind'
  | 'vuejs';

type TechStack = {
  langs: TechLang[];
  tools: TechTool[];
};

export type TimelineItem = {
  /** Job title */
  name: string;
  /** Name of the company or client */
  place: string;
  /** City or country of the company or client */
  location: string;
  /** The sector of the company's business */
  sector: string;
  period: TimelinePeriod;
  /** Short description of the role */
  content: string;
  stack?: TechStack;
  description?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const min = 4;

const Timeliner: FC<TimelineProps> = ({ items }) => {
  const [limit, setLimit] = useState(min);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState<TimelineItem>(items[0]);

  const showItemInModal = (index: number) => {
    setItem(items[index]);
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const isMax = limit === items.length;

  return (
    <>
      <ExperienceModal data={item} show={show} toggleShow={closeModal} />
      <div className="text-center">
        <div className={`mt-5 text-left ${!isMax && items.length > min && 'gradient-mask-b-50'}`}>
          {items.slice(0, limit).map(({ name, period, content, location, place, sector }, i) => (
            <div key={`${name}-${i}`} className="flex items-center relative">
              <div className="hidden md:block w-20">
                <div className="font-bold italic">{period.year}</div>
                <div className="space-x-1 text-xs">
                  <div>{period.from}</div>
                  <div>-</div>
                  <div>{period.to}</div>
                </div>
              </div>
              <div className="border-r-2 border-indigo-400 absolute h-full left-1 md:left-20 top-2">
                <HiOutlineCheckCircle className="w-6 h-6 -top-1 -ml-[11px] absolute text-indigo-400 bg-white dark:bg-black" />
              </div>
              <div className="ml-10" onClick={() => showItemInModal(i)}>
                <div className="capitalize font-bold">
                  {name} {sector && <span className="italic font-extralight">({sector})</span>}
                </div>
                <div className="italic md:mb-4">
                  {place} - {location}
                </div>
                <div className="mb-4 mt-2 md:hidden">
                  <div className="font-bold">{period.year}</div>
                  <div className="text-xs">
                    {period.from} - {period.to}
                  </div>
                </div>
                <div className="mb-10">{content}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center relative">
            <div className="hidden md:block w-20"></div>
            <div className="border-r-2 border-indigo-400 absolute h-full left-1 md:left-20 top-2">
              <TbDotsVertical className="w-6 h-6 -top-1 -ml-[11px] absolute text-indigo-400 bg-white dark:bg-black" />
            </div>
          </div>
        </div>

        {items.length > min && (
          <div className="relative cursor-pointer" onClick={() => setLimit(isMax ? min : items.length)}>
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
