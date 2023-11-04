import AnchoredHeader from '../../components/AnchoredHeader';
import BlockchainCouncilCertificates from './BlockchainCouncilCertificates';
import { FC } from 'react';
import { SECTION } from '../constants';
import Section from '../../components/Section';
import { useTranslation } from 'react-i18next';

const Certificates: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section id={`${SECTION.CERTIFICATES}`} className="text-center py-20">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader anchor={SECTION.CERTIFICATES} title={t('certificates')} subTitle={''} />
      </div>
      <BlockchainCouncilCertificates />
    </Section>
  );
};

export default Certificates;
