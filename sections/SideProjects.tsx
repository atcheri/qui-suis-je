import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import AnchoredHeader from '../components/AnchoredHeader';
import Section from '../components/Section';
import { SECTION } from './constants';

const SideProjects: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section id={SECTION.SIDE_PROJECTS}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader anchor={SECTION.SIDE_PROJECTS} title={t('projects.title')} subTitle={t('projects.sub-title')} />
      </div>
    </Section>
  );
};

export default SideProjects;
