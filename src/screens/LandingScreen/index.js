import React from "react";
import styles from "./index.module.css";
import Projects from "./Projects";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import LatestProject from "./LatestProject";

const LandingScreen = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div class="aurora-outer">
        <Hero></Hero>
        <LatestProject></LatestProject>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default LandingScreen;
