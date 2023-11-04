import AnchoredHeader from '../../components/AnchoredHeader';
import BlockchainCouncilCertificates from './BlockchainCouncilCertificates';
import { FC } from 'react';
import MicroservicesIOCertificate from './MicroservicesIO';
import { SECTION } from '../constants';
import Section from '../../components/Section';
import { useTranslation } from 'react-i18next';

const Certificates: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section id={`${SECTION.CERTIFICATES}`} className="text-center py-20">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor={SECTION.CERTIFICATES}
          title={t('certificates.title')}
          subTitle={t('certificates.sub-title')}
        />
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-2">
        <BlockchainCouncilCertificates />
        <MicroservicesIOCertificate />
      </div>
    </Section>
  );
};

export default Certificates;
