import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { FC } from 'react';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
