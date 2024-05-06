import React from "react";
import "../styles/globals.scss";

import { AppProps } from "next/app";

import PageLoader from "@/components/PageLoader";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, router, pageProps }: AppProps) {
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
  return (
    <AnimatePresence mode="wait">
      {
        loading ? (
          <PageLoader />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )
      }
    </AnimatePresence>
  );
}