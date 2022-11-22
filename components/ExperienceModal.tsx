import { ComponentType, FC } from "react";
import { Modal } from "flowbite-react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

import { TechLang, TimelineItem } from "./Timeliner";
import {
  CppIcon,
  GolangIcon,
  NodeJSIcon,
  PhpIcon,
  SolidityIcon,
  TypescriptIcon,
} from "./Icons";
import { IconProps } from "./Icons/types";

const renderProgrammingIcon = (lang: TechLang): JSX.Element => {
  let Icon: ComponentType<IconProps>;
  switch (lang) {
    case "go":
      Icon = GolangIcon;
      break;
    case "typescript":
      Icon = TypescriptIcon;
      break;
    case "nodejs":
      Icon = NodeJSIcon;
      break;
    case "c++":
      Icon = CppIcon;
      break;
    case "solidity":
      Icon = SolidityIcon;
      break;
    case "php":
      Icon = PhpIcon;
      break;
    default:
      Icon = HiOutlineQuestionMarkCircle;
  }
  return <Icon className="h-10 w-10" />;
};

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
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <h3 className="text-md italic mb-2">Tech Stack</h3>
            <ul className="flex gap-2">
              {stack?.langs.map((l) => (
                <li key={l}>{renderProgrammingIcon(l)}</li>
              ))}
            </ul>
          </p>
          <p className="pb-6 border-b-[1px] border-opacity-60" />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <h3 className="text-md italic mb-2">Context</h3>
            {description}
          </p>
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
