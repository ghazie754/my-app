import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";

export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <>
      <Head />
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </>
  );
}
