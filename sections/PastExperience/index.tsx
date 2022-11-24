import { FC, useState } from 'react';
import { SlGraduation } from 'react-icons/sl';
import { MdOutlineMapsHomeWork } from 'react-icons/md';

import Timeliner from '../../components/Timeliner';
import AnchoredHeader from '../../components/AnchoredHeader';
import { studies, works } from './experiences';
import Section from '../../components/Section';
import { SECTION } from '../constants';

const PastExperience: FC = () => {
  const [expType, setExpType] = useState<'study' | 'work'>('work');

  return (
    <Section id={SECTION.PAST_EXPERIENCE}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader anchor={SECTION.PAST_EXPERIENCE} title="Until now" subTitle="What I studied, where I worked" />
      </div>
      <div className="text-slate-600 dark:text-slate-100">
        <ul className="flex justify-evenly text-lg font-extrabold">
          <li
            className={`${expType !== 'work' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType('work')}>
            <MdOutlineMapsHomeWork />
            Works
          </li>
          <li
            className={`${expType !== 'study' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType('study')}>
            <SlGraduation /> <span>Education</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <div className="md:w-3/5">
            <Timeliner items={expType === 'study' ? studies : works} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PastExperience;
