import { Button } from 'flowbite-react';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { VscLinkExternal } from 'react-icons/vsc';

import { Project } from '../projects';

type ProjectCarouseltemProps = { project: Project };

const ProjectCarouseltem: FC<ProjectCarouseltemProps> = ({ project }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col gap-3 justify-center items-center p-16 rounded-lg bg-slate-100 dark:bg-gray-900">
      <Image className="rounded-md" src={project.imageUrl} width={360} height={300} alt={''} />
      <h3 className="font-bold text-lg md:text-xl">{project.title}</h3>
      <p className="text-md">{project.description}</p>
      <a href={project.url} target="_blank" rel="noreferrer">
        <Button color="rgb(81 69 205 / var(--tw-bg-opacity))" className="bg-indigo-700" outline={true}>
          <span className="mr-2">{t('projects.discover')}</span>
          <VscLinkExternal />
        </Button>
      </a>
    </div>
  );
};

export default ProjectCarouseltem;
