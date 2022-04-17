import React, { useEffect } from "react";
import styles from "./index.module.css";
import image from "../../../../Screenshot_20220416-130458_captureit (1)_google-pixel5-justblack-portrait.png";

const ProjectAlgoVisualizer = () => {
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
        Write your own<span style={{ color: "#66FCF1" }}> algoritms</span> and
        <span style={{ color: "#66FCF1" }}> visualize</span> them
      </h2>
      <div className={styles.RightContainer}>
        <a className={styles.Button} href="https://algo-visualize.vercel.app/">
          <h4>Visit algoVisualize</h4>
        </a>
        <h5
          style={{
            color: "rgb(255, 255, 255, 0.8)",
            fontWeight: 500,
            marginTop: 6,
            marginBottom: 6,
            fontSize: 15,
          }}
        >
          or
        </h5>

        <a
          className={styles.Button}
          href="https://github.com/odinhufnagl/algo-visualize"
        >
          <h4>Github</h4>
        </a>
      </div>
    </div>
  );
};

export default ProjectAlgoVisualizer;
