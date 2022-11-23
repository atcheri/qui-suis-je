import { FC } from "react";

import AnchoredHeader from "../components/AnchoredHeader";
import Section from "../components/Section";
import { SECTION } from "./constants";

const SideProjects: FC = () => {
  return (
    <Section id={SECTION.SIDE_PROJECTS}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor={SECTION.SIDE_PROJECTS}
          title="Outside of work"
          subTitle="What I've recently learned and worked on"
        />
      </div>
    </Section>
  );
};

export default SideProjects;
