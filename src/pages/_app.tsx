import React, { useEffect, useState } from "react";
import "../styles/globals.scss";

import { AppProps } from "next/app";

import PageLoader from "@/components/PageLoader";

export default function App({ Component, router, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="gray"
              stroke-width="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <Component {...pageProps} />
    </>
  );
}
