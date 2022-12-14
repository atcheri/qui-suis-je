import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FC } from 'react';

import ProjectCarouseltem from './ProjectCarouseltem';
import { projects } from '../projects';

import 'swiper/scss';
import 'swiper/scss/pagination';

const ProjectsCarousel: FC = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        type: 'progressbar',
      }}>
      {projects.map((p) => (
        <SwiperSlide key={p.id}>
          <ProjectCarouseltem project={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;
