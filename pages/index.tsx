import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

import ContactMe from "../sections/ContactMe";
import Hero from "../sections/Hero";
import Layout from "../sections/Layout";
import PastExperience from "../sections/PastExperience";
import SideProjects from "../sections/SideProjects";

const Home: FC = () => {
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
