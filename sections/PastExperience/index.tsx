import { FC, useState } from 'react';
import { SlGraduation } from 'react-icons/sl';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import Timeliner from '../../components/Timeliner';
import AnchoredHeader from '../../components/AnchoredHeader';
import { studies, works } from './experiences';
import Section from '../../components/Section';
import { SECTION } from '../constants';

const PastExperience: FC = () => {
  const { t } = useTranslation('common');
  const [expType, setExpType] = useState<'study' | 'work'>('work');

  return (
    <Section id={SECTION.PAST_EXPERIENCE}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor={SECTION.PAST_EXPERIENCE}
          title={t('experiences.until-now')}
          subTitle={t('experiences.what-i-studied-where-i-worked')}
        />
      </div>
      <div className="text-slate-600 dark:text-slate-100">
        <ul className="flex justify-evenly text-lg font-extrabold">
          <li
            className={`${expType !== 'work' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType('work')}>
            <MdOutlineMapsHomeWork />
            {t('experiences.work')}
          </li>
          <li
            className={`${expType !== 'study' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setExpType('study')}>
            <SlGraduation /> <span>{t('experiences.education')}</span>
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
