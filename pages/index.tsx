import Layout from "../sections/Layout";
import HightLight from "../components/HighLight";
import TypeWriter from "../components/TypeWriter";
import CodeSnippets from "../sections/CodeSnippets";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-6xl font-bold">
              I ship <HightLight>production</HightLight> code, <br /> and help
              business to <TypeWriter words={["develop", "grow"]} />
            </h2>
            <div className="grow items-center flex gap-6 my-10">
              <button className="btn" type="button" onClick={() => {}}>
                Download CV
              </button>
              <button className="btn" type="button" onClick={() => {}}>
                About me
              </button>
            </div>
          </div>
          <CodeSnippets />
        </div>
      </section>
    </Layout>
  );
}
