import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const title = 'Qui-sui je? Atch';
  const description = "Non, ce n'est pas un site de rencontre.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="A-T-C-H" key="title" />
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="mask-icon" href="/itsutsu-inazuma.svg" color="#362F78"></link>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/qui-suis-je-hero.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/qui-suis-je-hero.png" />
        {/* <meta name="twitter:site" content= />
        <meta name="twitter:creator" content= /> */}
        <link rel="manifest" href="/manifest.json" />
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
