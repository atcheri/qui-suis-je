import { Modal, Tooltip } from 'flowbite-react';
import { TechStack, TimelineItem } from './Timeliner';

import { FC } from 'react';
import Link from 'next/link';
import { RiCheckFill } from 'react-icons/ri';
import TechStackIcon from './TechStackIcon';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

type ExperienceProps = {
  name: string;
  show: boolean;
  toggleShow: () => void;
};

const Experience: FC<ExperienceProps> = ({ name, show, toggleShow }) => {
  const { systemTheme, theme } = useTheme();
  const { t } = useTranslation('works');
  const onClose = toggleShow;

  const currentTheme = (theme === 'system' ? systemTheme : theme) === 'dark' ? 'light' : 'dark';

  const desc = t(`${name}.description`, { returnObjects: true });
  if (typeof desc === 'string') {
    return null;
  }
  const stack = t(`${name}.stack`, { returnObjects: true }) as TechStack;

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>
        <div>{t(`${name}.title`)}</div>
        <div className="italic text-sm text-slate-500 dark:text-white">
          {t(`${name}.place`)} - {t(`${name}.location`)}{' '}
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
            {stack && (
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
                  {stack.tools.map((t) => (
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
              {t(`${name}.type`) === 'work' ? 'Key achievements' : 'Content of study'}
            </h3>
            <ul className="space-y-1 max-w-md list-inside">
              {(desc as string[])?.map((l, i) => (
                <li key={i} className="flex items-center italic gap-1">
                  <RiCheckFill className="text-green-500 dark:text-green-400" />
                  {l}
                </li>
              ))}
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
