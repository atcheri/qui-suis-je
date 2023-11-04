import { FC, useCallback, useEffect } from 'react';

import AboutMe from '../sections/AboutMe';
import Certificates from '../sections/Certifications';
import ContactMe from '../sections/ContactMe';
import { GetStaticProps } from 'next';
import Hero from '../sections/Hero';
import Layout from '../sections/Layout';
import PastExperience from '../sections/PastExperience';
import { SECTION } from '../sections/constants';
import SideProjects from '../sections/SideProjects';
import Testimonials from '../sections/Testimonials';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const { locale } = useRouter();

  const onScrollToAnchor = useCallback((event?: Event) => {
    const { scrollY } = window;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((s: HTMLElement) => {
      const h = s.offsetHeight,
        id = s.getAttribute('id'),
        top = s.offsetTop - (id === `#${SECTION.HOME}` ? 90 : 58),
        selector = `.nav__menu a[href*="/${locale === 'en' ? '' : locale}${id}"]`,
        link = document.querySelector(selector);

      if (!link) {
        return;
      }

      const activeStyle = 'blur-[2px]';
      if (scrollY > top && scrollY <= top + h) {
        link.classList.remove(activeStyle);
      } else {
        link.classList.add(activeStyle);
      }
    });
  }, []);

  useEffect(() => {
    onScrollToAnchor();
    window.addEventListener('scroll', onScrollToAnchor, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScrollToAnchor);
    };
  }, [onScrollToAnchor]);

  return (
    <Layout>
      <Hero />
      <AboutMe />
      <PastExperience />
      <Testimonials />
      <Certificates />
      <SideProjects />
      <ContactMe />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'studies', 'works'])),
    },
  };
};

export default Home;
