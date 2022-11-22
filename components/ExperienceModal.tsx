import { FC } from "react";
import { Modal } from "flowbite-react";

import { TimelineItem } from "./Timeliner";
import TechStackIcon from "./TechStackIcon";

type ExperienceProps = {
  data: TimelineItem;
  show: boolean;
  toggleShow: () => void;
};

const Experience: FC<ExperienceProps> = ({
  data: { description, location, name, place, stack },
  show,
  toggleShow,
}) => {
  const onClose = toggleShow;

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>
        <div>{name}</div>
        <div className="italic text-sm text-slate-500 dark:text-white">
          {place} - {location}
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <h3 className="text-md italic mb-2">Tech Stack</h3>
            <ul className="flex gap-2 mb-1">
              {stack?.langs.map((l) => (
                <li key={l}>
                  <TechStackIcon lang={l} />
                </li>
              ))}
            </ul>
            <ul className="flex gap-2">
              {stack?.tools.map((t) => (
                <li key={t}>
                  <TechStackIcon lang={t} />
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-6 border-b-[1px] border-opacity-60" />
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <h3 className="text-md italic mb-2">Context</h3>
            {description}
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
