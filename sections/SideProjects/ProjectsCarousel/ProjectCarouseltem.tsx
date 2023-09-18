import { Button } from 'flowbite-react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../projects';
import { VscLinkExternal } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

type ProjectCarouseltemProps = { project: Project };

const ProjectCarouseltem: FC<ProjectCarouseltemProps> = ({ project }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col gap-3 justify-center items-center p-16 rounded-lg bg-slate-100 dark:bg-gray-900">
      <Image className="rounded-md" src={project.imageUrl} width={360} height={300} alt={''} />
      <h3 className="font-bold text-lg md:text-xl">{project.title}</h3>
      <p className="text-md">{project.description}</p>
      <Link href={project.url} target="_blank" rel="noreferrer">
        <button className="btn flex items-center p-2 text-sm">
          <span className="mr-2">{t('projects.discover')}</span>
          <VscLinkExternal />
        </button>
      </Link>
    </div>
  );
};

export default ProjectCarouseltem;
