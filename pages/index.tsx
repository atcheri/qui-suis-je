import Layout from "../sections/Layout";
import HightLight from "../components/HighLight";
import TypeWriter from "../components/TypeWriter";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <h2 className="text-2xl text-center leading-normal sm:text-6xl font-bold">
          I help business to <TypeWriter words={["develop", "grow"]} />, by
          shipping <HightLight>production</HightLight> code
        </h2>
        <button className="btn" type="button" onClick={() => {}}>
          Download CV
        </button>
        <button className="btn" type="button" onClick={() => {}}>
          About me
        </button>
      </section>
    </Layout>
  );
}
