import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Footer from "./footer";
import Hero from "./hero";

export default function Layout({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Hero />
      {/* <!-- main --> */}
      <main className={` ${inter.className}`}>{children}</main>
      {/* <!-- end of section --> */}
      <Footer />
    </>
  );
}
