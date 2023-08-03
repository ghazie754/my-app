import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={`${styles.main} ${inter.className}`}>
        {/* <!-- main --> */}
        <main>
          {/* <!-- section --> */}
          <section className="section single-page">
            <div className="section-title">
              <h1>about me</h1>
              <div className="underline"></div>
            </div>
            <div className="section-center page-info">
              <p>
                {" "}
                <a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA">
                  Hi there 👋I&#x27;m Ghazi Ramadan form the United States of 🇺🇸
                  American.
                </a>
                <br />I studied computer science, applied maths, pure maths, and
                data science. I&#x27;m also an artist, game maker, DevOpsSec,
                and graph designer with programming (and creative coding in
                general) in my free time. Professional Landscape Designer with
                several years of experience working with clients to create and
                enhance the aesthetics and function of natural outdoor spaces.
                The ability to understand and fulfill a client&#x27;s vision is
                what sets us apart as a design and horticulture company. Design,
                manage, and plan projects of all sizes, from small to very
                large. My communication and collaboration skills make me a
                dynamic, dedicated professional. Thank you 🦕
              </p>
            </div>
          </section>
          {/* <!-- end of section --> */}
        </main>
        {/* <!-- end of section --> */}
      </div>
    </>
  );
}
