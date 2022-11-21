import { FC, useState } from "react";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineMapsHomeWork } from "react-icons/md";

import Timeliner from "../../components/Timeliner";
import AnchoredHeader from "../../components/AnchoredHeader";
import { studies, works } from "./experiences";

const PastExperience: FC = () => {
  const [expType, setExpType] = useState<"study" | "work">("work");
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
          <li
            className={`${
              expType !== "work" && "border-opacity-0"
            } underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType("work")}
          >
            <MdOutlineMapsHomeWork />
            Works
          </li>
          <li
            className={`${
              expType !== "study" && "border-opacity-0"
            } underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType("study")}
          >
            <SlGraduation /> <span>Education</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <div className="md:w-3/5">
            {expType === "study" ? (
              <Timeliner items={studies} />
            ) : (
              <Timeliner items={works} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastExperience;
