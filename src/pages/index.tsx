import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import * as THREE from "three";
import style from "../styles/Home.module.scss";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <!--=============== HEADER ===============--> */}
      <header className={style.header} id="header">
        <svg></svg>
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
              <i className="fa facebook-f">d</i>
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
