import React from 'react';
import '@/styles/styles.scss';
import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import Layout from '@/components/PageView';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Layout router={router} backgroundColor={'blue'}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
