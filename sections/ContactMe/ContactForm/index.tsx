import { Modal } from 'flowbite-react';
import { ChangeEvent, FC, FormEventHandler, useRef, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

type ContactFormProps = {};

const emailRegex = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
);

const ContactForm: FC<ContactFormProps> = () => {
  const name = useRef('');
  const email = useRef('');
  const message = useRef('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const onClose = () => {
    setMessageSent(() => false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(() => '');
    setSubmitting(() => true);
    if (!emailRegex.test(email.current)) {
      setError(() => 'Invalid email address');
      return;
    }
    if (!name.current || !message.current) {
      setError(() => 'Please fill in your name and the message');
      return;
    }
    const resp = await fetch('/api/email', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: name.current,
        email: email.current,
        message: message.current,
      }),
    });
    const { error } = await resp.json();
    setSubmitting(() => false);
    if (error) {
      setError(() => 'Sorry, your message was not sent... Try to contact me via email');
      return;
    }
    setMessageSent(() => true);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    name.current = e.target.value;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    email.current = e.target.value;
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    message.current = e.target.value;
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3 className="text-center text-2xl mb-2">Explain me your need</h3>
        <div className="relative h-16 mb-8">
          <label
            htmlFor="name"
            className="absolute px-2 w-fit h-fit -inset-y-3 inset-x-5 z-10 bg-slate-50 dark:bg-black"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNameChange}
            className="absolute inset-0 w-[100%] h-[100%] border-1 border-indigo-900 bg-transparent p-3 rounded-md"
            required
          />
        </div>
        <div className="relative h-16 mb-8">
          <label
            htmlFor="email"
            className="absolute px-2 w-fit h-fit -inset-y-3 inset-x-5 z-10 bg-slate-50 dark:bg-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            className="absolute inset-0 w-[100%] h-[100%] border-1 border-indigo-900 bg-transparent p-3 rounded-md"
            required
          />
        </div>
        <div className="relative h-48 mb-8">
          <label
            htmlFor="message"
            className="absolute px-2 w-fit h-fit -inset-y-3 inset-x-5 z-10 bg-slate-50 dark:bg-black"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="resize-none inset-0 w-[100%] h-[100%] border-1 border-indigo-900 bg-transparent p-3 rounded-md"
            onChange={handleMessageChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn inline-flex items-center gap-3 w-fit cursor-pointer mb-3"
          disabled={submitting}
        >
          {submitting && <VscLoading className="animate-spin" />} Send Message
        </button>
        {error && <span className="text-red-600">{error}</span>}
      </form>
      <Modal show={messageSent} onClose={onClose}>
        <Modal.Header>Thank you!</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <IoMdCheckmarkCircleOutline className="h-24 w-24 text-green-400" />
            <span className="my-6 text-2xl">Message successfully sent!</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
