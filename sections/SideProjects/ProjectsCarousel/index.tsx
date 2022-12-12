import { Carousel } from 'flowbite-react';
import { FC } from 'react';

import ProjectCarouseltem from './ProjectCarouseltem';
import { projects } from '../projects';

const ProjectsCarousel: FC = () => {
  return (
    <Carousel slideInterval={5000} className="h-full">
      {projects.map((p) => (
        <ProjectCarouseltem key={p.id} project={p} />
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
