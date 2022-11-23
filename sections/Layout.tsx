import Head from "next/head";
import { FC, PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Qui-sui je? Atsuhiro</title>
        <meta
          name="description"
          content="Non, ce n'est pas un site de rencontre."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto max-w-6xl flex flex-col">
        <Header />
        <main className="flex-grow mx-auto px-4 sm:px-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
