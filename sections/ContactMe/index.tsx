import { FC } from "react";

import AnchoredHeader from "../../components/AnchoredHeader";
import ContactForm from "./ContactForm";
import Section from "../../components/Section";
import { SECTION } from "../constants";
import ConnectWithMe from "./ConnectWithMe";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConnectWithMe />
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactMe;
