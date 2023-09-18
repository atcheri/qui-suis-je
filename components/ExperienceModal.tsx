import { FC, ReactElement } from 'react';
import { Modal, Tooltip } from 'flowbite-react';

import { ExperienceTypes } from '../sections/PastExperience/experiences';
import Link from 'next/link';
import { RiCheckFill } from 'react-icons/ri';
import TechStackIcon from './TechStackIcon';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

export type TechLang = 'go' | 'typescript' | 'c++' | 'solidity' | 'nodejs' | 'python' | 'php';

export type TechTool =
  | 'alpinejs'
  | 'apollo'
  | 'aws'
  | 'cypress'
  | 'docker'
  | 'gitlab'
  | 'graphql'
  | 'heroku'
  | 'kubernetes'
  | 'jest'
  | 'jquery'
  | 'metamask'
  | 'mongo'
  | 'mysql'
  | 'netlify'
  | 'nextjs'
  | 'openapi'
  | 'postgres'
  | 'react'
  | 'react-native'
  | 'rest'
  | 'symfony'
  | 'tailwind'
  | 'vuejs';

type TechStack = {
  langs: TechLang[];
  tools: TechTool[];
};

type WorkExperienceDesc = {
  content: string | ReactElement;
  url?: string;
};

type ExperienceProps = {
  name: string;
  show: boolean;
  toggleShow: () => void;
  type: ExperienceTypes;
};

const Experience: FC<ExperienceProps> = ({ name, show, toggleShow, type }) => {
  const { systemTheme, theme } = useTheme();
  const { t } = useTranslation(['common', type]);
  const onClose = toggleShow;

  const currentTheme = (theme === 'system' ? systemTheme : theme) === 'dark' ? 'light' : 'dark';

  const desc = t(`${name}.description`, { returnObjects: true, ns: type });
  if (typeof desc === 'string') {
    return null;
  }

  const stack = t(`${name}.stack`, { returnObjects: true, ns: type }) as TechStack;

  return (
    <Modal dismissible show={show} onClose={onClose} size="5xl">
      <Modal.Header>
        <div>{t(`${name}.title`, { ns: type })}</div>
        <div className="italic text-sm text-slate-500 dark:text-white">
          {t(`${name}.place`, { ns: type })} - {t(`${name}.location`, { ns: type })}{' '}
          {t(`${name}.url`) && (
            <Link href={t(`${name}.url`)} target="_blank" className="ml-3 text-indigo-500">
              {t(`${name}.url`)}
            </Link>
          )}
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            <h3 className="text-md italic mb-2 font-bold capitalize">
              {type === 'studies' ? t('syllabus') : t('business')}
            </h3>
            <span>{t(`${name}.what`, { ns: type })}</span>
          </div>
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            {stack && Array.isArray(stack.langs) && Array.isArray(stack.tools) && (
              <>
                <h3 className="text-md italic mb-2 font-bold">Tech Stack</h3>
                <ul className="flex flex-wrap gap-2 mb-3">
                  {stack.langs.map((l) => (
                    <li key={l}>
                      <Tooltip style={currentTheme} content={l} trigger="hover">
                        <TechStackIcon lang={l} />
                      </Tooltip>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {stack.tools?.map((t) => (
                    <li key={t}>
                      <Tooltip style={currentTheme} content={<div className="py-2">{t}</div>} trigger="hover">
                        <TechStackIcon lang={t} />
                      </Tooltip>
                    </li>
                  ))}
                </ul>
                <div className="pb-3 border-b-[1px] opacity-25" />
              </>
            )}
          </div>
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            <h3 className="text-md italic mb-2 font-bold">
              {t(`${name}.type`, { ns: type }) === 'work' ? 'Key achievements' : 'Content of study'}
            </h3>
            <ul className="space-y-1 list-inside">
              {(desc as WorkExperienceDesc[])?.map((l, i) => {
                return (
                  <li key={i} className="flex italic gap-1">
                    <span className="pt-2">
                      <RiCheckFill className="h-4 w-4 text-green-500 dark:text-green-400" />
                    </span>
                    <div>{l.content}</div>
                    {l.url && (
                      <Link className="text-indigo-500" href={l.url} target="_blank">
                        Link
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Experience;
