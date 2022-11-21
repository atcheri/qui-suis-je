import { FC } from "react";

import AnchoredHeader from "../components/AnchoredHeader";
import Section from "../components/Section";

const ContactMe: FC = () => {
  return (
    <Section id="contact-me">
      <div className="flex flex-col items-center m-8">
        <AnchoredHeader
          anchor="contact-me"
          title="Get in touch"
          subTitle="Did this page convince you to drop me a message?"
        />
      </div>
    </Section>
  );
};

export default ContactMe;
