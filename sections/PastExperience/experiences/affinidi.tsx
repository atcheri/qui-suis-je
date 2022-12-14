import Link from 'next/link';
import { Fragment, ReactElement } from 'react';

let adi = 0;

export const affinidiDescription: ReactElement[] = [
  <Fragment key={`affinidi-description-${adi++}`}>
    An open-source command line interface:{' '}
    <Link className="text-indigo-500" href="https://github.com/affinidi/affinidi-cli" target="_blank">
      repo
    </Link>
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>
    Set up and grew a culture of automated tests multiple teams
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>
    Started and maintained a &quot;Guild&quot; focussed on Test-Driven-Development and Mob-Programming. Trained peers on
    that topic
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>Created an internal coding Kata Dojo</Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>
    Mentored interns and external students from{' '}
    <Link className="text-indigo-500" href="https://www.wbscodingschool.com" target="_blank">
      wbscodingschool
    </Link>
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>
    A rules-engine api using openapi:{' '}
    <Link
      className="text-indigo-500"
      href="https://rules-manager.prod.affinity-project.org/api-docs/v2"
      target="_blank">
      repo
    </Link>
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>
    A web user-interface using the micro frontend architecture:{' '}
    <Link className="text-indigo-500" href="https://console.affinidi.com" target="_blank">
      repo
    </Link>
  </Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>Built an end to end (E2E) tests suite with cypress</Fragment>,
  <Fragment key={`affinidi-description-${adi++}`}>Integrated a loan eligibility API in the Indian market</Fragment>,
];
