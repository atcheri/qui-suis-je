import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ContactMe from "../sections/ContactMe";
import Hero from "../sections/Hero";
import Layout from "../sections/Layout";
import PastExperience from "../sections/PastExperience";
import SideProjects from "../sections/SideProjects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PastExperience />
      <SideProjects />
      <ContactMe />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
