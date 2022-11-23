import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC, useCallback, useEffect } from "react";

import { SECTION } from "../sections/constants";
import ContactMe from "../sections/ContactMe";
import Hero from "../sections/Hero";
import Layout from "../sections/Layout";
import PastExperience from "../sections/PastExperience";
import SideProjects from "../sections/SideProjects";

const Home: FC = () => {
  const onScrollToAnchor = useCallback((event?: Event) => {
    const { pageYOffset, scrollY } = window;
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((s: HTMLElement) => {
      const h = s.offsetHeight,
        id = s.getAttribute("id"),
        top = s.offsetTop - (id === `#${SECTION.HOME}` ? 90 : 58),
        link = document.querySelector(`.nav__menu a[href*="/fr${id}"]`);
      console.log(
        "id == the other",
        id,
        `#${SECTION.HOME}`,
        id === `#${SECTION.HOME}`
      );
      if (!link) {
        return;
      }

      const activeStyle = "blur-[2px]";
      if (scrollY > top && scrollY <= top + h) {
        link.classList.remove(activeStyle);
      } else {
        link.classList.add(activeStyle);
      }
    });
  }, []);

  useEffect(() => {
    onScrollToAnchor();
    window.addEventListener("scroll", onScrollToAnchor, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollToAnchor);
    };
  }, [onScrollToAnchor]);

  return (
    <Layout>
      <Hero />
      <PastExperience />
      <SideProjects />
      <ContactMe />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "common",
        "footer",
        "menu",
      ])),
    },
  };
};

export default Home;
