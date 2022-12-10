import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import AnchoredHeader from '../../components/AnchoredHeader';
import ContactForm from './ContactForm';
import Section from '../../components/Section';
import { SECTION } from '../constants';
import ConnectWithMe from './ConnectWithMe';

const ContactMe: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section id={SECTION.CONTACT_ME}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader anchor={SECTION.CONTACT_ME} title={t('contact.title')} subTitle={t('contact.sub-title')} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConnectWithMe />
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactMe;
