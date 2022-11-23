import React, { FC } from "react";

type ContactFormProps = {};

const ContactForm: FC<ContactFormProps> = () => {
  return (
    <form>
      <h3 className="text-center text-2xl mb-2">Explain me your need</h3>
      <input type="text" id="name" name="name" />
      <input type="email" id="email" name="email" />
      <textarea name="message" id="message"></textarea>
    </form>
  );
};

export default ContactForm;
