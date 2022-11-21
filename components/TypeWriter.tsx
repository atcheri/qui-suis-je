import { FC, PropsWithChildren } from "react";
import { Typewriter as SimpleTypeWriter } from "react-simple-typewriter";

type TypeWriterProps = { words: string[] };

const TypeWriter: FC<PropsWithChildren<TypeWriterProps>> = ({ words }) => {
  return <SimpleTypeWriter words={words} />;
};

export default TypeWriter;
