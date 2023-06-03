import { CONTACT_LINKS } from '../constants';
import { CiLinkedin } from 'react-icons/ci';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import Link from 'next/link';
import { RiMailSendLine } from 'react-icons/ri';
import { SiLine } from 'react-icons/si';
import { TbBrandTelegram } from 'react-icons/tb';

type ContactCardProps = {
  Icon: IconType;
  title: string;
  link: {
    href: string;
    text: string;
  };
};

const ContactCard: FC<ContactCardProps> = ({ Icon, link, title }) => {
  return (
    <div className="flex flex-col justify-center items-center h-48 w-full md:w-2/3 text-indigo-800 dark:text-gray-50 shadow-inner bg-gray-50 rounded-lg dark:bg-gray-800">
      <div className="flex flex-col gap-2 items-center">
        <Icon className="h-8 w-8" />
        <h4 className="text-lg mb-2 font-bold">{title}</h4>
        <Link href={link.href} className="text-indigo-500">
          {link.text}
        </Link>
      </div>
    </div>
  );
};

const ConnectWithMe: FC = () => {
  return (
    <div className="text-center">
      <h3 className=" text-2xl mb-10">Connect with me</h3>
      <div className="flex flex-col gap-6 items-center px-6">
        <ContactCard
          Icon={RiMailSendLine}
          title="Email"
          link={{ href: 'mailto:atcheri@gmail.com', text: 'atcheri@gmail.com' }}
        />
        <ContactCard
          Icon={CiLinkedin}
          title="Linkedin"
          link={{
            href: CONTACT_LINKS.LINKEDIN,
            text: 'endoatsuhiro',
          }}
        />
        <ContactCard
          Icon={TbBrandTelegram}
          title="Telegram"
          link={{ href: CONTACT_LINKS.TELEGRAM, text: 'atchdayo' }}
        />
        <ContactCard
          Icon={SiLine}
          title="Line"
          link={{
            href: CONTACT_LINKS.LINE,
            text: 'atchline',
          }}
        />
      </div>
    </div>
  );
};

export default ConnectWithMe;
