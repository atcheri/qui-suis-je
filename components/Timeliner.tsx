import React, { FC, ReactNode } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { TbDotsVertical } from "react-icons/tb";

type TimelinePeriod = {
  year: string;
  from: string;
  to: string;
};

export type TimelineItem = {
  name: string;
  place: string;
  location: string;
  type: string;
  period: TimelinePeriod;
  content: string;
  icon: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeliner: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="mt-5 text-left">
      {items.map(({ name, period, content, location, place, type }, i) => (
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

          <div className="ml-10">
            <div className="capitalize font-bold">
              {name}{" "}
              {type && <span className="italic font-extralight">({type})</span>}
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
  );
};

export default Timeliner;
