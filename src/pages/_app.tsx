import React from 'react';
import '@/styles/styles.scss';
import '@/styles/globals.scss';
import Hero from '@/components/hero';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '@/components/footer';
import { AnimatePresence } from 'framer-motion';

function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <AnimatePresence initial={false} mode='popLayout'>
        <Hero />
        {/* <!-- main --> */}
        {children}
        {/* <!-- end of main --> */}
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <>
      <Layout>
        <Component key={pageKey} {...pageProps} />
      </Layout>
    </>
  );
}
