import { ExperienceTypes, studies, works } from './experiences';
import { FC, useState } from 'react';

import AnchoredHeader from '../../components/AnchoredHeader';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { SECTION } from '../constants';
import Section from '../../components/Section';
import { SlGraduation } from 'react-icons/sl';
import Timeliner from '../../components/Timeliner';
import { useTranslation } from 'react-i18next';

const PastExperience: FC = () => {
  const { t } = useTranslation('common');
  const [type, setType] = useState<ExperienceTypes>('works');

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
            className={`${type !== 'works' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setType('works')}>
            <MdOutlineMapsHomeWork />
            {t('experiences.work')}
          </li>
          <li
            className={`${type !== 'studies' && 'border-opacity-0'} underlined flex items-center gap-2 cursor-pointer`}
            onClick={() => setType('studies')}>
            <SlGraduation /> <span>{t('experiences.education')}</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <div className="md:w-3/5">
            <Timeliner names={type === 'studies' ? studies : works} type={type} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PastExperience;
