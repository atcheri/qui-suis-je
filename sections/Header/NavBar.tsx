import { MdAlternateEmail, MdOutlineRateReview } from 'react-icons/md';

import { AiOutlineExperiment } from 'react-icons/ai';
import { BsPersonDash } from 'react-icons/bs';
import { FC } from 'react';
import { GiJourney } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';
import Link from 'next/link';
import { PiCertificateDuotone } from 'react-icons/pi';
import { SECTION } from '../constants';
import { withTransition } from '../../styles/tailwind.classes';

const itemClass = `nav__item ${withTransition} text-indigo-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400`;

const NavBar: FC = () => {
  return (
    <div className="nav__menu flex justify-center">
      <div className="flex justify-evenly items-center fixed bottom-3 p-6 w-[90%] mx-auto max-w-[480px] text-3xl bg-slate-100 dark:bg-slate-700 rounded-[50px] shadow-inner bg-opacity-80 backdrop-blur-sm">
        <Link href={`#${SECTION.HOME}`} className={itemClass}>
          <GoHome />
        </Link>
        <Link href={`/#${SECTION.ABOUT_ME}`} className={itemClass}>
          <BsPersonDash />
        </Link>
        <Link href={`/#${SECTION.PAST_EXPERIENCE}`} className={itemClass}>
          <GiJourney />
        </Link>
        <Link href={`/#${SECTION.TESTIMONIALS}`} className={itemClass}>
          <MdOutlineRateReview />
        </Link>
        <Link href={`/#${SECTION.CERTIFICATES}`} className={itemClass}>
          <PiCertificateDuotone />
        </Link>
        <Link href={`/#${SECTION.SIDE_PROJECTS}`} className={itemClass}>
          <AiOutlineExperiment />
        </Link>
        <Link href={`/#${SECTION.CONTACT_ME}`} className={itemClass}>
          <MdAlternateEmail />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
