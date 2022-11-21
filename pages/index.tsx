import Layout from "../sections/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <h2 className="text-2xl text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100">
          I help/support business to develop/grow their business
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
