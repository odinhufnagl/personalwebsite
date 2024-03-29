import React, { useEffect } from "react";
import styles from "./index.module.css";
import image from "../../../../IMG_20210318_142755_google-pixel5-justblack-portrait.png";
const Projectpitchit = () => {
  const handleMouse = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 1000;
    var card2 = document.getElementById("cardmobile");

    console.log(e.x, e.y);

    if (card2 !== null && card2 !== undefined) {
      card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  };

  useEffect(() => {
    var card2 = document.getElementById("cardmobile");

    if (card2 !== null) {
      card2.addEventListener("mousemove", handleMouse);
    }
    card2.addEventListener("mouseenter", (e) => {
      card2.style.transition = "none";
    });
    card2.addEventListener("mouseleave", (e) => {
      card2.style.transition = "all 0.5s ease";
      card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }, []);
  return (
    <div className={styles.Container}>
      <h2 className={styles.Text}>
        <span style={{ color: "#66FCF1" }}>Social Network</span> for motivation
        and personal development
      </h2>
      <div className={styles.Mobile}>
        <img
          src={image}
          alt="phone"
          className={styles.Imagemobile}
          id={"cardmobile"}
        ></img>
      </div>
    </div>
  );
};

export default Projectpitchit;
