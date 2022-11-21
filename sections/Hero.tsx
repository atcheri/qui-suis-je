import { FC } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import HightLight from "../components/HighLight";
import TypeWriter from "../components/TypeWriter";
import CodeSnippets from "../sections/CodeSnippets";

const delayUnit = 500;

const Hero: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
      <div className="grid md:grid-cols-2 gap-3 md:gap-6">
        <div className="flex flex-col">
          <Slide direction="down" delay={delayUnit}>
            <Fade delay={delayUnit}>
              <h2 className="text-2xl sm:text-6xl font-bold">
                I ship <HightLight>production</HightLight> code, <br /> and help
                business to <TypeWriter words={["develop", "grow"]} />
              </h2>
            </Fade>
          </Slide>
          <Slide
            className="grow items-center flex gap-6 my-10"
            direction="down"
            delay={2 * delayUnit}
          >
            <Fade delay={2 * delayUnit}>
              <button className="btn" type="button" onClick={() => {}}>
                Download CV
              </button>
              <button className="btn" type="button" onClick={() => {}}>
                About me
              </button>
            </Fade>
          </Slide>
        </div>
        <Fade delay={3 * delayUnit}>
          <Slide direction="right" delay={3 * delayUnit}>
            <CodeSnippets />
          </Slide>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
