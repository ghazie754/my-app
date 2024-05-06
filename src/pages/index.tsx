import style from "../styles/Home.module.scss";
import React from "react";
import Svgbackground from "@/components/SvgBackground";
const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Home() {
  return (
    <>
     <Svgbackground/>
      {/* <!--=============== HEADER ===============--> */}
      <header className={style.header} id="header">
        <div>
          <ul>
            <li>
              <a href="">
                <i></i>
              </a>
            </li>
            <li>
              <a href="">
                <i></i>
              </a>
            </li>
            <li>
              <a href="">
                <i></i>
              </a>
            </li>
            <li>
              <a href="">
                <i></i>
              </a>
            </li>
            <li>
              <a href="">
                <i></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* <!--=============== MAIN ===============--> */}
      <main className="main">
        {/* <!--=============== HOME ===============--> */}
        <section className="home section" id="home"></section>

        {/* <!--=============== ABOUT ===============--> */}
        <section className="about section" id="about"></section>

        {/* <!--=============== SKILLS ===============--> */}
        <section className="skills section" id="skills"></section>

        {/* <!--=============== SERVICES ===============--> */}
        <section className="services section"></section>

        {/* <!--=============== WORK ===============--> */}
        <section className="work section" id="work"></section>

        {/* <!--=============== TESTIMONIALS ===============--> */}
        <section className="testimonial section"></section>

        {/* <!--=============== CONTACT ===============--> */}
        <section className="contact section" id="contact"></section>
      </main>

      {/* <!--=============== FOOTER ===============--> */}
      <footer className="footer"></footer>

      <div className="btn_wrap">
        <span>Share</span>
        <div className="container">
          <ul>
            <li>
              <i className="fa facebook">d</i>
            </li>
            <li>
              <i className="fa twitter">d</i>
            </li>
            <li>
              <i className="fa github">d</i>
            </li>
            <li>
              <i className="fa instagram">d</i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
