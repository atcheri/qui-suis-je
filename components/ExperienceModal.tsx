import { FC } from 'react';
import { Modal } from 'flowbite-react';
import { RiCheckFill } from 'react-icons/ri';

import { TimelineItem } from './Timeliner';
import TechStackIcon from './TechStackIcon';
import Link from 'next/link';

type ExperienceProps = {
  data: TimelineItem;
  show: boolean;
  toggleShow: () => void;
};

const Experience: FC<ExperienceProps> = ({
  data: { description, location, name, place, stack, type, url },
  show,
  toggleShow,
}) => {
  const onClose = toggleShow;

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>
        <div>{name}</div>
        <div className="italic text-sm text-slate-500 dark:text-white">
          {place} - {location}{' '}
          {url && (
            <Link href={url} target="_blank" className="ml-3 text-indigo-500">
              {url}
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
                      <TechStackIcon lang={l} />
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {stack.tools.map((t) => (
                    <li key={t}>
                      <TechStackIcon lang={t} />
                    </li>
                  ))}
                </ul>
                <div className="pb-3 border-b-[1px] opacity-25" />
              </>
            )}
          </div>
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
            <h3 className="text-md italic mb-2 font-bold">
              {type === 'work' ? 'Key achievements' : 'Content of study'}
            </h3>
            <ul className="space-y-1 max-w-md list-inside">
              {description?.map((l, i) => (
                <li key={i} className="flex items-center italic">
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
7;
