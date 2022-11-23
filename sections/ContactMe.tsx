import { FC } from "react";

import AnchoredHeader from "../components/AnchoredHeader";
import Section from "../components/Section";
import { SECTION } from "./constants";

const ContactMe: FC = () => {
  return (
    <Section id={SECTION.CONTACT_ME}>
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor={SECTION.CONTACT_ME}
          title="Get in touch"
          subTitle="Did this page convince you to drop me a message?"
        />
      </div>
    </Section>
  );
};

export default ContactMe;
