import React from "react";
import styles from "./index.module.css";
import image from "../../../IMG_20210318_142755_google-pixel5-justblack-portrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faTerminal,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className={styles.Containerintop} id="hero">
      <div className={styles.Container}>
        <div className={styles.Containerintopleft}>
          <h2 className="Bigheader">A fullstack developer</h2>
          <h1 className="Subheader">
            Specialized in React, React Native and Python
          </h1>
        </div>
        <FontAwesomeIcon
          icon={faLaptopCode}
          className={styles.Icon}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Hero;
