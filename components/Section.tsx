import React, { FC, HTMLProps, PropsWithChildren } from "react";

type SectionProps = { id: string } & HTMLProps<HTMLElement>;

const Section: FC<PropsWithChildren<SectionProps>> = ({
  className = "",
  children,
  id = "",
}) => {
  return (
    <section id={`#${id}`} className={`${className} mt-24`}>
      {children}
    </section>
  );
};

export default Section;
