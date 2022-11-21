import { FC } from "react";

import AnchoredHeader from "../components/AnchoredHeader";
import Section from "../components/Section";

const SideProjects: FC = () => {
  return (
    <Section id="side-projects">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor="side-projects"
          title="Out of work"
          subTitle="What I've recently learned and worked on"
        />
      </div>
    </Section>
  );
};

export default SideProjects;
