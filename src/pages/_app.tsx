import React from 'react';
import '@/styles/styles.scss';
import '@/styles/globals.scss';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

const Hero = dynamic(() => import('../components/hero'), { ssr: false });

const Footer = dynamic(() => import('../components/footer'), { ssr: false });

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <Hero />
      {/* <!-- main --> */}
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
      {/* <!-- end of main --> */}
      <Footer />
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
