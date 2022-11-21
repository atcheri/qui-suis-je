import { FC } from "react";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineMapsHomeWork } from "react-icons/md";

import Timeliner, { TimelineItem } from "../components/Timeliner";

import AnchoredHeader from "../components/AnchoredHeader";

const studies: TimelineItem[] = [
  {
    name: "mechanical engineering",
    place: "Université Pierre et Marie Curie",
    type: "Master 2",
    location: "Paris",
    period: {
      year: "2004 ~ 2006",
      from: "September",
      to: "June",
    },
    content: "lorem ipsum",
    icon: "",
  },
  {
    name: "Information Technology in finance",
    place: "Université Pierre et Marie Curie",
    type: "Master 2",
    location: "Paris",
    period: {
      year: "2006 ~ 2008",
      from: "September",
      to: "June",
    },
    content: "lorem ipsum",
    icon: "",
  },
];

const PastExperience: FC = () => {
  return (
    <section id="past-experience" className="">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor="past-experience"
          title="Until now"
          subTitle="What I studied, where I worked"
        />
      </div>
      <div className="text-slate-600 dark:text-slate-100">
        <ul className="flex justify-evenly text-lg font-extrabold">
          <li className="flex items-center gap-2 cursor-pointer">
            <SlGraduation /> <span>Education</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdOutlineMapsHomeWork />
            Work
          </li>
        </ul>
        <div className="flex justify-center">
          <div className="md:w-3/5">
            <Timeliner items={studies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastExperience;
