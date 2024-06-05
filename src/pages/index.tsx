import style from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  if (typeof window !== 'undefined') {
    // window is available, run your code here]
    const Height = window.innerHeight;
    const Width = window.innerWidth;
    const screenResolutionHeight = window.screen.height ;
    const screenResolutionWidth = window.screen.width ;
    console.log("Screen resolution width: " + screenResolutionWidth +" "+Width+ " pixels");
    console.log("Screen resolution height: " + screenResolutionHeight +" "+Height+ " pixels");
  }
  return <div className=" w-dvw h-svh">sslkdlkdm</div>

}
