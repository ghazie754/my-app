import React from "react";
import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../../components/layout";

import PageLoader from "@components/PageLoader";

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setTimeout(() => setLoading(false), 2500);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);
  return loading ? (
    <PageLoader />
  ) : (
    <>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
